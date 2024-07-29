import { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';

// eslint-disable-next-line react/prop-types
function AssignTo({ onChange, isDeveloperOnly }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const token1 = sessionStorage.getItem('token');
      if (token1) {
        try {
          const response = await axios.get('http://localhost:4444/api/getUser');
          
          if (response.status === 200) {
            const users = response.data;
            
            if (Array.isArray(users)) {
              
              const filteredUsers = users
                .filter(user => 
                  isDeveloperOnly ? user.user_type === 'developer' : user.user_type === 'developer' || user.user_type === 'qa'
                )
                .map(user => ({
                  value: user.id,
                  label: `${user.name} - ${user.user_type}`,
                }));
              setData(filteredUsers);
            } else {
              setError('Unexpected data format received.');
            }
          } else {
            setError(response.data.error || 'Error fetching data. Please try again later.');
          }
        } catch (error) {
          setError(error.response?.data?.error || 'Error fetching data. Please try again later.');
        } finally {
          setLoading(false);
        }
      } else {
        window.location.href = '/signIn'; 
      }
    };
    fetchData();
  }, [isDeveloperOnly]);

  const handleChange = (selectedOption) => {
    const selectedId = selectedOption ? selectedOption.value : null;
    if (onChange) {
      onChange(selectedId);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Select
      className="basic-single"
      classNamePrefix="select"
      defaultValue={null}
      isDisabled={false}
      isLoading={loading}
      isClearable={true}
      isRtl={false}
      isSearchable={true}
      name="user"
      options={data}
      onChange={handleChange}
    />
  );
}

export default AssignTo;

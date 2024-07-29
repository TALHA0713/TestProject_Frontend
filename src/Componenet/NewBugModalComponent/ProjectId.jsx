import { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';

// eslint-disable-next-line react/prop-types
function AssignTo({ onChange }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const token1 = sessionStorage.getItem('token');
      if (token1) {
        try {
            const decodedToken = JSON.parse(token1);
            const token = decodedToken.token;
            const arrayToken = token.split(".");
            const tokenPayload = JSON.parse(atob(arrayToken[1]));
            const userId = tokenPayload.id.toString();
            const response = await axios.get(`http://localhost:4444/api/getProjectsForUser/${userId}`);
            setData(response.data);
            setLoading(false);
          
          if (response.status === 200) {
            const projects = response.data;
            
            if (Array.isArray(projects)) {
              const projectOptions = projects.map(project => ({
                value: project.id,  // ID of the project
                label: project.name,  // Name of the project
              }));
              setData(projectOptions);
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
  }, []);

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
      isSearchable={true}
      name="project"
      options={data}
      onChange={handleChange}
    />
  );
}

export default AssignTo;

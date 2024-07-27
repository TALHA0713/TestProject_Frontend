import { useState, useEffect } from 'react';
import axios from 'axios';

// eslint-disable-next-line react/prop-types
const DisableButton = ({ handleOpen }) => {
  const [loading, setLoading] = useState(true);
  const [userType, setUserType] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const token1 = sessionStorage.getItem('token');
      if (token1) {
        try {
          const decodedToken = JSON.parse(token1);
          const token = decodedToken.token;
          const arrayToken = token.split('.');
          const tokenPayload = JSON.parse(atob(arrayToken[1]));
          const userId = tokenPayload.id.toString();
          console.log(userId)
          const response = await axios.get(`http://localhost:4444/api/getSingleUser/${userId}`);
          console.log(response)
          setUserType(response.data.user_type);
          console.log(userType)
          setLoading(false);
        } catch (error) {
          console.error('Error decoding token:', error);
          setLoading(false);
        }
        return;
      }
      window.location.href = '/signIn'; 
    }
    fetchData();  
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const isManager = userType === 'manager';

  return (
    <button
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded ${
        !isManager ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      onClick={isManager ? handleOpen : undefined}
      disabled={!isManager}
    >
      + Add New Project
    </button>
  );
};

export default DisableButton;

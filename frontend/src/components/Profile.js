// Profile.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Profile() {
  const [profileData, setProfileData] = useState({});
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/profile');
        setProfileData(response.data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
  }, []);

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const response = await axios.get('http://localhost:3001/getUserId', {
          params: { email: profileData.email } // Pass the email to identify the user
        });
        setUserId(response.data.userId);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserId();
  }, []);

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {profileData.name}</p>
      <p>Email: {profileData.email}</p>
      <p>
      {userId ? (
        <p>User ID: {userId}</p>
      ) : (
        <p>Loading...</p>
      )}
    </p>
    </div>
  );
}

export default Profile;
import React, { useRef, useState, useEffect } from 'react';
import SettingSection from './SettingSection';
import { User } from 'lucide-react';

const Profile = () => {
  const fileInputRef = useRef(null);
  const [profileImage, setProfileImage] = useState('');

  // Load saved image on mount
  useEffect(() => {
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

  // Handle image upload and store in localStorage
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileImage(reader.result);
      localStorage.setItem('profileImage', reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <SettingSection icon={User} title="Profile">
      <div className="flex flex-col sm:flex-row items-center mb-6">
        <img
          src={profileImage || 'https://via.placeholder.com/80?text=User'}
          alt="Profile"
          className="rounded-full w-20 h-20 object-cover mr-4"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-100">kosar Akbarshah</h3>
          <p className="text-gray-400">kosar@gmail.com</p>
        </div>
      </div>

      <input
        type="file"
        accept="image/*"
        className="hidden"
        ref={fileInputRef}
        onChange={handleImageChange}
      />

      <button
        onClick={() => fileInputRef.current.click()}
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto"
      >
        Change Profile Picture
      </button>
    </SettingSection>
  );
};

export default Profile;

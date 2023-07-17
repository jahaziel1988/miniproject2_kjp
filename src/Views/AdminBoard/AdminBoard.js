import React, { useState, useEffect } from 'react';
import './AdminBoard.css';
import AdminNav from '../../Components/AdminNav/AdminNav';

const userData = [
  {
    id: 1,
    username: 'kendrick_bareng',
    fullName: 'Kendrick Bareng',
    email: 'kendrick.bareng@example.com',
    address: '123 Main Street',
    dateOfBirth: '1990-05-15',
    hearAboutUs: 'Social Media',
    memberOfOtherCommunities: 'Yes',
    contribution: 'asdhghjasgdauybfafafasf',
    dreamCommunity: 'asdfgasddsfffsdfsdfsdfdsf',
    status: 'Pending',
  },
  {
    id: 2,
    username: 'paolo_herrera',
    fullName: 'Paolo Herrera',
    email: 'paolo.herrera@example.com',
    address: '456 Oak Avenue',
    dateOfBirth: '1988-10-20',
    hearAboutUs: 'Friends',
    memberOfOtherCommunities: 'No',
    contribution: "asdsddddddddddddddddddadfgfcacaswafsadfasd",
    dreamCommunity: 'kahjlreoamrfoamdosinamidnaiodnoajndoaijfnjanfioanfawf',
    status: 'Pending',
  },
  {
    id: 3,
    username: 'jahaziel_naval',
    fullName: 'Jahaziel Naval',
    email: 'jahaziel.naval@example.com',
    address: '789 Elm Road',
    dateOfBirth: '1995-02-28',
    hearAboutUs: 'Online Forum',
    memberOfOtherCommunities: 'Yes',
    contribution: 'asdkbsdfhioioioioioioioioioiohsdfsdf',
    dreamCommunity: 'sdfbahjfbaisdgiauwghioawbnflkaejfpoaejdioawhdiouabwfioa',
    status: 'Pending',
  },
];


const AdminBoard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(userData);

  useEffect(() => {
    document.title = '2KLC | Admin';
  }, []);

  useEffect(() => {
    const filteredData = userData.filter((user) =>
      user.fullName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredUsers(filteredData);
  }, [searchQuery]);

  return (
    <div>
      <AdminNav />
      <div className="admin-board">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search Username"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="user-list">
          {filteredUsers.map((user) => (
            <div className="user-row" key={user.id}>
              <h3>Username: {user.username}</h3>
              <p>Email Address: {user.email}</p>
              <p>Full Name: {user.fullName}</p>
              <p>Address: {user.address}</p>
              <p>Date of birth: {user.dateOfBirth}</p>
              <p>How did you hear about us? {user.hearAboutUs}</p>
              <p>Are you a member of other communities? {user.memberOfOtherCommunities}</p>
              <p>What can you contribute to this community? {user.contribution}</p>
              <p>What is your dream community? {user.dreamCommunity}</p>
              <div className="status-buttons">
                <span>Status: {user.status}</span>
                <button className="approve-button">Approve</button>
                <button className="disapprove-button">Disapprove</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminBoard;

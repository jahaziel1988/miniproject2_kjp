import React, { useState, useEffect } from 'react';
import './AdminBoard.css';
import AdminNav from '../../Components/AdminNav/AdminNav';
import axios from 'axios';


const AdminBoard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [showApproveModal, setShowApproveModal] = useState(false);
  const [userToApprove, setUserToApprove] = useState(null);
  


  useEffect(() => {
    document.title = '2KLC | Admin';

    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios
      .get('http://localhost:4000/users', {
        params: { searchQuery, is_approved: false },
      })
      .then((response) => {
        const unapprovedUsers = response.data.filter((user) => !user.is_approved);
        setFilteredUsers(unapprovedUsers);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  };
  
  
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchUsers();
    }, 300); 

    return () => clearTimeout(delayDebounceFn);
  }, );

  

  const handleApprove = (user) => {
    setUserToApprove(user);
    setShowApproveModal(true);
  };

  const handleApproveConfirmation = () => {
    if (userToApprove) {
      axios
        .post('http://localhost:4000/admin/approve', { 
          userID: userToApprove.uID, 
          email: userToApprove.email, 
          username: userToApprove.username,
          full_name: userToApprove.full_name
        })
        .then((response) => {
          console.log(response.data.message);
          setShowApproveModal(false);
          setFilteredUsers(prevUsers => prevUsers.filter(user => user.uID !== userToApprove.uID));
          fetchUsers();
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };


  const closeModal = () => {
    setShowApproveModal(false);
  };

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
              <h3><span>Username:</span> {user.username}</h3>
              <p><span>Email Address:</span> {user.email}</p>
              <p><span>Full Name:</span> {user.full_name}</p>
              <p><span>Address:</span> {user.address}</p>
              <p><span>Date of birth:</span> {user.birthdate}</p>
              <p><span>How did you hear about us?</span> {user.hear_from_us}</p>
              <p><span>Are you a member of other communities?</span> {user.member_of_other_communities}</p>
              <p><span>What can you contribute to this community?</span> {user.what_can_you_do}</p>
              <p><span>What is your dream community?</span> {user.dream_community}</p>
              <div className="status-buttons">
              <button className="approve-button" onClick={() => handleApprove(user)}>
                  Approve
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showApproveModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Approve User</h3>
            <p>Please confirm that you want to approve this person.</p>
            <div className="modal-buttons">
              <button className="modal-no" onClick={closeModal}>
                No
              </button>
              <button className="modal-yes" onClick={handleApproveConfirmation}>
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminBoard;

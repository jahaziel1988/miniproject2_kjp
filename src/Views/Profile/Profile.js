import React from 'react'
import NavHome from '../../Components/NavHome/NavHome'
import { useEffect } from 'react';


const Profile = () => {

    useEffect(() => {
        document.title = '2KLC | Profile';
      }, []);



  return (
    <div>
        <NavHome/>
    </div>
  )
}

export default Profile
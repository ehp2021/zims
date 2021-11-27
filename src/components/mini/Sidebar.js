import React from "react";
import './Sidebar.css';
import { useMoralis } from 'react-moralis';
import {Link} from 'react-router-dom'


const Sidebar = () => {
    const { user } = useMoralis(); 
   const image = 'https://icon-library.com/images/anime_spirited_away_no_face_nobody-512.png';
    return (
    <div className ='sideBar'>
        <div className="user-info">
        <input type="image" img src ={image} alt="photo" style={{height:'150px'}}/>
            <Link to='/settings'><h4>Edit Profile</h4></Link>
            <div className ='username'>
            <h5 style={{fontWeight: '900'}}>{user.attributes.username || 'ZIMUSER'}</h5>
            <h5>{user.get('points') || "25459 Points"}</h5>
            </div>
            {/* <h5>{user.get('points') || "25459 Points"}</h5> */}
        </div>
    </div>
    );

};


export default Sidebar;
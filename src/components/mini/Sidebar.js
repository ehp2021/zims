import React, {useEffect} from "react";
import './Sidebar.css';
import { useMoralis } from 'react-moralis';
import {Link} from 'react-router-dom'
import moment from 'moment';

const Sidebar = () => {
    const { user, refetchUserData} = useMoralis(); 

    useEffect(() => {
        refetchUserData();
    },[])

   const image = 'https://icon-library.com/images/anime_spirited_away_no_face_nobody-512.png';
    return (
    <div className ='sideBar'>
        <div className="user-info">
            <input type="image" img src ={user.attributes.displayPicture} alt="photo" style={{height:'150px', width: '150px', borderRadius: '100px'}}/>
                <Link to='/settings'><h4>Edit Profile</h4></Link>
                <div className ='username'>
                    <h5 style={{fontWeight: '900'}}>{user.attributes.username || 'ZIMUSER'}</h5>
                </div>
                    <br></br>
                    <h5>{user.attributes.points.toLocaleString("en-US")} Points</h5>
                    <br></br>    

                    <h5><strong>Last Updated:</strong>
                    <div>{moment(user.attributes.updatedAt.toString()).format('MM/DD/YYYY')}</div>
                    </h5>
                
            </div>
    </div>
    );

};


export default Sidebar;
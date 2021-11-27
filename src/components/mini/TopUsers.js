import React from 'react'
import './TopUsers.css'
import { useEffect, useState } from 'react'
import APIService from '../../apiService'
import { useNavigate } from "react-router-dom";


const TopUsers = () => {

    const [trips, changeTrips] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        async function getTrips() {
            const fetchedTrips = await APIService.getAllTrips();
            const sortedTrips = fetchedTrips.trips.sort((a, b) => b.likes.length - a.likes.length)
            changeTrips(sortedTrips);
        }
        getTrips()
    }, [])

    return ( 
      <div className = "discover-container" > {
            trips.length > 0 && trips.map(trip => {

                return ( 
                  <div key = { trip._id }
                    onClick = {
                        () => navigate(`/posts/${trip._id}`) }
                    className = "discover-trip"
                    style = {
                        { backgroundImage: `url(${trip.url})` } } >
                    <p>{ trip.title }</p>
                    </div>
                )
            })
        } 
        </div>
    )
}

export default TopUsers
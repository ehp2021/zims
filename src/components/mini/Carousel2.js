//import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({

    carousel: {
        height: '50%',
        display: 'flex',
        //flexDirection: 'row',
        alignItems: 'center',
        border: 'solid',
    },
    carouselItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer',
        textTransform: 'uppercase',
        color: 'black',
        border: 'solid',
    },
}));



const Carousel2 = () => {

    const classes = useStyles();
    //const [topUsers, setTopUsers] = useState();


    let fakeUsers = [
        '1st Place',
        '2nd Place',
        '3rd Place',
        '4th Place',
        '5th Place',
    ]
    
    //setTopUsers(fakeUser)


    const items = fakeUsers.map((user) => {
        console.log(user)
        
        return (

            <Link 
            className={classes.carouselItem}
            to = { `/profile` } >
            <img src = {
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
            }
            alt = { 'Author' }
            height = '80' />
            <span > { user } </span>
            </Link>
        )

    })


    return ( 
        
        <div className={classes.carousel}>
           <AliceCarousel 
                mouseTracking
                infinite
                autoPlayInterval={500}
                animationDuration={1000}
                disableDotsControls
                disableButtonsControls
                //responsive= {responsive}
                    autoPlay
                    items={items}
            />

        </div>
    )
}

export default Carousel2
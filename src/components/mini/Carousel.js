// https://chakra-templates.dev/page-sections/carousels

import React from 'react';
import './Carousel.css'

export default function Carousel() {

  const userData = [{
          title: <div> @UserRank1 </div>,
          text: 15035,
          image: 'https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60'
      },
      {
          title: <div> @UserRank2 </div>,
          text: 18035,
          image: 'https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2274&q=80'
      },
      {
          title: <div> @UserRank3 </div>,
          text: 20105,
          image: 'https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60'
      },
      {
        title: <div> @UserRank4 </div>,
        text: 25105,
        image: 'https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60'
      },
      {
        title: <div> @UserRank5 </div>,
        text: 8815,
        image: 'https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60'
    }
  ];

    return (
        <div>
          <div>
            {userData.sort((a,b)=>b.text-a.text).map((user,i)=>{
              return(
                <div className="user-container">
                  <div className='topUserRanking'>
                  <h1 >{`#${i+1}`}</h1>
                  <h4 style={{color: 'orange'}}>{user.title}</h4>
                  <h4 style={{color: 'white'}}>{`Points`}</h4>
                  <h4 style={{color: 'white'}}>{`${user.text}`}</h4>
                  </div>
                  <div className ='user-info'>
                <img src={user.image} alt="cool" 
                  style={{height:"200px" }}
                  />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
    );
}
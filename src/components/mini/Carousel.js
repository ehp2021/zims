// https://chakra-templates.dev/page-sections/carousels

import React from 'react';
import './Carousel.css'

export default function Carousel() {

  const userData = [{
          title: <div> @UserRank1 </div>,
          text: 15035,
          image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F4f%2F40%2F0b%2F4f400b2a528f96b403a4cf14854fcbd1.jpg&f=1&nofb=1'
      },
      {
          title: <div> @UserRank2 </div>,
          text: 18035,
          image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Favatarfiles.alphacoders.com%2F144%2F144986.jpg&f=1&nofb=1'
      },
      {
          title: <div> @UserRank3 </div>,
          text: 20105,
          image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.pngguru.com%2Fpreview%2F990%2F762%2F394%2Fscience-cartoon-robot-avatar-gynoid-animation-human-internet-bot-3d-computer-graphics-png-clipart.jpg&f=1&nofb=1'
      },
      {
        title: <div> @UserRank4 </div>,
        text: 25105,
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages3.alphacoders.com%2F690%2F690494.jpg&f=1&nofb=1'
      },
      {
        title: <div> @UserRank5 </div>,
        text: 8815,
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.dribbble.com%2Fusers%2F21207%2Fscreenshots%2F2755338%2Fdog_1x.png&f=1&nofb=1'
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
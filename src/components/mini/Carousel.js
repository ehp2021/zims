import React from 'react';
import './Carousel.css';
import { useMoralisCloudFunction } from 'react-moralis'; // enable cloud functions on moralis dashboard

const Carousel = () => {
  const { data } = useMoralisCloudFunction('getUsers');

  return (
    <div className='top-user-container'>
      <div className='user-container-title'>
        <h2>Top Users</h2>
      </div>
      {data !== null && (
        <div>
          {data.map((user, i) => {
            return (
              <div className='user-container' key={user.attributes.id}>
                <div className='topUserRanking'>
                  <h1> {`#${i + 1}`} </h1>
                  <h4 style={{ color: 'white' }}>{user.attributes.username}</h4>
                  <h4 style={{ color: 'orange', marginTop: '20px' }}>
                    {user.attributes.points.toLocaleString('en-US')} Points
                  </h4>
                </div>
                <div className='user-info'>
                  <img
                    src={user.attributes.displayPicture}
                    alt=''
                    style={{ height: '200px' }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Carousel;

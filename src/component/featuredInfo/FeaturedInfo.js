import React from 'react';
import './featuredInfo.css';
import users from './icons/users-f.png';
import active from './icons/active.png';
import usersWithLoan from './icons/usersWloan.png';
import usersWithSavings from './icons/Wsavings.png';

const FeaturedInfo = () => {
  return (
      <div className="featuredinfo">
          <div className="featureditem">
              <span><img src={users} alt="users icon" /></span>
              <span className='featureTitle'>USERS</span>
              <span className='featureUsers'>2,453</span>
          </div>
          <div className="featureditem">
              <span><img src={active} alt="users icon" /></span>
              <span className='featureTitle'>ACTIVE USERS</span>
              <span className='featureUsers'>2,453</span>
          </div>
          <div className="featureditem">
              <span><img src={usersWithLoan} alt="users icon" /></span>
              <span className='featureTitle'>USERS WITH LOAN</span>
              <span className='featureUsers'>2,453</span>
          </div>
          <div className="featureditem">
              <span><img src={usersWithSavings} alt="users icon" /></span>
              <span className='featureTitle'>USERS WITH SAVINGS</span>
              <span className='featureUsers'>2,453</span>
          </div>
    </div>
  )
}

export default FeaturedInfo;
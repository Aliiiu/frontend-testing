import React from 'react';
import './viewmore.css';
import viewmore from './Asset/np_view.png';
import activate from './Asset/np_user.png';
import blacklist from './Asset/np_delete.png';

const ViewMore = () => {
  return (
    <div className='viewmore'>
      <div>
        <img src={viewmore} alt=" " />
        View Details
      </div>
      <div className="options">
        <img src={blacklist} alt=" " />
        Blacklist User
      </div>
      <div className="options">
        <img src={activate} alt=" " />
        Activate User
      </div>
    </div>
  )
}

export default ViewMore
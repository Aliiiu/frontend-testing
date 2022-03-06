import React from 'react';
import Logo from '../Logo';
import './Topbar.css';
import { NotificationsNone } from '@mui/icons-material/';
import {ArrowDropDown} from '@mui/icons-material/';
import avatar from '../../Asset/Avatar/image 4.png'

const Topbar = () => {
  return (
      <div className="topbar">
          <div className="topbarwrapper">
              <div className="topLeft">
                  <Logo />
              </div>
              <div className="topMiddle"></div>
              <div className="topRight">
                  <a href='_blank'>Docs</a>
                  <div className="topbariconcontainer">
                    <NotificationsNone color='primary' fontSize='large'/>
                  </div>
                  <div className="topAvatar">
                      <img src={avatar} alt="profile avatar" />
                  </div>
                  <h4>Adedeji</h4>
                  <ArrowDropDown color='primary'/>
              </div>
          </div>
    </div>
  )
}

export default Topbar
import React from "react";
import "./TopBar.css";

import {NotificationsNone , Language , Settings} from '@material-ui/icons';

const TopBar = () => {
  return (
    <div className="topBar">
      <div className="topBarWrapper">
        <div className="topLeft"><span className = "logo">Mzansie Solution</span></div>
        <div className="topRight">
            <div className="topBarIconContainer">
              <NotificationsNone/>
              <span className = "topIconBadge">4</span>
            </div>
            <div className="topBarIconContainer">
              <Language/>
            </div>
            <div className="topBarIconContainer">
              <Settings/>
            </div>
            <img src = "https://images.pexels.com/photos/7433162/pexels-photo-7433162.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="topAvator"></img>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

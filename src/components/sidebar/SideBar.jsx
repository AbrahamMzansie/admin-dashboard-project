import React from "react";
import "./SideBar.css";

import {
  MonetizationOn,
  Assessment,
  MailOutline,
  LineStyle,
  TrendingUp,
  Timeline,
  PersonOutline,
  DynamicFeed,
  Message,
  WorkOutline,
  Report
} from "@material-ui/icons";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sideBarWrapper">
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Dashboard</h3>
          <ul className="sideBarList">
            <li className="sideBarListItem active">
              <LineStyle className="sideBarIcon" />
              Home
            </li>
            <li className="sideBarListItem">
              <Timeline className="sideBarIcon" />
              Analytics
            </li>
            <li className="sideBarListItem">
              <TrendingUp className="sideBarIcon" />
              Sales
            </li>
            
          </ul>
        </div>
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Quick Menu</h3>
          <ul className="sideBarList">
            <li className="sideBarListItem">
              <PersonOutline className="sideBarIcon" />
              User
            </li>
            <li className="sideBarListItem">
              <MonetizationOn className="sideBarIcon" />
              Transactions
            </li>
            <li className="sideBarListItem">
              <Assessment className="sideBarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Notifications</h3>
          <ul className="sideBarList">
            <li className="sideBarListItem">
              <MailOutline className="sideBarIcon" />
              Mail
            </li>
            <li className="sideBarListItem">
              <DynamicFeed className="sideBarIcon" />
              Feedback
            </li>
            <li className="sideBarListItem">
              <Message className="sideBarIcon" />
              Message
            </li>
            
          </ul>
        </div>
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Staff</h3>
          <ul className="sideBarList">
            <li className="sideBarListItem">
              <WorkOutline className="sideBarIcon" />
              Manage
            </li>
            <li className="sideBarListItem">
              <Timeline className="sideBarIcon" />
              Analytics
            </li>
            <li className="sideBarListItem">
              <Report className="sideBarIcon" />
              Report
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

import React from "react";
import "./FeaturedInfo.css";

import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenues</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,500</span>
          <span className="featuredMoneyrate">
            -11,4 <ArrowDownward className="featuredIcon negetive" />
          </span>
        </div>
        <span className="featuredSubTitle">Compared To Last Month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,500</span>
          <span className="featuredMoneyrate">
            -11,4 <ArrowDownward className="featuredIcon negetive" />
          </span>
        </div>
        <span className="featuredSubTitle">Compared To Last Month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$5,500</span>
          <span className="featuredMoneyrate">
            +1,4 <ArrowUpward className="featuredIcon positive"/>
          </span>
        </div>
        <span className="featuredSubTitle">Compared To Last Month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;

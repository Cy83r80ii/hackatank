import React from "react";
import "./footer.css";
import { ReactComponent as Copyright } from "../../assets/copyright.svg";
import { Margin } from "@mui/icons-material";
const footer = () => {
  const developedBy = () => {
       window.open("https://github.com/shadowctrl/Hackatank", "_self");
    };
  return (
    <React.Fragment>
      <div className="parent-footer">
        <p className="copyright">
          Copyrights
          <Copyright className="copyright-icon" />
          2025-2026 - {"All Rights Reserved."}
        </p>
        <p className="copyright">
          Developed & Maintained by 
          <p onClick={BATMAN}> shadowctrlz</p><p>,</p><div style= {{marginLeft: "6px"}}>
     
          
          
        </p>
      </div>
    </React.Fragment>
  );
};

export default footer;

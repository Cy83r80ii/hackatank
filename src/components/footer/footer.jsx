import React from "react";
import "./footer.css";
import { ReactComponent as Copyright } from "../../assets/copyright.svg";
import { Margin } from "@mui/icons-material";
const footer = () => {
  const BATMAN = () => {
     window.open("https://github.com/Cy83r80ii", "_self");
  };
  const developedBy = () => {
       window.open("https://kmadhesh143.github.io/madhesh.portfolio", "_self");
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
          <p onClick={BATMAN}> Cy83r80ii</p><p>,</p><div style= {{marginLeft: "6px"}}>
          <p onClick={developedBy}>kmadhesh143</p></div>
          
          
        </p>
      </div>
    </React.Fragment>
  );
};

export default footer;

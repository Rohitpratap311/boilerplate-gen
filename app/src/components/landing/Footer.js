import React from "react";
import { FaGithub, FaCopyright } from 'react-icons/fa'
import { Link } from "@material-ui/core";



export default function footer() {
  return (
    <div style={{ background: "#1f1f1f", height: "210px" }}>
        <div style={{ color:'white', padding: '30px', textAlign:'center'}}>
            <FaGithub  size="40px" href="#"/>
            <br /><br />
            View the code <Link style={{ color: "Lightgreen" }} href="https://github.com/Aerothon-NTP/boilerplate-gen">Here</Link>.
            <br /><br />
            <FaCopyright />
            &nbsp;&nbsp;
            2020  IT'S LASAGNE BITCHES!!!.  ALL RIGHTS RESERVED. PRIVACY POLICY
        </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function mainButtons() {
    return (
<div class="parent">
<img src="https://project-3-20190122205700-deployment.s3.amazonaws.com/tabletop_assistant_title.png" id="main_header" />

<div class="row">
<div id="leftMain">
    <Link to="/create" className={window.location.pathname === "/create"}><img src="https://project-3-20190122205700-deployment.s3.amazonaws.com/create_button_dark.jpg" onmouseover="this.src='https://project-3-20190122205700-deployment.s3.amazonaws.com/create_button_light.jpg'"
        onmouseout="this.src='https://project-3-20190122205700-deployment.s3.amazonaws.com/create_button_dark.jpg'" /></Link>
</div>
<div id="centerMain">
<Link to="/view" className={window.location.pathname === "/view"}><img src="https://project-3-20190122205700-deployment.s3.amazonaws.com/view_button_dark.jpg" onmouseover="this.src='https://project-3-20190122205700-deployment.s3.amazonaws.com/view_button_light.jpg'"
        onmouseout="this.src='https://project-3-20190122205700-deployment.s3.amazonaws.com/view_button_dark.jpg'" /></Link>
</div>
<div id="rightMain">
<Link to="/begin" className={window.location.pathname === "/begin"}><img src="https://project-3-20190122205700-deployment.s3.amazonaws.com/begin_button_dark.jpg" onmouseover="this.src='https://project-3-20190122205700-deployment.s3.amazonaws.com/begin_button_light.jpg'"
        onmouseout="this.src='https://project-3-20190122205700-deployment.s3.amazonaws.com/begin_button_dark.jpg'" /></Link>
</div>
</div>
</div>
    );
  }
  
  export default mainButtons;
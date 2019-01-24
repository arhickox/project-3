import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

const leftMainStyle = {
    height: '500px',
    width: '300px',
    marginTop: '50px',
    marginLeft: 'auto',
    marginRight: '250px',
    padding: '50px'
};

const centerMainStyle = {
    height: '500px',
    width: '300px',
    marginTop: '50px',
    marginLeft: '10px',
    marginRight: '10px',
    padding: '50px'
};

const rightMainStyle = {
    height: '500px',
    width: '300px',
    marginTop: '50px',
    marginLeft: '250px',
    marginRight: 'auto',
    padding: '50px'
};

function Main() {
    return (
        <div>
            <img src="https://project-3-20190122205700-deployment.s3.amazonaws.com/tabletop_assistant_title.png" id="main_header" />

            <div class="row" />
            <div id="leftMain" style={leftMainStyle}>
                <Link to="/create" className={window.location.pathname === "/create"}><img src="https://project-3-20190122205700-deployment.s3.amazonaws.com/create_button_dark.jpg" onmouseover="this.src='https://project-3-20190122205700-deployment.s3.amazonaws.com/create_button_light.jpg'"
                    onmouseout="this.src='https://project-3-20190122205700-deployment.s3.amazonaws.com/create_button_dark.jpg'" /></Link>
            </div>
            <div id="centerMain" style={centerMainStyle}>
            <Link to="/view" className={window.location.pathname === "/view"}><img src="https://project-3-20190122205700-deployment.s3.amazonaws.com/view_button_dark.jpg" onmouseover="this.src='https://project-3-20190122205700-deployment.s3.amazonaws.com/view_button_light.jpg'"
                    onmouseout="this.src='https://project-3-20190122205700-deployment.s3.amazonaws.com/view_button_dark.jpg'" /></Link>
            </div>
            <div id="rightMain" style={rightMainStyle}>
            <Link to="/begin" className={window.location.pathname === "/begin"}><img src="https://project-3-20190122205700-deployment.s3.amazonaws.com/begin_button_dark.jpg" onmouseover="this.src='https://project-3-20190122205700-deployment.s3.amazonaws.com/begin_button_light.jpg'"
                    onmouseout="this.src='https://project-3-20190122205700-deployment.s3.amazonaws.com/begin_button_dark.jpg'" /></Link>
            </div>
        </div>
    );
}

export default Main;

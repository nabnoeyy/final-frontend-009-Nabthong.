import React from "react";
import cv_nabthong from "../assets/download/CV_NABTHONG.pdf";

const Header = () => {
  const menuFunction = () => {
    const menuBtn = document.getElementById("myNavMenu");
    if (menuBtn.className === "nav-menu") {
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  };
  return (
    <nav id="header">
      <div className="nav-logo">
        <p className="nav-name">ตั้งหวังเจ๊ง</p>
       
      </div>
      <div className="nav-menu" id="myNavMenu">
        <div className="searth-n">
          
        <div className="searth">
          <input type="text" placeholder="search"></input>
        </div>
        </div>
        <ul className="nav_menu_list">
          <li className="nav_list">
            <a href="#home" className="nav-link active-link">
              หน้าแรก
            </a>
          </li>
          <li className="nav_list">
            <a href="#about" className="nav-link">
              เกี่ยวกับ
            </a>
          </li>
        </ul>
        <li className="nav-list">
          <a href="#projects" className="nav-link">
            สินค้า
          </a>
        </li>
        <li className="nav-list">
          <a href="#contact" className="nav-link">
            ติดต่อ
          </a>
        </li>
      </div>
      <div className="nav-button">
        <a href={cv_nabthong} target="_blank">
          <button className="btn">
            Download CV <i className="uil uil-import"></i>
          </button>
        </a>
      </div>
      <div className="nav-menu-btn">
        <i className="uil uil-bars" onClick={menuFunction}></i>
      </div>
    </nav>
  );
};

export default Header;

import React from "react";
import com7 from "../assets/images/comse.jpg";
const FeaturedBox = () => {
  return (
    <section className="featured-box" id="home">
      <div className="featured-text">
       
        <div className="featured-name">
          WELCOME <span className="typedText"></span>
        </div>
        <div className="featured-text-info">
          <p>
          ยินดีต้อนรับสู่ตั้งหวังเจ๊งที่ซึ่งคุณจะได้พบกับแล็ปท็อปและคอมพิวเตอร์หลากหลายรุ่นที่ตอบโจทย์ทุกความต้องการของคุณไม่ว่าจะเป็นการทำงานที่ต้องการประสิทธิภาพสูงการเล่นเกมที่มอบประสบการณ์สุดยอด หรือการเรียนรู้ที่ราบรื่น เรามีตัวเลือกมากมายจากแบรนด์ชั้นนำระดับโลก พร้อมข้อมูลจำเพาะและรีวิวจากผู้เชี่ยวชาญเพื่อให้คุณมั่นใจในทุกการตัดสินใจ นอกจากนี้ เรายังมีข้อเสนอและบริการพิเศษที่จะช่วยให้การเลือกซื้อของคุณเป็นเรื่องง่ายและน่าพึงพอใจที่สุด!
          </p>
        </div>
        <div className="featured-text-btn">
          <button className="btn">
            Download CV <i className="uil uil-import"></i>
          </button>
        </div>
        <div className="social_icons">
          <div className="icon">
            <a href="https://www.instagram.com/nabnoeyy/?hl=en">
              <i className="uil uil-instagram-alt"></i>
            </a>
          </div>
          <div className="icon">
            <a href="https://www.facebook.com/profile.php?id=100027080432483">
              <i className="uil uil-facebook"></i>
            </a>
          </div>
          <div className="icon">
            <a href="https://github.com/nabnoeyy">
              <i className="uil uil-github"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="featured-image">
        <div className="image">
          <img src={com7} alt="com7" />
        </div>
      </div>
      <div className="scroll-icon-box">
        <a href="#about" className="scroll-btn">
          <i className="uil uil-mouse-alt"></i>
          <p>Scroll Down</p>
        </a>
      </div>
    </section>
  );
};

export default FeaturedBox;

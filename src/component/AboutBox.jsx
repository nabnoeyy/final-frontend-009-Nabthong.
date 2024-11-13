import React from "react";
import cv_nabthong from "../assets/download/CV_NABTHONG.pdf";

const AboutBox = () => {
  return (
    <section className="section" id="about">
      <div className="top-header">
        <h1>About Me</h1>
      </div>
      <div className="row">
        {/**About Me */}
        <div className="col">
          <div className="about-info">
            <h3>My introduction</h3>
            <p>
            แพลตฟอร์มที่ครอบคลุมสำหรับผู้ที่มองหาคอมพิวเตอร์และอุปกรณ์เทคโนโลยีที่ครบครันไม่ว่าคุณจะเป็นนักศึกษา ผู้เชี่ยวชาญในสายงาน หรือเกมเมอร์ตัวยง เรามีคอมพิวเตอร์หลากหลายรุ่นจากแบรนด์ชั้นนำระดับโลกให้คุณเลือก พร้อมรายละเอียดสเปคที่ครบถ้วนเพื่อตอบโจทย์ทุกความต้องการ เว็บไซต์ของเรายังมาพร้อมกับเครื่องมือเปรียบเทียบผลิตภัณฑ์ รีวิวจากผู้เชี่ยวชาญ และข้อเสนอสุดพิเศษเพื่อให้การเลือกซื้อของคุณง่ายดายและคุ้มค่าที่สุด มาร่วมเป็นส่วนหนึ่งกับเราแล้วสัมผัสประสบการณ์การช็อปปิ้งที่สะดวก รวดเร็ว และน่าเชื่อถือ
            </p>
            <div className="about-btn">
              <div className="nav-button">
                <a href={cv_nabthong} target="_blank">
                  <button className="btn">
                    Download CV <i className="uil uil-import"></i>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/**Skills */}
        <div className="col">
          <div className="skills-box">
            <div className="skills-header">
              <h3>จุดเด่น</h3>
            </div>
            <div className="skills-list">
              <span> เว็บไซต์เปิดให้บริการมานานกว่า 5 ปี จึงเป็นแหล่งที่น่าเชื่อถือในด้านการซื้อขายคอมพิวเตอร์และอุปกรณ์ไอที</span>
              <span>มีลูกค้าจำนวนมากที่เข้ามาใช้บริการต่อเนื่อง เพิ่มความมั่นใจในคุณภาพสินค้าและบริการ</span>
              <span>จำหน่ายสินค้าจากแบรนด์ชั้นนำระดับโลกเพื่อตอบสนองความต้องการที่หลากหลาย</span>
              <span>มีการให้ข้อมูลผลิตภัณฑ์ที่ครบถ้วน รวมถึงบริการหลังการขาย</span>
              <span>มอบโปรโมชั่นและส่วนลดให้ลูกค้าอย่างสม่ำเสมอ</span>
            </div>
            </div>
            </div>
          
         
      </div>
    </section>
  );
};

export default AboutBox;

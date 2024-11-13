import React from "react";
import com1 from "../assets/images/com.jpg";
import com2 from "../assets/images/comt.webp";
import com3 from "../assets/images/comth.jpg";
import com4 from "../assets/images/comf.jpg";
import com5 from "../assets/images/comfi.jpg";
import com6 from "../assets/images/coms.jpg";
import com8 from "../assets/images/comei.jpg";
import com9 from "../assets/images/comni.jpg";
import com10 from "../assets/images/comte.webp";

const ProjectsBox = () => {
  return (
    <section className="section" id="projects">
      <div className="top-header">
        <h1>Products</h1>
      </div>
      <div className="project-container">
        <div className="project-box">
        <div className="image">
          <img src={com1} alt="com1" />
        </div>
          <h3>Apple MacBook Air M3 (2024</h3>
          <label>ราคา 38,000 บาท</label>
          <div className="Buy-BN">
            <button>เพิ่มลงตะกร้า</button>
          </div>
        </div>
        <div className="project-box">
        <div className="image">
          <img src={com2} alt="com2" />
        </div>
          <h3>Dell XPS 17 (2024)</h3>
          <label>ราคา 87,000 บาท</label>
          <div className="Buy-BN">
            <button>เพิ่มลงตะกร้า</button>
          </div>
        </div>
        <div className="project-box">
        <div className="image">
          <img src={com3} alt="com3" />
        </div>
          <h3>Lenovo Yoga Book 9i</h3>
          <label>ราคา 73,000 บาท</label>
          <div className="Buy-BN">
            <button>เพิ่มลงตะกร้า</button>
          </div>
        </div>
        <div className="project-box">
        <div className="image">
          <img src={com4} alt="com4" />
        </div>
          <h3>Asus ROG Zephyrus G14</h3>
          <label>ราคา 62,500 บาท</label>
          <div className="Buy-BN">
            <button>เพิ่มลงตะกร้า</button>
          </div>
        </div>
        <div className="project-box">
        <div className="image">
          <img src={com5} alt="com5" />
        </div>
          <h3>ERazer Blade 14</h3>
          <label>ราคา 76,500 บาท</label>
          <div className="Buy-BN">
            <button>เพิ่มลงตะกร้า</button>
          </div>
        </div>
        <div className="project-box">
        <div className="image">
          <img src={com6} alt="com6" />
        </div>
          <h3>Microsoft Surface Laptop 7</h3>
          <label>ราคา 62,500 บาท</label>
          <div className="Buy-BN">
            <button>เพิ่มลงตะกร้า</button>
          </div>
        </div>

        <div className="project-box">
        <div className="image">
          <img src={com8} alt="com8" />
        </div>
          <h3>MSI Katana 15</h3>
          <label>ราคา 43,500 บาท</label>
          <div className="Buy-BN">
            <button>เพิ่มลงตะกร้า</button>
          </div>
          </div>

          <div className="project-box">
          <div className="image">
          <img src={com9} alt="com9" />
        </div>
          <h3>HP Spectre x360 14</h3>
          <label>ราคา  55,700  บาท</label>
          <div className="Buy-BN">
            <button>เพิ่มลงตะกร้า</button>
          </div>
          </div>

          <div className="project-box">
          <div className="image">
          <img src={com10} alt="com10" />
        </div>
          <h3>Samsung Galaxy Book3 Ultra</h3>
          <label>ราคา 80,000 บาท</label>
          <div className="Buy-BN">
            <button>เพิ่มลงตะกร้า</button>
          </div>
          </div>
      </div>
    </section>
  );
};
export default ProjectsBox;

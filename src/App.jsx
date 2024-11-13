import "./App.css";
import Header from "./component/Header";
import Projects from "./component/Projects";
import AboutBox from "./component/AboutBox";
import FeatureBox from "./component/FeatureBox";
import ContactBox from "./component/ContactBox";
import Footer from "./component/Footer";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    /** ScrollReveal */
    const sections = document.querySelectorAll("section[id]");

    function scrollActive() {
      const scrollY = window.scrollY;
      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
          sectionId = current.getAttribute("id");
        //console.log(sectionHeight, sectionTop, sectionId);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document
            .querySelector(".nav-menu a[href*=" + sectionId + "]")
            .classList.add("active-link");
          //console.log("inside" + sectionId);
        } else {
          document
            .querySelector(".nav-menu a[href*=" + sectionId + "]")
            .classList.remove("active-link");
        }
      });
    }
    window.addEventListener("scroll", scrollActive);

    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    //feature Box
    sr.reveal(".featured-text-card", {});
    sr.reveal(".featured-name", { delay: 100 });
    sr.reveal(".featured-text-info", { delay: 200 });
    sr.reveal(".featured-text-btn", { delay: 200 });
    sr.reveal(".social_icons", { delay: 200 });
    sr.reveal(".featured-image", { delay: 200 });

    //ProjectBox
    sr.reveal(".project-box", { interval: 200 });

    //Heading
    sr.reveal(".top-header", {});

    //Left-right Animation
    const srLeft = ScrollReveal({
      origin: "left",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    srLeft.reveal(".about-info", { delay: 200 });
    srLeft.reveal(".contact-info", { delay: 200 });

    const srRight = ScrollReveal({
      origin: "rightbjh",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    srRight.reveal(".skills-box", { delay: 100 });
    srLeft.reveal(".form-control", { delay: 100 });

    window.addEventListener("scroll", scrollActive);
    /**Type Effect */
  
  }, []);
  return (
    <>
      <div className="App">
        <Header />
        <main className="wrapper">
          <FeatureBox />
          <AboutBox />
          <Projects />
          <ContactBox />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;

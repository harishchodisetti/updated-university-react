import { useState } from "react";
import "./About.css";
import videoThumb from "../../assets/play-icon.png";
import videoimage from "../../assets/about.png"
import aboutVideo from "../../assets/video.mp4";

function About() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>

     <h5 className="about-subtitle">ABOUT UNIVERSITY</h5>
      {/* ABOUT SECTION */}
      <section className="about">
        <div className="about-left">
          <div className="video-thumb" onClick={() => setShowVideo(true)}>
            {/* <img src={videoThumb} alt="About video" /> */}
             <img src={videoimage} alt="About video" />
            
            <div className="play-btn">▶</div>
          </div>
        </div>

        <div className="about-right">
         
          <h2 className="about-title">
            Nurturing Tomorrow's <br /> Leaders Today
          </h2>

          <p>
            Embark on a transformative educational journey with our university's
            comprehensive education programs. Our cutting-edge curriculum is
            designed to empower students with the knowledge, skills, and
            experiences needed to excel in the dynamic field of education.
          </p>

          <p>
            With a focus on innovation, hands-on learning, and personalized
            mentorship, our programs prepare aspiring educators to make a
            meaningful impact in classrooms, schools, and communities.
          </p>

          <p>
            Whether you aspire to become a teacher, administrator, counselor, or
            educational leader, our diverse range of programs offers the perfect
            pathway to achieve your goals and unlock your full potential.
          </p>
        </div>
      </section>

      {/* VIDEO MODAL */}
      {showVideo && (
        <div className="video-modal">
          <span className="close-btn" onClick={() => setShowVideo(false)}>
            ✕
          </span>

          <video src={aboutVideo} controls autoPlay />
        </div>
      )}
    </>
  );
}

export default About;

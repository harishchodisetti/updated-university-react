import "./programs.css";
import img1 from "../../assets/program-1.png";
import img2 from "../../assets/program-2.png";
import img3 from "../../assets/program-3.png";
import img4 from "../../assets/program-icon-1.png";
import img5 from "../../assets/program-icon-2.png";
import img6 from "../../assets/program-icon-3.png";


function Programs() {
  return (
    <section className="programs">
      <div className="program-card">
        <img src={img1} alt="Graduation Degree" />
        <div className="overlay">
          <span className="icon"><img src={img4}/></span>
          <p>Graduation Degree</p>
        </div>
      </div>

      <div className="program-card">
        <img src={img2} alt="Masters Degree" />
        <div className="overlay">
          <span className="icon"><img src={img5}/></span>
          <p>Masters Degree</p>
        </div>
      </div>

      <div className="program-card">
        <img src={img3} alt="Post Graduation" />
        <div className="overlay">
          <span className="icon"><img src={img6}/></span>
          <p>Post Graduation</p>
        </div>
      </div>
    </section>
  );
}

export default Programs;

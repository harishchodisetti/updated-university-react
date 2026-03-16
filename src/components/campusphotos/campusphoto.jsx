import "./campusphoto.css";
import g1 from "../../assets/gallery-1.png";
import g2 from "../../assets/gallery-2.png"
import g3 from "../../assets/gallery-3.png";
import g4 from "../../assets/gallery-4.png";

function Campusphoto() {
  return (
    <section className="campusphoto">
      <div className="campusphoto-images">
        <img src={g1} alt="Campus 1" />
        <img src={g2} alt="Campus 2" />
        <img src={g3} alt="Campus 3" />
        <img src={g4} alt="Campus 4" />
      </div>

      <button className="campusphoto-btn">
        See more here <span>→</span>
      </button>
    </section>
  );
}

export default Campusphoto;

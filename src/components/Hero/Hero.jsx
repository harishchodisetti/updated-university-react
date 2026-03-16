import "./Hero.css";
import heroImage from "../../assets/hero.png";

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-content">
        <h1>
          We Ensure better education <br /> for a better world
        </h1>

        <p>
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills, and experiences needed to excel in the dynamic
          field of education.
        </p>

        <button className="hero-btn">Explore more →</button>
      </div>
    </section>
  );
}

export default Hero;

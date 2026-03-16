import { useState } from "react";
import "./testimonials.css";

import user1 from "../../assets/user-1.png";
import user2 from "../../assets/user-2.png";
import user3 from "../../assets/user-3.png";
import user4 from "../../assets/user-4.png";

import leftArrow from "../../assets/back-icon.png";
import rightArrow from "../../assets/next-icon.png";

const testimonials = [
  {
    name: "Emily Williams",
    country: "Edusity, USA",
    image: user1,
    text:
      "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community and facilities exceeded my expectations."
  },
  {
    name: "William Jackson",
    country: "Edusity, USA",
    image: user2,
    text:
      "The commitment to academic excellence and hands-on learning helped me grow both personally and professionally."
  },
  {
    name: "Sophia Brown",
    country: "Edusity, USA",
    image: user3,
    text:
      "Amazing faculty, great campus life, and endless opportunities. I would recommend Edusity to anyone."
  },
  {
    name: "James Miller",
    country: "Edusity, USA",
    image: user4,
    text:
      "Edusity provided me with the confidence and skills needed to succeed in my career."
  }
];

function Testimonial() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex(index === 0 ? testimonials.length - 2 : index - 2);
  };

  const nextSlide = () => {
    setIndex(index >= testimonials.length - 2 ? 0 : index + 2);
  };

  return (
    <section className="testimonial">
      <div className="testimonial-wrapper">
        <img
          src={leftArrow}
          className="arrow"
          alt="Previous"
          onClick={prevSlide}
        />

        <div className="testimonial-cards">
          {testimonials.slice(index, index + 2).map((item, i) => (
            <div className="testimonial-card" key={i}>
              <div className="profile">
                <img src={item.image} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <span>{item.country}</span>
                </div>
              </div>

              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <img
          src={rightArrow}
          className="arrow"
          alt="Next"
          onClick={nextSlide}
        />
      </div>
    </section>
  );
}

export default Testimonial;

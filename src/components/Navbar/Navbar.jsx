
import { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // function to close menu
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      
      <div className="logo">
        <img src={logo} alt="University Logo" />
      </div>

      {/* Navigation */}
      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>

        <Link to="/" onClick={closeMenu}>Home</Link>

        <a href="#program" onClick={closeMenu}>Program</a>
        <a href="#about" onClick={closeMenu}>About us</a>
        <a href="#campus" onClick={closeMenu}>Campus</a>
        <a href="#testimonials" onClick={closeMenu}>Testimonials</a>

        <Link to="/signup" onClick={closeMenu}>Signup</Link>
        <Link to="/login" onClick={closeMenu}>Login</Link>

      </nav>

      <a href="#contact" className="contact-btn desktop-only">
  Contact us
      </a>

      {/* Hamburger */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

    </header>
  );
}

export default Navbar;









// import { useEffect, useState } from "react";
// import "./Navbar.css";
// import logo from "../../assets/logo.png";
// import { Link } from "react-router-dom";

// function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
//       <div className="logo">
//         <img src={logo} alt="University Logo" />
//       </div>

//       {/* Navigation */}
//       <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
//         <Link to="/">Home</Link>
      
//  <a href="#program">Program</a>
// <a href="#about">About us</a>
// <a href="#campus">Campus</a>
// <a href="#testimonials">Testimonials</a>

       
 
// <Link to="/signup">Signup</Link>
// <Link to="/login">Login</Link>





//       </nav>

//       <button className="contact-btn desktop-only">Contact us</button>

//       {/* Hamburger */}
//       <div
//         className={`hamburger ${menuOpen ? "active" : ""}`}
//         onClick={() => setMenuOpen(!menuOpen)}
//       >
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>
//     </header>
//   );
// }

// export default Navbar;

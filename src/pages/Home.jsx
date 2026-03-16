import React from 'react'
// import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Program from '../components/program/program'
import Programs from '../components/programs/programs'
import About from '../components/about/About'
import Campus from '../components/campus/campus'
import Campusphoto from '../components/campusphotos/campusphoto'
import Contact from '../components/contact/contact'
import Testimonial from '../components/testimonials/testimonials'
import Title from '../components/hcontact/hcontact'

const Home = () => {
  return (





       <>


         
 


      <section id="hero">
        <Hero/>
      </section>

      <section id="program">
        <Program/>
      </section>

      <section id="programs">
        <Programs/>
      </section>

      <section id="about">
        <About/>
      </section>

      <section id="campus">
        <Campus/>
      </section>

      <section id="campusphoto">
        <Campusphoto/>
      </section>

      <section id="testimonials">
        <Title subtitle="Testimonials" title="What students say"/>
        <Testimonial/>
      </section>

      <section id="contact">
        <Title subtitle="Contact Us" title="Get in Touch"/>
        <Contact/>
      </section>
    
      
      



    </>
  )
}

export default Home
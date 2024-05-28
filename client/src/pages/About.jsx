import React from 'react'
import Analitics from '../components/Analitics'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <>
      <main>
    <section className="section-hero">
        
        <div className="container grid grid-two-column">
          <div className="hero-content">
            
            <h1>Why Choose ME?</h1>
            <p>
           
            I excel as a MERN developer due to my comprehensive mastery of MongoDB, Express.js, React.js, and Node.js, enabling me to craft robust, scalable, and dynamic web applications. My ability to seamlessly integrate front-end and back-end development ensures efficient workflows and cohesive project outcomes. I am adept at creating intuitive user interfaces with React.js, developing secure server-side applications with Express.js and Node.js, and managing complex data structures with MongoDB. This full-stack proficiency not only accelerates development cycles but also ensures that the applications I build are both high-quality and maintainable, making me a vital contributor to any development team.
            </p>

                <div className="btn btn-group">
                <NavLink to="/contact">
                  <button className="btn">connect now</button>
                 </NavLink>
                  <NavLink to="/services">
                  <button className="btn secondary-btn">Learn more</button>
                  </NavLink>
                </div>
                  
          </div>
          <div className="hero-image">
                
                    <img src="/images/about.png" alt="hero image" width="400" height="500" />
                
            </div>
        </div>
    
  </section>

  <Analitics />
  </main> 
    </>
  )
}

export default About

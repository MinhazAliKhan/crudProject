import React from 'react'
import "../components/home.css"
import { NavLink } from 'react-router-dom'
import Analitics from '../components/Analitics'
const Home = () => {
  return (
    <>
    <main>
    <section className="section-hero">
        
        <div className="container grid grid-two-column">
          <div className="hero-content">
            <p>Wlcome to Khan's WebSite</p>
            <h1>Minhaz Ali Khan</h1>
            <p>As a seasoned MERN developer, I specialize in crafting seamless and dynamic web applications that bring ideas to life. Leveraging the power of MongoDB, Express.js, React.js, and Node.js, I build robust and scalable solutions tailored to meet diverse business needs. My expertise lies in creating intuitive user interfaces with React, ensuring a smooth and engaging user experience. On the server side, I develop efficient and secure APIs with Node.js and Express, enabling powerful backend functionality that drives performance. With a strong foundation in database management using MongoDB, 
              I ensure data integrity and optimization for all my projects.
            </p>
            <p>Passionate about staying at the forefront of web development trends, I continuously refine my skills to deliver innovative solutions. Whether it's developing responsive front-end designs, architecting backend services, or deploying applications on cloud platforms, I bring a holistic approach to full-stack development. My commitment to excellence, coupled with a collaborative spirit, ensures that every project I undertake not only meets but exceeds client expectations. Let's build something extraordinary together.

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
                
                    <img src="/images/home.png" alt="hero image" width="400" height="500" />
                
            </div>
        </div>
    
  </section>
  <Analitics />
  <section className="section-hero">
        
        <div className="container grid grid-two-column">
        <div className="hero-image">
                
                <img src="/images/ecom.png" alt="hero image" width="400" height="500" />
            
        </div>
          <div className="hero-content">
            <p>I am here to help you</p>
            <h1>Get Started Today </h1>
            <p>
              Contact me today for a free consultation and let's discuss
              how I can help your business thrivs in the degital Age.
            </p>

                <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">connect now</button>
                  </a>
                  <a href="/services">
                  <button className="btn secondary-btn">Learn more</button>
                  </a>
                </div>
                  
          </div>
          
        </div>
    
  </section>
    </main>
      
    </>
  )
}

export default Home

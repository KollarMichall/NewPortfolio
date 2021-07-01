import React from 'react'
import banner from './img/banner.jpg'
import image from './img/image.jpg'
import $ from 'jquery'
import { Link } from 'react-router-dom'
import Footer from './Footer'

 
const Home = () => {
    const toggle = () => {
        $(".toggle").toggleClass('active')
        $(".navigation").toggleClass('active')
        $(".section").toggleClass('active')
    }
    return (
    <div className="home">
        <div className="navigation">
            <div className="nav-link">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
                <div className="banner">
                    <img src={banner} alt="banner" className="cover" />
                </div>
        </div>

    <section className="section">
        <header>
            <div className="toggle" on onClick={toggle}></div>
                <Link to="#" className="btn">Hire Me</Link>   
        </header>
        <div className="container">
            <div className="img">
                <img src={image} alt="image"/>
            </div>
            <div className="content">
                <h2>Hi, I am <br></br><span>Kolli M</span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac velit et leo pharetra hendrerit. Integer in libero nec nisl facilisis porta eget eget ex. Nunc odio tortor, molestie eu leo sed, sagittis vehicula eros. Nam in tempus arcu, sit amet molestie nibh. Nam eu hendrerit dui, at malesuada arcu. Suspendisse dui nisi, feugiat sit amet nulla id, tempus varius risus. </p>
                <Link to="#" className="btn">Download My CV</Link>
            </div>
        </div>
            
           <Footer/>
    </section>

    </div>
    )
}

export default Home

import React from 'react'
import Footer from './Footer'
import Header from './Header'
import img1 from './img/img_card/img1.jpg'
import img2 from './img/img_card/img2.jpg'
import img3 from './img/img_card/img3.jpg'
import img4 from './img/img_card/img4.jpg'

const Portfolio = () => {
    return (
        <div className="portfolio">
          <Header/>
            
        
        <h2 className="pb-2 border-bottom">My Works</h2>
        <div className="container">
    
        <div className="card">
            <div className="imgBx">
                <img src={img1} alt="img1"/>
            </div>
            <div className="content">
                <div className="details">
                    <h2>Kolli M<br></br><span>Project</span></h2>
                    <div className="btn">
                        <a href="">Learn more</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="imgBx">
                <img src={img2} alt="img1"/>
            </div>
            <div className="content">
                <div className="details">
                    <h2>Kolli M<br /><span>Project</span></h2>
                    <div className="btn">
                        <a href="">Learn more</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="imgBx">
                <img src={img3} alt="img1"/>
            </div>
            <div className="content">
                <div className="details">
                    <h2>Kolli M<br /><span>Project</span></h2>
                    <div className="btn">
                        <a href="">Learn more</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="imgBx">
                <img src={img4} alt="img1"/>
            </div>
            <div className="content">
                <div className="details">
                    <h2>Kolli M<br /><span>Project</span></h2>
                    <div className="btn">
                        <a href="">Learn more</a>
                    </div>
                </div>
            </div>
        </div>
      
    </div>

        
        
<Footer/>        
        </div>
    )
}

export default Portfolio

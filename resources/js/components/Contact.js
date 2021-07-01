import React from 'react'
import { useLocation } from 'react-router'
import Footer from './Footer'
import Header from './Header'


const Contact = () => {
   const url = useLocation()
    return (
        <div className="contact">
    <Header props={url}/>
    
    
    <div className="container justify-content-center ">
        <form role="form" className="clearfix ">
            <h5 className="mt-5 mb-5">Have any questions ? Feel free to get in touch with me! I&rsquo;ll do my best to get back to you ASAP.</h5>

            <div className="row">
                <div className="col-sm-6">
                    <div className="form-group">
                        <label className="sr-only" htmlFor="contact-name">Name</label>
                        <input type="text" className="form-control input-lg" id="contact-name" placeholder="Your name"/>
                    </div>
                </div>
                
                <div className="col-sm-6">
                    <div className="form-group">
                        <label className="sr-only" htmlFor="contact-email">Email</label>
                        <input type="text" className="form-control input-lg" id="contact-email" placeholder="Your email"/>
                    </div>
                </div>
                <div className="mt-3 mb-3 col-sm-12">
                    <label className="sr-only" htmlFor="contact-message">Message</label>
                    <textarea className="form-control" id="contact-words" placeholder="Your message" rows="3"></textarea>
                  </div>
            </div>
                <input type="submit" className="btn btn-success btn-lg pull-right" value="Submit"/>

        </form>
            
<Footer/>
    </div>
        </div>
    )
}

export default Contact

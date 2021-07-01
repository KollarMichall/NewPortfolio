import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="footer">
                <ul className="sci">
                    <li><Link to="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook}/></Link></li>
                    <li><Link to="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter}/></Link></li>
                    <li><Link to="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram}/></Link></li>
                </ul>
                <p className="copyrightText">© 2021 Kolli M</p>
            
        </div>
    )
}

export default Footer

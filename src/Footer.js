import React from 'react'
import "./Footer.css"
import AddIcCallIcon from '@material-ui/icons/AddIcCall';

function Footer() {
    return (
            <div>
  <footer className="footer-distributed">
    <div className="footer-left">
      <h3>Web<span>Fluencer</span></h3>
      <p className="footer-links">
        <a href="#">Home</a>
        
        <a href="#">Blog</a>
        
        <a href="#">Pricing</a>
        
        <a href="#">About</a>
        
        <a href="#">Faq</a>
        
        <a href="#">Contact</a>
      </p>
      <p className="footer-company-name">WebFluencer © 2020</p>
    </div>
    <div className="footer-center">
      <div>
        <p><span>Miami</span> FL, USA</p>
      </div>
      <div>
      {/* <AddIcCallIcon style={{color: "gray"}}/> */}
        <p>+571 555 555 555</p>
      </div>
      <div>
      
        <p><a href="mailto:support@company.com">contact@email.com</a></p>
      </div>
    </div>
    <div className="footer-right">
      <p className="footer-company-about">
        <span>About the company</span>
        WebFluencer is the team of developers who deliver high web services for your small business.
      </p>
 
    </div>
  </footer>
</div>

    
    )
}

export default Footer

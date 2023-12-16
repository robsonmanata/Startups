import smalllogo from "../Svgimages/Group 15.svg"
import linkedin from "../Svgimages/Linkedin.svg"
import Instagram from "../Svgimages/instagram.svg"
import twitter from "../Svgimages/twitter.svg"
function Footer(){
    return (
        <div>
            <img src={smalllogo} alt="logo"></img>
            <p>© 2020 Startupz.<br/>All rights reserved. </p>
            <h3>Companies</h3>
            <h3>Tolq</h3>
            <h3>Legalsite</h3>
            <h3>Codekeeper</h3>
            <h3>Feedback Labs</h3>
            <h3>Contact</h3>
            <p>World Trade Center - The Hague Prinses Margrietplantsoen 33 2595 AM The Hague The Netherlands</p>
            <h3>Send us an email</h3> 
            <h3>Follow us</h3>  
            <img src={linkedin} alt="linkedin"></img>
            <img src={Instagram} alt="Instgram"></img>
            <img src={twitter} alt="twitter"></img>
        </div>
    )
}

export default Footer
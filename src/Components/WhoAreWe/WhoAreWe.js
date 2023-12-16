import  "./WhoAreWe.css"
import questionMark from "../Svgimages/Untitled_Artwork -1.svg"
import underline from "../Svgimages/Vector 4.svg"

function WhoAreWe(){
    return(
        <div  className="whoAreWe">
    <img src={questionMark}alt="We create"></img>  
<h1>Who are we</h1>
<p>We create products that have innovation and technology at their core. 
We value working with talented people that understand the possibilities of today</p>
<h3>01</h3>
<h3>We develop innovative 
products, systems and 
services</h3>
<img src={underline}alt="We create"></img> 
<h3>02</h3>
<h3>Next we build teams to scale them into companies</h3>
<img src={underline}alt="We create"></img> 
<h3>03</h3>
<h3>Each startup solving one problem 
at a time</h3>
<img src={underline}alt="We create"></img> 
</div>
    )
}


export default WhoAreWe;
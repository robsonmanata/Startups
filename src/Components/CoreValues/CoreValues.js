import "./CoreValues.css"
import ligthbulb from "../Svgimages/Untitled_Artwork 2.svg"
import underline from "../Svgimages/Vector 4.svg"

function CoreValues(){
    return(
        <div  className="coreValues">
    <img src={ligthbulb}alt="light bulb"></img>  
<h1>Our core values</h1> 
<h3>01. Innovation</h3>
<img src={underline}alt="underline"></img>  
<p>Startupz operates where entrepreneurship 
and technology intersect. We design solutions and turn them into businesses models.</p>
<h3>02. People</h3>
<img src={underline}alt="underline"></img>  
<p>Talent is what enable us to create great companies.</p>
</div>
    )
}


export default CoreValues;
import "./Hiring.css"
import Untitled6 from "../Svgimages/Untitled_Artwork 6.png"
import Untitled5 from "../Svgimages/Untitled_Artwork 5.png"

function Hiring(){
    return(
        <div  className="hiring">
    <img src={Untitled6}alt="We create"></img>  
<h1>We are hiring!</h1>
<p>We're always looking for talented people to join and help build our startups.
Check out our current openings</p>
<button>See current openings </button>
<img src={Untitled5}alt="We create"></img>  
</div>
    )
}


export default Hiring;
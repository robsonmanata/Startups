import "./Wecreate.scss"
import Createimg from "../Svgimages/Untitled_Artwork 7 1.png"

function WeCreate(){
    return(
        <div  className="Wecreate">
    <img src={Createimg}alt="We create"></img>  
<h1>We Create Startups.</h1>
<p>We are startup studio that develops and launches new companies.</p>
<button>See our works</button>
</div>
    )
}


export default WeCreate;
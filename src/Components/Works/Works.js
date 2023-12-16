import "./Works.css"
import Maclaptop from "../Svgimages/clay-macbook-pro-15-with-touch-bar-front-view-mockup 1.png"
import LegalSuite from "../Svgimages/clay-macbook-pro-15-with-touch-bar-front-view-mockup 3.png"
import Codekeeper from "../Svgimages/Free Clay iPad Pro PSD Mockup copy 1 (1).png"
import FeedbackLabs from "../Svgimages/Free Clay iPad Pro PSD Mockup copy 2 (2).png"

function Works(){
    return(
        <div  className="Works">
   <h1>Our works</h1>

   <div className="Tolq">
    <h3>Tolq</h3>
    <p>Tolq is the translation solution built for e-commerce.
It provides all pieces of the localization puzzle in one single integrated solution.</p>
<img src={Maclaptop} alt="Maclaptop"></img>
<button>More</button>
   </div>

   <div className="Tolq">
    <h3>Feedback Labs</h3>
    <p>Feedback Labs turns feedback into actionable insights for your team.</p>
<img src={FeedbackLabs} alt="ipad pro"></img>
<button>More</button>
   </div>

   <div className="Tolq">
    <h3>Codekeeper</h3>
    <p>Codekeeper is an all-in-one solution for software developers and publishers to provide source code escrow as part of service level and license agreements.</p>
<img src={Codekeeper} alt="ipadpros"></img>
<button>More</button>
   </div>

   

   <div className="Tolq">
    <h3>LegalSite</h3>
    <p>Protected against legal risks, privacy compliant and always up-to-date with the latest regulatory developments.</p>
<img src={LegalSuite} alt="Maclaptop"></img>
<button>More</button>
   </div>

</div>
    )
}


export default Works;
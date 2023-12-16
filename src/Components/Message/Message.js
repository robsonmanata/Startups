import "./Message.scss"
import Rocket from "../Svgimages/Subtract.png"


function Message(){
    return(
        <div  className="message"> 
<h1>Are you ready 
to board this rocket ship?</h1>
<p>Share your excitement with us.</p>
<div>
    <form>
        <input type="text" placeholder="Name"/><br/>
        <input type="text" placeholder="Email"/><br/>
        <textarea placeholder="Message"/><br/>
        <button>Shoot us a message</button>
    </form>
    <img src={Rocket} alt="rocket"></img>
    </div>
    
</div> 

    )
}


export default Message;
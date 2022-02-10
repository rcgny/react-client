import birdPic from "../../assets/images/sociable-weaver.png" ;       
import './HomePage.css'

const HomePage = () => {
  return (
   <div>    
     <div className="centered">
      <div>
       <div  >
         <img className="homeImage"                   
                   src= {birdPic}
                   alt={"home-bird-logo"} />
       </div>  
       <h2>
       <div>Developed by:</div>
       <div>
         <h3 className="text-green-500">Ron Green</h3>
       </div>      
       <div >
         <a href="http://Github.com">Ron's Github</a>
       </div>
       </h2>
     </div>
   </div>
 </div>
  );
}

export default HomePage;
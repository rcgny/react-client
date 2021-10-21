 
import birdPic from "../../assets/images/sociable-weaver.png" ;       
import './HomePage.css'

const HomePage = () => {
  return (
   <div className="card">
   <div className="card-Header">
      <h1>
          Welcome
     </h1>
   </div>
   <div className="centered">
     <div className="container-fluid">
       <div  >
         <img className="homeImage"                   
                   src=  {birdPic}
                   alt={"scene1-logo"} />
       </div>  
       <h2>
       <div >Developed by:</div>
       <div>
         <h3>Ron Green</h3>
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
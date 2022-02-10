import { Link } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  return (
   <div>
     <div className="flex gap-x-80 align-items-center">      
       <ul>
         <li className="text-lg font-semibold text-blue-600 hover:text-blue-400 hover:underline">           
           <Link to="/Home">Home</Link>           
         </li>
         <li className="text-lg font-semibold text-blue-600 hover:text-blue-400 hover:underline">         
           <Link to="/BirdList">Bird List</Link>          
         </li>
       </ul>
       <div className="flex justify-center items-center">
          <h1 className= "text-xl font-semibold">Welcome to the React Birding App</h1>
       </div>
    </div>
    <hr />
  </div>
  );
};

export default NavBar;

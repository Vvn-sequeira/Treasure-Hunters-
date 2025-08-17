import React from 'react';
import {Link} from "react-router-dom"
import "./First.css"
const First = () => {
  return (
   
      <div className='main'>

      <div className="card">
        <div className="head">Window</div>
        <div className="content">
        This website has been specially designed for the “Treasure Hunters” event — your ultimate destination for clues, challenges, and adventure! this platform is tailored to enhance your experience, guide your journey, and keep the excitement alive throughout the event.
So gear up, dive in, and let the hunt begin! 🧭

          <br />
          <button className="button">
              <Link to={"/First"} className='Link'>
              First Qn 
              </Link>
            </button>
        </div>
      </div>

      </div>
    
  );
}



export default First;

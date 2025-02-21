import {useState} from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/frontend_assets/assets'

function LoginPopup({setShowLogin}) {
    const [currState,setCurrState]=useState("Login")
  return (
    <div className='login-popup'>
        <form action="" className='login-popup-container'>
           <div className="login-popup-title">
             <h2>{currState}</h2>
             <img src={assets.cross_icon} alt="" onClick={()=>setShowLogin(false)} />
           </div>
           <div className="login-popup-input">
            {currState==="Login"?<></>:<input type="text" name="" id="" placeholder='Your Name here' />}
             
             <input type="email" name="" id="" placeholder='Your Email here' />
             <input type="password" name="" id="" placeholder='Your Password here' />

             <button>{currState==="Sign Up"?"Create Account":"Log In"}</button>
           </div>
           
           <div className="login-popup-condition">
            <input type="checkbox" />
             <p>by continuing ,i agree to the terms of use & privacy policy</p>
           </div>
           {currState==="Sign Up"?<p>Already have an Account <span onClick={()=>setCurrState("Login")}>Login here</span></p>: <p>Create a New Account <span onClick={()=>setCurrState("Sign Up")}>Click Here</span></p>}
          
           
        </form>
      
    </div>
  )
}

export default LoginPopup

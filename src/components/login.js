import logo from  './logo.svg';
import {useState} from 'react';


export default function Login(props){

const [Action, setAction] = useState("Sign in")

    return(
        <center>
            <div className="loginPage">
                <img src={logo} alt="logo" />

                <center>
                    <div className="loginCard">
                        <h1>{Action}</h1>
                        {Action==="Forgot Password"?<div></div>:<h4>Unlock a new world!</h4>}

                        <div className="loginPage_content">
                            {Action==="Sign up"?<input type="text" placeholder="Name" className='Username' required/> : <div></div>}
                            <input type="email" placeholder="Email" className="Email" required/>
                            {Action==="Apple ID" ?<div></div>:<input type='password' placeholder="Password" className='Password' required/>}
                            {Action==="Sign in"?<h5 className='forgot'>Forgot Password? <span className="forgotPassword" onClick={()=>setAction("Forgot Password")}> Click Here! </span> </h5>: <div></div>}
                        </div>
                        <div className="loginPage_buttons">
                            <button className={Action==="Sign in"? "signinButton gray ":"signinButton"} onClick={()=>setAction("Sign in")}> Sign in </button>
                            <div className="orContainer">
                                <div className="underline"></div>
                                <h5 className='other-signin'> sign in with </h5>
                                <div className="underline"></div>
                            </div>
                            <button className={Action==="Apple ID"? "otherSigninButton gray ":"otherSigninButton"} onClick={()=>setAction("Apple ID")}> Sign in with Apple </button>


                        </div>
                    
                    </div>
                    <div className="signup_link">
                        <h5>New user? <span className="SignupText" onClick={()=>setAction("Sign up")}> Sign up ! </span> </h5>
                    </div>
                </center>
            </div>
        </center>
    )
};
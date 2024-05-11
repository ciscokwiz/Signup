import logo from  './logo.svg';


export default function Login(props){
    return(
        <center>
            <div className="loginPage">
                <img src={logo} alt="" />

                <center>
                    <div className="loginCard">
                        <h1>Sign up</h1>
                        <h4>Unlock a new world!</h4>

                        <div className="loginPage_content">
                            <input type="text" placeholder="Username or Email" className='Username' required/>
                            <input type="text" placeholder="Password" className='Password' required/>
                            <h5 className='forgot'>Forgot Password?</h5>
                        </div>
                        <div className="loginPage_buttons">
                            <button className='signinButton' onClick={()=>alert("Logged In")}> Sign in </button>
                            <h5 className='other-signin'>sign in with</h5>

                        </div>
                    
                    </div>
                    <div className="signup_link">
                        <h5>New User? <a href='./signup'>Signup</a> </h5>
                    </div>
                </center>
            </div>
        </center>
    )
};
import React from 'react';
import './CSS/LoginSignup.css';
const LoginSignup = () =>{
    return(
        <div className='loginsignup-page'>
            <div className="loginsignup-container">
                <h1>
                    Signup
                </h1>
                <div className="loginsignup-fields">
                    <input type="text " placeholder='enter your name' />
                    <input type="email " placeholder='enter your email' />
                    <input type="password" placeholder='enter password' />
                </div>
                <button>continue</button>
                <p className='loginsignup-login'>Already have an account?<span>Login here</span></p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name="" id=" "/>
                    <p>By continuingI agree the terms of use and privacy policy</p>
     
                </div>
            </div>

        </div>
    )
}
export default LoginSignup
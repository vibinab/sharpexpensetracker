import React, { useState } from 'react'
import "./Login.css"
import { NavLink } from 'react-router-dom'
export const Login = () => {
    const[loginuser, setloginuser]=useState('');
    const[loginpassword,setloginpassword]=useState('');

    const loginemailhandler=(event)=> {
        setloginuser(event.target.value)
    }

    const loginpasswordhandler=(event)=> {
        setloginpassword(event.target.value)
    }

    const loginsubmithandler=(event)=> {
        event.preventDefault();
        console.log(loginuser,loginpassword)
    }
  return (
    <>
        <div className='loginform'>
            <form onSubmit={loginsubmithandler}>
                <h1 style={{textAlign:"center"}}>Login</h1>
                <div>
                    <input type="email" placeholder="email" onChange={loginemailhandler}></input>
                </div>
                <div>
                    <input type="password" placeholder="password" onChange={loginpasswordhandler}></input>
                </div>
                <div className='logindiv'>
                    <button className='login'>Login</button>
                </div>
                <div style={{textAlign:"center"}}>
                    <p>forgot password</p>
                </div>

            </form>
        </div>
    </>
  )
}

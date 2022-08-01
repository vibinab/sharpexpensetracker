import React, { useState } from 'react'
import "./Signup.css"
import { NavLink } from 'react-router-dom';

export const Signup = () => {

    const [email, setemail]= useState('');
    const [password,setpassword]=useState('');
    const [confirmpassword,setconifrmpassword]=useState('');


    const emailhandler=(event)=> {
        setemail(event.target.value)
    }

    const passwordhandler=(event)=>{
        setpassword(event.target.value)
    }

    const changepasswordhandler=(event)=> {
        setconifrmpassword(event.target.value)
    }

    const submithandler=(event)=> {
        event.preventDefault();
        const useremail= email
        const userpassword=password
        const userconfirmpassword=confirmpassword
        console.log(useremail,userpassword,userconfirmpassword)

        if(userpassword===userconfirmpassword){

            fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBIgjFkM6qpnh2_mVUR1jWlgfuJfjlCpyc1',{
                method:'POST',
                body:JSON.stringify({
                  email:useremail,
                  password:userpassword,
                  returnSecureToken:true
                }),
                headers: {
                  'Content-Type':'application/json'
                 }
            }).then(res=>{
                if(res.ok){
                    console.log("user registered")
                }
                else {
                    res.json().then((data)=>{
                        let errormsg;
                        if(data && data.error && data.error.message){
                        errormsg=data.error.message
                        }
                        alert(errormsg)
                    })
                }
            })
            // .catch(err=>{
            //     alert(err.message)
            // })
        }
        else {
            alert("password don't match")
        }
    }

  return (
    <>
        <div className='signupform'>
            <form onSubmit={submithandler}>
                <h1 style={{textAlign:"center"}}>Signup</h1>
                <div>
                    <input type="email" placeholder='Email' onChange={emailhandler} required></input>
                </div>
                <div>
                    <input type="password" placeholder='Password' onChange={passwordhandler} required></input>
                </div>
                <div>
                    <input type="password" placeholder='Confirm Password' onChange={changepasswordhandler} required></input>
                </div>
                <div className='signupdiv'>
                    <button className='signup'>Signup</button>
                </div>
               
            </form>
            
        </div>
        <div className='signupcontent'>
                <p>Have an account?  <NavLink className='loginlink' to="/login">Login</NavLink> </p>
            </div>
    </>
  )
}

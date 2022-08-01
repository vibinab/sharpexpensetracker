import React, { useContext, useState } from 'react';
import "./Profile.css";
import AuthContext from '../../store/auth-context';


export const Profile = () => {
    const[profilename, setprofilename]=useState('');
    const[url,seturl]=useState('');
    const [error, seterror]=useState(null)

    const authctx=useContext(AuthContext)
    
    const profilenamehandler=(event)=> {
        setprofilename(event.target.value)
    }

    const profileurlhandler=(event)=> {
        seturl(event.target.value)
    }

    const profilehandler=(event)=> {
        event.preventDefault();
        const profilenamedata=profilename
        const urldata=url
        
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBIgjFkM6qpnh2_mVUR1jWlgfuJfjlCpyc', {
            method:'POST',
            body:JSON.stringify({
                idToken:authctx.token,
                displayName:profilenamedata,
                photoUrl:urldata,
                returnSecureToken:true

            }),
            headers: {
                'Content-Type':'application/json'
               }


        })
        .then((res)=> {

            if(res.ok){
                return res.json();

            }
            else {

                return res.json().then((data)=> {
                    let errormsg
                    if(data && data.error && data.error.message){
                        errormsg=data.error.message
                    }
                    seterror(errormsg)
                    throw new Error(errormsg)
                });

            }

        }).then((data)=> {
            console.log(data)
        })
        .catch(err=> {
            console.log(err.message)
        })

    }
    console.log(profilename,url)
  return (
    <>
        <div className='profilehead'>
            <h3 style={{textAlign:"center"}}>Contact details</h3>
            <form className='profileform' onSubmit={profilehandler}>

                <div>
                    <label>full name</label>
                    <input type="text" onChange={profilenamehandler} required></input>
                </div>
                <div>
                    <label>profile photo url</label>
                    <input type="text" onChange={profileurlhandler} required></input>
                </div>
                <p>  <button className='profilebtn'>update</button></p>
                 {
                    error && <p>{error}</p>
                 }
            </form>
        </div>
    </>
  )
}

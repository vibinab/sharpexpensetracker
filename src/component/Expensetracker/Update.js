import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from "axios"

export const Update = () => {

    const params=useParams()
    console.log(params.routeid)
    const key=params.routeid
    const spend=params.spendid
    const desc=params.desc
    const category=params.category 
    console.log(key,spend,desc,category)

    const [editspend, seteditspend]=useState(spend);
    const [editdesc, seteditdesc]=useState(desc);
    const [editcategory, seteditcategory]=useState(category);

    const history=useHistory()
   
    const editspendhandler=(event)=> {
        seteditspend(event.target.value)
    }

    const editdeschandler=(event)=> {
        seteditdesc(event.target.value)
    } 

    const editcategoryhandler=(event)=> {
        seteditcategory(event.target.value)
    }

    
    const [updatess, setupdate]=useState(null);
    

//     useEffect(()=>{
//         axios.get(`https://expensetracker-ed764-default-rtdb.firebaseio.com/exp/${key}.json`)
//         .then((res)=> {
//             console.log(res.data.body)
//             setupdate(res.data.body)
            
//         })
//         .catch((err)=>{
//             console.log(err)
//         })

//     },[])
// console.log("state",updatess)
const submiteditexpensehandler=(event)=> {
    event.preventDefault();
    axios.put(`https://expensetracker-ed764-default-rtdb.firebaseio.com/track/${key}.json`, {
        spend:editspend,
        desc:editdesc,
        category:editcategory
    })
    .then((res)=> {
        console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })

    
    history.replace('/')
}


  return (


    <>
        <div className='expensetrackerupdate'>
            <form onSubmit={submiteditexpensehandler}>
                <div>
                    <label>spend</label>
                    <input type="number" 
                     value={editspend}
                    onChange={editspendhandler}
                    ></input>
                </div>
                <div>
                    <label>desc</label>
                    <input type="text" 
                     value={editdesc}
                    onChange={editdeschandler}
                    ></input>
                </div>
                <div>
                <label>category</label>
                <select name="category" 
                value={editcategory}
                onChange={editcategoryhandler}
                >
                <option></option>
                <option value="food">Food</option>
                 <option value="petrol">Petrol</option>
                 <option value="rent">Rent</option>
                </select>
                </div>
                <div >
                <button type='submit'>ADD</button>
                </div>
             
                
            </form>
        </div>
    </>
  )
}

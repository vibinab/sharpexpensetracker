import React, { useEffect, useState } from 'react'
import "./Expensetracker.css"
import { Expensetrackeritem } from './Expensetrackeritem'
import axios from "axios"

export const Expensetracker = () => {

    // const [data,setdata]=useState([{}])
    const [dataapi,setdataapi]=useState([{}]);

    const [spend,setpend]=useState('');

    const[ desc,setdesc]=useState('');

    const[ category,setcategory]=useState('');

    const [error, seterror]=useState(null);

    const spendhandler=(event)=> {
        setpend(event.target.value)
    }

    const deschandler=(event)=> {
        setdesc(event.target.value)
    }
    const categoryhandler=(event)=> {
        setcategory(event.target.value)
    }

    const expensehandler=(event)=> {
        event.preventDefault();
        const expensedata= {
            spend:spend,
            desc:desc,
            category:category
        }
        console.log(expensedata)
        // setdata( current=>[...current,expensedata])
        // console.log(data)
        axios.post('https://expensetracker-ed764-default-rtdb.firebaseio.com/e.json', {
            body:expensedata,
          
        }).then((res)=>{

            console.log(res)
            // setdataapi(res.data.name)
            // console.log(dataapi)
            // seterror(res.status)
            
        })
        .catch((err)=> {
            console.log(err)
        })

        setpend(" ")
        setdesc(" ")
        setcategory(" ")
    }

    useEffect(()=> {
        axios.get('https://expensetracker-ed764-default-rtdb.firebaseio.com/e.json')
        .then((res)=>{
            console.log("get",res.data)
           let loaddata=[]
            for (const key in res.data){
                console.log("Data",res.data[key].body)
                 loaddata.push(res.data[key].body)
            }
            console.log("show data",loaddata)
           setdataapi(loaddata)
           
           
            
            // const loadedMovies=[];
            // for(const key in  res.data){
            //  loadedMovies.push({
            //    id:key,
            //    spend:res.data[key].spend,
            //    desc:res.data[key].desc,
            //    category:res.data[key].category,
            //  });
            // }
            // console.log(loadedMovies)
        })
        .catch((err)=> {
            console.log(err)
        })

    },[])


  return (
    <>
        <div className='expensetracker'>
            <form onSubmit={expensehandler}>
                <div>
                    <label>spend</label>
                    <input type="number" onChange={spendhandler}></input>
                </div>
                <div>
                    <label>desc</label>
                    <input type="text" onChange={deschandler}></input>
                </div>
                <div>
                <label>category</label>
                <select name="category" onChange={categoryhandler}>
                <option></option>
                <option value="food">Food</option>
                 <option value="petrol">Petrol</option>
                 <option value="rent">Rent</option>
                </select>
                </div>
                <div className='submitbtn'>
                <button type='submit'>ADD</button>
                </div>
                {/* <div>
                    <p>{!error && {error}}</p>
                </div> */}
                
            </form>
        </div>
        <div>
        {/* {
        data.map((d)=> {
            return (
                <Expensetrackeritem 
                    spend={d.spend}
                    desc={d.desc} 
                    category={d.category}
                />
            )
        })
        } */}


         {
        dataapi.map((d)=> {
            return (
                <Expensetrackeritem 
                    spend={d.spend}
                    desc={d.desc} 
                    category={d.category}
                />
            )
        })
        }  





        </div>

    </>
  )
}

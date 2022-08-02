import React, { useState } from 'react'
import "./Expensetracker.css"
import { Expensetrackeritem } from './Expensetrackeritem'

export const Expensetracker = () => {

    const [data,setdata]=useState([{}])

    const [spend,setpend]=useState('');

    const[ desc,setdesc]=useState('');

    const[ category,setcategory]=useState('');

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
        setdata( current=>[...current,expensedata])
        console.log(data)
    }

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
                
            </form>
        </div>
        <div>
        {
        data.map((d)=> {
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

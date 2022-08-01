import React from 'react';
import "./Expense.css";
import { NavLink } from 'react-router-dom';


export const Expense = () => {
  return (
    <>
        <div className='expensehead'>
        <div>
            <p>welcome express tracker</p>
        </div>
        <div>
            <p>Your profile is incomplete <NavLink to="/profile">complete now</NavLink></p>
        </div>

        </div>
    </>
  )
}

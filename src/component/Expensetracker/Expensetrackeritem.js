import React from 'react'
import "./Expensetrackeritem.css"

export const Expensetrackeritem = (props) => {
  return (
    <>
        <div className='expenseitem'>
          <ul className='expenseitem-list'>
            <li>{props.spend}</li>
            <li>{props.desc}</li>
            <li>{props.category}</li>
          </ul>
        </div>
    </>
  )
}

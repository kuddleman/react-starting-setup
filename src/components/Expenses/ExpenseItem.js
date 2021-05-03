import React, { useState } from 'react'

import ExpenseDate from './ExpenseDate'
//import Card from './UI/Card'
import './ExpenseItem.css'

const ExpenseItem = props => {
  // title points to props.title(the original state).  setTitle allows us to change the title.
  const [title, setTitle] = useState(props.title)

  const clickHandler = () => {
    setTitle('Updated!')
    console.log(title)
  }
   
  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </div>
  )
}

export default ExpenseItem

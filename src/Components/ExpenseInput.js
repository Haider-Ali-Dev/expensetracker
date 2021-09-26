import React, {useState} from 'react';

import ExpenseHeader from './ExpenseHeader';
import './Expense.css'


const ExpenseInput = (props) => {
    const [budget, setBudget] = useState(0);
    const [budgetReduce, setBudgetReduce] = useState(0);
    const [budgetIncrease, setBudgetIncrease] = useState(0);
    const expenseBudgetOnReduce = () => {
        if (budgetReduce) {
            const div = document.querySelector(".history")
            const p = document.createElement("p");
            p.className="data-red data"
            setBudget(Number(budget) - Number(budgetReduce))
            p.textContent = "$" + budgetReduce
            div.appendChild(p)
        }
        
    }

    const clearButttonEvent = () => {
        const div = document.querySelector(".history")
        // const li = document.querySelector(".data-red");
        setBudget(0)
        setBudgetIncrease(0)
        setBudgetReduce(0)
        console.log(div.childNodes)
        div.textContent = ''
        const input = document.querySelectorAll('.input')
        input.forEach(value => {
            value.value = null
        })
    }

    const onBudgetChange = (event) => {
        const bud = document.querySelector('.budget')
        setBudget(event.target.value)
        if (budget < 0) {
            bud.style.color = 'red'
        } else if (budget > 0) {
            bud.style.color = 'green'
        } else {
           bud.style.color = 'black'
        }
    }

    const addButtonEvent = () => {
        if (budgetIncrease) {
            setBudget(Number(budget) + Number(budgetIncrease))
            const div = document.querySelector(".history")
            const p = document.createElement("p");
            p.className="data-green data"
            p.textContent = "$" + budgetIncrease
            div.appendChild(p)
        }

        window.setInterval(function() {
            let elem = document.querySelector('.history');
            elem.scrollTop = elem.scrollHeight;
        }, 5000);
    }
    return (
        <div className="">
            <div className="name">
                <ExpenseHeader/>
            </div>
            
            <div className="main">
                <div>
                    <div className="user-inputs rounded"> 
                        {budget ? <p className="budget">{"$" + budget}</p> : 
                        <p className="budget"> {"No Budget"}</p>}
                        <input className='input' type="number" onChange={onBudgetChange} placeholder={"Enter Your Budget"}/>
                        <input className="input" type="number" onChange={(event) => setBudgetIncrease(event.target.value)} placeholder={"Enter amount to increase"}/>
                        <input className="input" type="number" onChange={(event) => setBudgetReduce(event.target.value)} placeholder={"Enter amount to decrease"}/>
                        <div className="user-btns">
                            <button className='btn btn-primary' onClick={addButtonEvent}>Add</button>
                            <button className="btn btn-warning" onClick={expenseBudgetOnReduce}>Decrease</button>
                            <button className="btn btn-dark" onClick={clearButttonEvent}>Clear</button>
                        </div>
                        <div className="logs">
                            <div className="history">

                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExpenseInput;
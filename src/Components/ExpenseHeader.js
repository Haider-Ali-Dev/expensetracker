import React from 'react'

class ExpenseHeader extends React.Component {
    shouldComponentUpdate() {
        return false
    }
    render() {
        return (
            <div>
                <h1>ExpenseTracker</h1>
            </div>
        )
        
    }
}

export default ExpenseHeader;
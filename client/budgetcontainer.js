import React from 'react';
import Budget from './budget'

function BudgetContainer(props){
	console.log(props);
  return (
    <div className = "BudgetContainer">
				{
					props.budgets.map((budget, i) => {
						return (
							<Budget
								key={i}
								text={budget} 
							/>
						);
					})
				} 
    </div>
  )

}

module.exports = BudgetContainer
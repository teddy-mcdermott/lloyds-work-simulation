import React from 'react';
import Tooltip from '../ui/Tooltip';

export default function Task({ id, taskTitle, taskExplanation, formContent, results }) {
  
  const getTypeLabel = (type) => {
    switch(type) {
      case 'fixed': return 'Fixed Rate';
      case 'adjustable': return 'Adjustable Rate';
      case 'interest-only': return 'Interest-Only';
      default: return type;
    }
  };

  return (
    <div id={id} className="TaskBox">
      <h2 className="TaskTitle">{taskTitle}</h2>
      <p className="Explanation">
        {Array.isArray(taskExplanation) ? taskExplanation.map((chunk, i) => {
          if (chunk.type === "text") return <span key={i}>{chunk.value}</span>;
          if (chunk.type === "tooltip") return <Tooltip key={i} text={chunk.description}>{chunk.label}</Tooltip>;
          return null;
        }) : taskExplanation}
      </p>

      {formContent}

      {results && (
        <div className="Results">
           <p className="Explanation" style={{ marginBottom: '20px' }}>
             Below is a breakdown of your estimated repayments. We have calculated your total Loan Amount based on the property price minus your deposit.
           </p>

           <p className="ResultValue">
             <span>Loan Amount:</span>
             <b>£{Number(results.loanAmount).toLocaleString()}</b>
           </p>
          
           <p className="ResultValue">
             <span>Estimated Monthly Payment:</span>
             <b>£{Number(results.monthly).toLocaleString()}</b>
           </p>

           <p className="ResultValue">
             <span>Total Payment Over Term:</span>
             <b>£{Number(results.total).toLocaleString()}</b>
           </p>

           <p className="ResultValue">
             <Tooltip text="Loan-to-Value: The % of the property price you are borrowing.">
               <span>LTV Ratio:</span>
             </Tooltip>
             <b>{results.ltv}%</b>
           </p>

           <p className="ResultValue">
             <span>Mortgage Type:</span>
             <b>{getTypeLabel(results.type)}</b>
           </p>

           <div className="ResultExplanation" style={{marginTop: '20px', fontSize: '0.9rem'}}>
            <p>These results are estimates.</p> 
            <ul>
              {results.type === 'fixed' && (
                <li>With a <b>Fixed Rate</b>, your interest rate and monthly payments stay the same for the agreed period.</li>
              )}
              {results.type === 'adjustable' && (
                <li>With an <b>Adjustable Rate</b>, your interest rate can go up or down, meaning your monthly payments may change over time.</li>
              )}
              {results.type === 'interest-only' && (
                <li>With an <b>Interest-Only</b> mortgage, you only pay the interest each month. The principal remains the same.</li>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
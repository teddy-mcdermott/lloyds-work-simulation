import './App.css';
import { useState } from 'react';

import { headings, tasks } from './data/content';

import { calculateMortgage } from './utils/mortgageCalculations';

import SideBar from './components/features/SideBar';
import MortgageForm from './components/features/MortgageForm';
import Task from './components/layout/Task';

function App() {
  return (
    <div className="Page">
      <SideBar headings={headings}/>   
      <CalculatorWindow/>
    </div>
  );
}

function CalculatorWindow() {
  const [results, setResults] = useState(null);

  const [formData, setFormData] = useState({
    propertyPrice: '',
    deposit: '',
    termYears: '',
    interestRate: '',
    mortgageType: 'fixed'
  });

  const handleCalculate = (e) => {
    e.preventDefault();

    const price = parseFloat(formData.propertyPrice.replace(/,/g, ''));
    const dep = parseFloat(formData.deposit.replace(/,/g, ''));
    const term = parseFloat(formData.termYears.replace(/,/g, ''));
    const rate = parseFloat(formData.interestRate.replace(/,/g, ''));

    try {
      const resultData = calculateMortgage(price, dep, term, rate, formData.mortgageType);
      setResults(resultData);

      setTimeout(() => {
        const resultsElement = document.getElementById('results');
        if (resultsElement) resultsElement.scrollIntoView({ behavior: 'smooth' });
      }, 100);

    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="CalculatorWindow">
      {tasks.map(task => (
        <Task
          key={task.id}
          id={task.link}
          taskTitle={task.title}
          taskExplanation={task.explanation}
          formContent={task.id === 2 ? (
            <MortgageForm
              formData={formData}
              setFormData={setFormData}
              onCalculate={handleCalculate}
            />
          ) : null}
          results={task.id === 3 ? results : null}
        />
      ))}
    </div>
  );
}

export default App;
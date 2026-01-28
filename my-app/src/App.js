import logo from './logo.svg';
import './App.css';
// import { useState } from 'react';

const headings = [
  { title: 'Introduction', id: 1 },
  { title: 'Calculator', id: 2 },
  { title: 'Results', id: 3 },
];

const tasks = [
  {
    id: 1,
    title: 'Introduction',
    explanation:
      "This tool helps you estimate your monthly mortgage payments based on a few key details. It won’t affect your credit score and you don’t need to provide any personal information.",
  },
  {
    id: 2,
    title: "Calculator",
    explanation: [
      { type: "text", value: "Enter the property price, your deposit, and the " },
      {
        type: "tooltip",
        label: "interest rate",
        description: "The percentage charged by the lender each year"
      },
      { type: "text", value: " to calculate an estimated monthly payment." }
    ],
    TaskForm: MortgageForm
  },
  {
    id: 3,
    title: 'Results',
    explanation:
      "Your results will show an estimated monthly payment and a breakdown of how your mortgage could look over time. These figures are indicative and may change depending on the product you choose.",
  },
];


const listItems = headings.map(headings =>
  <li key={headings.id}>
    {headings.title}
  </li>
);


function App() {
  return(<MyPage />);
}

function MyPage(){
  return(
    <div className="Page">
      <SideBar headings={headings}/>
      <Seperator/>
      <CalculatorWindow/>
    </div>
  )
}

function Seperator(){
  return(
    <div className="Seperator">
      <EndPoint/>
      <Bar/>
      <EndPoint/>
    </div>
  );
}


function MortgageForm() {
  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <FormField label="Property Price (£)">
        <input type="number" placeholder="e.g. 250000" />
      </FormField>

      <FormField label="Deposit (£)">
        <input type="number" placeholder="e.g. 50000" />
      </FormField>

      <FormField label="Mortgage Term (years)">
        <input type="number" placeholder="e.g. 25" />
      </FormField>

      <FormField label="Interest Rate (%)">
        <input type="number" step="0.01" placeholder="e.g. 3.5" />
      </FormField>

      <FormField label="Repayment Type">
        <select>
          <option value="repayment">Repayment</option>
          <option value="interest-only">Interest Only</option>
        </select>
      </FormField>

      <SubmitButton>Calculate</SubmitButton>
    </Form>
  );
}



function CalculatorWindow() {
  return (
    <div className="CalculatorWindow">
      {tasks.map(task => (
        <Task
          key={task.id}
          taskTitle={task.title}
          taskExplanation={task.explanation}
          TaskForm={task.TaskForm}
        />
      ))}
    </div>
  );
}




function SideBar({ headings }) {
  const listItems = headings.map(h => <li key={h.id}>{h.title}</li>);
  return (
    <div className="SideBar">
      <LloydsLogo />
      <Title />
      <ol>{listItems}</ol>
    </div>
  );
}

function Task({ taskTitle, taskExplanation, TaskForm }) {
  return (
    <div className="TaskBox">
      <h2 className="TaskTitle">{taskTitle}</h2>
      <p className="Explanation">
        {Array.isArray(taskExplanation) ? taskExplanation.map((chunk, i) => {
              if (chunk.type === "text") {
                return <span key={i}>{chunk.value}</span>;
              }

              if (chunk.type === "tooltip") {
                return (
                  <Tooltip key={i} text={chunk.description}>
                    {chunk.label}
                  </Tooltip>
                );
              }

              return null;
            })
          : taskExplanation}
      </p>


      {TaskForm && <TaskForm />}
    </div>
  );
}



function LloydsLogo(){
  return(
    <img className="Logo" src={logo} alt="LLoyds Banking Logo"></img>
  )
}

function Title(){
  return(
    <p className='Title'><b>Mortgage Calculator</b></p>
  )
}

function FormField({ label, children }) {
  return (
    <>
      <label className="FormLabel">{label}</label>
      <div className="FormControl">
        {children}
      </div>
    </>
  );
}


function SubmitButton({ children }) {
  return (
    <button type="submit" className="SubmitButton">
      {children}
    </button>
  );
}

function Form({ onSubmit, children }) {
  return (
    <form className="Form" onSubmit={onSubmit}>
      {children}
    </form>
  );
}

function Tooltip({ text, children }) {
  return (
    <span className="Tooltip" data-tooltip={text}>
      {children}
    </span>
  );
}



function EndPoint(){
  return(
    <span className="EndPoint"></span>
  )
}

function Bar(){
  return (<div className="Bar"/>);
}






export default App;

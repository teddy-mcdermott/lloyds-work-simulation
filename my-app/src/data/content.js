const headings = [
  { title: 'Introduction', id: 1, link: 'intro' },
  { title: 'Calculator', id: 2, link: 'calculator' },
  { title: 'Results', id: 3, link: 'results' },
];

const tasks = [
  {
    id: 1,
    link: 'intro',
    title: 'Introduction',
    explanation:
      "This tool helps you estimate your monthly mortgage payments. Use the calculator below to input your property details and see a breakdown of your potential costs.",
  },
  {
    id: 2,
    link: 'calculator',
    title: "Calculator",
    explanation: [
      { type: "text", value: "Enter your " },
      { type: "tooltip", label: "Property Price", description: "The total market value of the home" },
      { type: "text", value: " and " },
      { type: "tooltip", label: "Deposit", description: "The cash amount you are paying upfront" },
      { type: "text", value: ". We will calculate your Loan Amount automatically." }
    ],
  },
  {
    id: 3,
    link: 'results',
    title: 'Results',
    explanation: null,
  },
];

export {headings, tasks};
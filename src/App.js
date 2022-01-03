import react from "react";
import Expenses from "./Components/Expenses/Expenses";
import "./App.css";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2022, 7, 14),
    },
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.55,
      date: new Date(2022, 7, 14),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 194.5,
      date: new Date(2022, 7, 14),
    },
    {
      id: "e3",
      title: "Grossory",
      amount: 294.15,
      date: new Date(2022, 7, 14),
    },
    {
      id: "e4",
      title: "Home Maintainance",
      amount: 954.15,
      date: new Date(2022, 7, 14),
    },
  ];

  return (
    <div className="welcome">
      <h2>Welcome to Expense Manager App</h2>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;

import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2022-12-19"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 89.29,
    date: new Date("2022-12-06"),
  },
  {
    id: "e3",
    description: "A t-shirt",
    amount: 19.99,
    date: new Date("2021-12-14"),
  },
  {
    id: "e4",
    description: "A pair of socks",
    amount: 5.49,
    date: new Date("2021-12-20"),
  },
  {
    id: "e5",
    description: "A bunch of bananas",
    amount: 40.99,
    date: new Date("2021-12-25"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id,
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedExpense = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedExpense;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload.id);
    default:
      return state;
  }

  function ExpensesContextProvider({ children }) {
    const [expensesState, dispatch] = useReducer(
      expensesReducer,
      DUMMY_EXPENSES,
    );

    function addExpense(expenseData) {
      dispatch({ type: "ADD", payload: expenseData });
    }

    function deleteExpense(id) {
      dispatch({ type: "DELETE", payload: { id } });
    }

    function updateExpense(id, expenseData) {
      dispatch({ type: "UPDATE", payload: { id, data: expenseData } });
    }

    const value = {
      expenses: expensesState,
      addExpense: addExpense,
      deleteExpense: deleteExpense,
      updateExpense: updateExpense,
    };

    return (
      <ExpensesContext.Provider value={value}>
        {children}
      </ExpensesContext.Provider>
    );
  }
}

export { ExpensesContextProvider };

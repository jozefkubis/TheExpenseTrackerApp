import axios from "axios";

const BACKEND_URL =
  "https://the-expense-tracker-app-a47e9-default-rtdb.europe-west1.firebasedatabase.app";

export function storeExpense(expenseData) {
  return axios.post(`${BACKEND_URL}/expenses.json`, expenseData);
}

export async function fetchExpenses() {
  const response = await axios.get(`${BACKEND_URL}/expenses.json`);

  const expenses = [];

  console.log("Response data:", response.data); // Log the response data for debugging
  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }
  return expenses;
}

import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../constans/styles";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

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

export default function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary periodName={expensesPeriod} expenses={DUMMY_EXPENSES} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});

import expenses from "../data/expenses.js"

export function getCategories() {
  return Object.keys(expenses)
}

export function getExpense(category) {
  return expenses[category]
}

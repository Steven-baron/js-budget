import { getCategories, getExpense } from './services/expenseService.js'
import { renderTabs, onTabClick } from './components/tabs.js'
import { renderExpense } from './components/expenseTable.js'

document.addEventListener('DOMContentLoaded', () => {
  const categories = getCategories()

  renderTabs(categories)
  renderExpense(categories[0], getExpense(categories[0]))

  onTabClick(category => {
    renderExpense(category, getExpense(category))
  })
})

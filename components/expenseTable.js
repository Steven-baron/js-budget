export function renderExpense(category, expense) {
  document.querySelector('.expenses-title').innerHTML = `<h1>${category}</h1>`
  document.querySelector('.expenses-body').innerHTML = expense.items.map(i =>
    `<tr><td>${i.name}</td><td>${i.amount}</td></tr>`
  ).join('')
}

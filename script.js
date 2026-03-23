import Expenses from "./expenses.js"




const expenses = Expenses.expenses

let tabs = Object.keys(expenses)








function insertExpenses() {


  const list = document.querySelector(".expenses-list")

  let html = ""

  tabs.forEach(category => {

    html += `<button class="expense-button" data-category="${category}">${category}</button> `
  })
  list.innerHTML = html
  console.log(list)
}


function buttonGetter() {

  let buttons = document.querySelectorAll('.expense-button')

  buttons.forEach(button => {
    button.addEventListener("click", function(e) {
      const selectedTab = e.target.dataset.category

      showExpensesCategory(selectedTab)
      showExpenses(selectedTab)
    })
  })


}

function showExpensesCategory(tab) {

  let expensesTitle = document.querySelector('.expenses-title')
  let html = `<h1>${tab}</h1>`

  expensesTitle.innerHTML = html

}

function showExpenses(tab) {


  let expnesesTable = document.querySelector('.expenses-body')

  let items = expenses[tab].items



  let html = []

  html = items.map(i => {

    return (
      `<tr>
          <td>${i.name}</td>
          <td>${i.amount}</td>
        </tr>`
    )

  }).join('')






  expnesesTable.innerHTML = html




}



document.addEventListener('DOMContentLoaded', () => {



  insertExpenses()
  buttonGetter()
  showExpensesCategory(tabs[0])
  showExpenses(tabs[0])
})




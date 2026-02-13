import Expenses from "./expenses.js"




const expenses = Expenses.expenses

let tabSelected = Object.keys(expenses)[0]




function showText() {

  document.getElementById('title').innerText = 'Expenses'


}

function insertExpenses() {


  const list = document.querySelector(".expenses-list")

  let html = ""

  Object.keys(expenses).forEach(category => {

    html += `<button class="expense-button" data-category="${category}">${category}</button> `
  })
  list.innerHTML = html
  console.log(list)
}


function buttonGetter() {

  let buttons = document.querySelectorAll('.expense-button')

  buttons.forEach(button => {
    button.addEventListener("click", function(e) {
      tabSelected = `${e.target.dataset.category}`

      showExpensesCategory()
      showExpenses(tabSelected)
    })
  })


}

function showExpensesCategory() {

  let expensesTitle = document.querySelector('.expenses-title')
  let html = `<h1>${tabSelected}</h1>`

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



  showText()
  insertExpenses()
  buttonGetter()
  showExpensesCategory()
  showExpenses(tabSelected)
})

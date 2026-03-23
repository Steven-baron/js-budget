export function renderTabs(categories) {
  const list = document.querySelector('.expenses-list')
  list.innerHTML = categories.map(category =>
    `<button class="expense-button" data-category="${category}">${category}</button>`
  ).join(' ')
}

export function onTabClick(callback) {
  document.querySelector('.expenses-list').addEventListener('click', function(e) {
    if (e.target.matches('.expense-button')) {
      callback(e.target.dataset.category)
    }
  })
}

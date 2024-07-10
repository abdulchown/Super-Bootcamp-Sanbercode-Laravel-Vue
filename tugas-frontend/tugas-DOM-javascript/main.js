var items = [
  [
    '001',
    'Keyboard Logitek',
    60000,
    'Keyboard yang mantap untuk kantoran',
    'logitek.jpg',
  ],
  ['002', 'Keyboard MSI', 300000, 'Keyboard gaming MSI mekanik', 'msi.jpg'],
  [
    '003',
    'Mouse Genius',
    50000,
    'Mouse Genius biar lebih pinter',
    'genius.jpeg',
  ],
  ['004', 'Mouse Jerry', 30000, 'Mouse yang disukai kucing', 'jerry.jpg'],
]

//to create a card element
function createCard(img, title, desc, harga) {
  const card = document.createElement('div')

  card.innerHTML = `
    <div class ="col-4 mt-2"> 
<div class="card" style="width: 18rem;">
    <img src="img/${img}" class="card-img-top" height="200px" width="200px" alt="...">
    <div class="card-body">
        <h5 class="card-title" id="itemName">${title}</h5>
        <p class="card-text" id="itemDesc">${desc}</p>
        <p class="card-text">Rp ${harga}</p>
        <a href="#" class="btn btn-primary" id="addCart">Tambahkan ke keranjang</a>
    </div>
</div>
</div>
  `
  return card
}

//to render cards
function renderCards(dataArray) {
  const listBarang = document.getElementById('listBarang')
  listBarang.innerHTML = '' // Clear existing cards

  for (const data of dataArray) {
      const card = createCard(data[4], data[1], data[3], data[2]);
      listBarang.appendChild(card);
  }
}

// Initial render
renderCards(items)

// Add event listener to search item
const form = document.getElementById('formItem')
const keyword = document.getElementById('keyword')

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const dataInput = keyword.value.toLowerCase()

  // Filter data based on search item
  const filteredItems = items.filter((item) =>
    item[1].toLowerCase().includes(dataInput)
  )

  // Render filtered cards
  renderCards(filteredItems)

})
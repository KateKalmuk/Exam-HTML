const firstChair = document.querySelector('.section__chair__one')

const chairs = [
	{
		title: 'X-Comfort Black-Grey Gaming Chair',
		price: '400 €',
		image: 'img/chair-1.jpg'
	},
	{
		title: 'X-Comfort Black-White-Grey Gaming Chair',
		price: '500 €',
		image: 'img/chair-2.jpg'
	},
	{
		title: 'X-Comfort Black-White Gaming Chair',
		price: '600 €',
		image: 'img/chair-3.jpg'
	}
]

chairs.map(function (chair) {
	firstChair.insertAdjacentHTML('afterend', `<div class="section__chair__one">
 					<div class="mbb">
 						<img class="w-100" src="${chair.image}">
 					</div>
 					<div class="section__chair__title mbb">${chair.title}</div>
 					<div class="section__chair__price mbb">${chair.price}</div>
 					<div class="mbb">
 						<button class="btn btn__first">Купить</button>
 					</div>
 				</div>`)
})

// for (let i = 0; i < chairs.length; i++) {
// 	const chairsList = document.createElement('div')
// 	chairsList.innerHTML = `<div class="section__chair__one">
// 					<div class="mbb">
// 						<img class="w-100" src="${chairs[i].image}">
// 					</div>
// 					<div class="section__chair__title mbb">${chairs[i].title}</div>
// 					<div class="section__chair__price mbb">${chairs[i].price}</div>
// 					<div class="mbb">
// 						<button class="btn btn__first">Купить</button>
// 					</div>
// 				</div>
// 	`
// 	firstChair.insertAdjacentElement('afterend', chairsList)
// }

//DOM DATA
const button = document.querySelector('.btn__class')

//VARIABLES
let currentIndex = 0
let currentLimit = 3

const names = ['Name 1', 'Name 2', 'Name 3', 'Name 4', 'Name 5', 'Name 6', 'Name 7', 'Name 8', 'Name 9', 'Name 10']

button.onclick = function () {
	const [...sectionName] = document.querySelectorAll('.section__name')
	const lastElementNames = sectionName[sectionName.length - 1]
		
	names.slice(currentIndex, currentIndex + currentLimit).reverse().map(function (name) {
		lastElementNames.insertAdjacentHTML('afterend', `<div class="section__name">${name}</div>`)
	})
	currentIndex = currentIndex + currentLimit
}


// names.reverse().map(function (name) {
// 	sectionName.insertAdjacentHTML('afterend', `<div class="section__name">${name}</div>`)
// })

// for (let i = 0; i < 10; i++) {
// 		const namesList = document.createElement('div')
// 		namesList.innerHTML = `<div class="section__name">${names[i]}</div>`
// 		sectionName.insertAdjacentElement('afterend', namesList)
// }

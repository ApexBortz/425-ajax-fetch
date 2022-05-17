// console.log('thats so fetch!')

// // https://cat-fact.herokuapp.com/facts

// // use window.fetch() to retrive data from our url
// fetch('https://cat-fact.herokuapp.com/facts')
// // use funky  dot then syntax -- to handle asyncronicity
// 	.then(responseData => {
// 		// does not run until we have heard back from cat facts
// 		// convert the data payload into readable json
// 		return responseData.json() // return converting the format of the data (its a fetch thing)
// 	}) // takes a cb that runs when cat facts gets back to us
// 	.then(jsonData => {
// 		// do something with our data
// 		console.log(jsonData)
// 	})
// 	// console.log the data


// https://www.reddit.com/search.json?q=kittens

// const url = 'https://www.reddit.com/search.json?q=kittens'

// // step 1 -- fetch data
// fetch(url)
// 	// step 2 -- jsonify data
// 	.then(responseData => responseData.json()) // implicit return arrow function
// 	// step 3 -- do something w the data
// 	.then(console.log) 
// 	// good programmers handle their errors
// 	.catch(err => {
// 		console.warn('🔥🔥🔥🔥🔥🔥', err)
// 	}) // runs a function in the event of an error

// // what is this fetch thing anyway?
// console.log(fetch(url))

// throw new Error('something very bad has happened')

// // handle regular errors with try/catch
// try {
// 	// try this block of code
// 	console.log('ut oh.... and error is coming!')

// 	throw new Error('something very bad has happened')
// } catch (err) {
// 	// run this block of code if there is an error
// 	console.log(err)
// }



document.addEventListener('DOMContentLoaded', () => {
	const peopleList = document.querySelector('#people-list')
	document.querySelector('#form').addEventListener('submit', e => {
		e.preventDefault()
		const numInput = document.querySelector('#num-input')
		// console.log(numInput.value)
		// set the results number in the url
		const peopleUrl = `https://randomuser.me/api/?results=${numInput.value}`
		// console.log(peopleUrl)
		// fetch user data
		fetch(peopleUrl)
			// jsonify user data
			.then(responseData => responseData.json())
			// do something with the json data
			.then(jsonData => {
				// console.log(jsonData) // of the data
				// // interested in the 'results' array
				// console.log(jsonData.results) 
				jsonData.results.forEach(result => {
					// console.log(result.name)
					const fullname = `${result.name.title} ${result.name.first} ${result.name.last}`
					// console.log(fullname)
					// create a DOM element and display to the user the info we got back from the API
					const listElement = document.createElement('li')
					listElement.innerText = fullname
					peopleList.appendChild(listElement)
				})
			})
			.catch(err => {
				console.warn('ut ohhhhhh spaghetti-OH', err)
			})
	})
})
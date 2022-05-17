console.log('thats so fetch!')

// https://cat-fact.herokuapp.com/facts

// use window.fetch() to retrive data from our url
fetch('https://cat-fact.herokuapp.com/facts')
// use funky  dot then syntax -- to handle asyncronicity
	.then(responseData => {
		// does not run until we have heard back from cat facts
		// convert the data payload into readable json
		return responseData.json() // return converting the format of the data (its a fetch thing)
	}) // takes a cb that runs when cat facts gets back to us
	.then(jsonData => {
		// do something with our data
		console.log(jsonData)
	})
	// console.log the data
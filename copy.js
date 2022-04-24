// GET fetch




import fetch from 'node-fetch'



function goGetMyBeers() {
    let allBeers
    let allCoffees
  
    const newBeer = { price: '$7', name: 'Stela Artois', id: 220 }
  
    fetch('https://api.sampleapis.com/beers/ale') // go and get data API
      .then(myResponse => myResponse.json()) // formating the response
      .then(data => {
        data.push(newBeer) // manipulating data and adding a new beer
        allBeers = data
      })
      .catch(myErr => console.error('we got an error:', myErr))
  
    fetch('https://api.sampleapis.com/coffee/hot')
      .then(allCoffees => allCoffees.json())
      .then(formattedCoffees => (coffees = formattedCoffees))
      .catch(err => console.err(err))
  
    console.log(allBeers, allCoffees)
  }
  
  goGetMyBeers()


// homework challenge
// to get coffees and Beers and combine them into 1 array
function getAllBeersAndCoffees() {
    const allBeersAndCoffees = []
  
    //const newBeer = { price: '$7', name: 'Stela Artois', id: 220 }
    fetch('https://api.sampleapis.com/beers/ale')
      .then(response => response.json())
      .then(data => {
        allBeersAndCoffees.push(data) // add data to the AllBeersAndCoffees Array
        return fetch('https://api.sampleapis.com/coffee/hot') // when this .then finishes we
      })
      .then(response => response.json())
      .then(allCoffees => allBeersAndCoffees.push(allCoffees)) // add data to the AllBeersAndCoffees Array
      .then(() => console.log(allBeersAndCoffees))
      .catch((myErr) => console.error('we got an error:', myErr))
  }
  
  getAllBeersAndCoffees()

  // This code is not runing
// 
import fetch from 'node-fetch'


function goGetMyBeers(){
    let allBeers
    let allCoffees

    const newBeer = { price: '7', name: 'Stela Artois', id:220}

    fetch('https://api.sampleapis.com/beers/ale')
    .then( myReponse => myReponse.json())
    .then(data => {
        data.push(newBeer)
        allBeers = data
    })
    .catch(myErr => console.error('We got an error:', myErr))

    fetch('https://api.sampleapis.com/coffee/hot')
    .then(allCoffes => allCoffes.json())
    .then(formattedCoffes => (coffees = formattedCoffes))
    .catch(err => console.err(err))

    console.log(allBeers, allCoffees)

}
goGetMyBeers()

// This code is not runing



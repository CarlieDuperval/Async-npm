import fetch from 'node-fetch'

async function getDataAsync() {
    try{
        const  response = await fetch('https://api.sampleapis.com/beers/ale')//GET request by default & promise returns 
        const data = await response.json()
        console.log(data)
    }   catch(err) {
        console.error(err)
    }
}
getDataAsync()
//import fetch from "node-fetch";

// //------------------------------------------------------------
// async function getDataAsync() {
//   let fname;
//   try {
//     const response = await fetch('https://api.sampleapis.com/beers/ale') // GET -> Promise
//     const data = await response.json()
//     fname = data[11].name
//     console.log("Hey, what's up, " + fname +"?")
//   } catch (err) {
//     console.error(err)
//   }
// }
// getDataAsync()

fetch('https://api.sampleapis.com/beers/ale')
    .then((response) => {
        return response.json()
    })
    .then(data =>  {
        console.log(data)
    })
    .catch((err) =>{
        console.error(err)
// ------------------------

    })
// GET is by default
// fetch('https://api.sampleapis.com/beers/ale')
//   .then(response => {
//     return response.json()
//   })
//   .then(data => {
//     console.log(data[87])
//   })
//   .catch(err => {
//     console.error(err)
//   })

// //------------------------------------------------------------
// // ------------------------

fetch('https://api.sampleapis.com/beers/ale')
    //.then((response) => { return response.json()})//same thing
    .then((response) => response.json())
    .then(beers => console.log(beers[87]))
    .catch(err => console.error(err))
// fetch('https://api.sampleapis.com/beers/ale')
//   .then(response => response.json())
//   .then(beers => console.log(beers[99]))
//   .catch(err => console.error(err))

// // ------------------------

// fetch('https://api.sampleapis.com/beers/ale')
//   .then(response => response.json())
//   .then(beers => {
//     for (let i = 0; i < beers.length; i++) {
//       console.log(beers[i].name)
//     }
//   })
//   .catch(err => console.error(err))

// // one way to write anonymous
// function (myErr) {
//   return console.log(myErr)
//   console.log('test') // this line will never run
// }

// arrow function way
// () => {}

    //---------------------------------
    fetch('https://api.sampleapis.com/beers/ale')
// () => {
//   return console.log('test') // explicit return
//   console.log('test') // this line will never run
// }

// () => console.log('test') // implicit return

// homework challenge
// to get coffees and Beers and combine them into 1 array
function getAllBeersAndCoffees() {
  const allBeersAndCoffees = [];

  const newBeer = { price: "$7", name: "Stela Artois", id: 220 };
  fetch("https://api.sampleapis.com/beers/ale")
    .then((response) => response.json())
    .then(beers => {
    for(let i= 0; i < beers.length; i++){
        console.log(beers[i].name)
    }
})
.catch(err => console.error(err))
    .then((data) => {
      allBeersAndCoffees.push(data); // add data to the AllBeersAndCoffees Array
      return fetch("https://api.sampleapis.com/coffee/hot"); // when this .then finishes we
    })
    .then((response) => response.json())
    .then((allCoffees) => allBeersAndCoffees.push(allCoffees)) // add data to the AllBeersAndCoffees Array
    .then(() => console.log(allBeersAndCoffees))
    .catch((myErr) => console.error("we got an error:", myErr));
}

getAllBeersAndCoffees();
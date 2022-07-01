import fetch from 'node-fetch'
const url = 'https://api.sampleapis.com/beers/ale'
async function getDataAsync() {
    try{
        const  response = await fetch(url)//GET request by default & promise returns 
        const data = await response.json()
        console.log(data)
    }   catch(err) {
        console.error(err)
    }
}
getDataAsync()

//------------------------------------------------------------

fetch('https://api.sampleapis.com/beers/ale')
    .then((response) => {
        return response.json()
    })
    .then(data =>  {
        console.log(data)
    })
    .catch((err) =>{
        console.error(err)

    })

//------------------------------------------------------------

fetch('https://api.sampleapis.com/beers/ale')
    //.then((response) => { return response.json()})//same thing
    .then((response) => response.json())
    .then(beers => console.log(beers[87]))
    .catch(err => console.error(err))


    //---------------------------------
    fetch('https://api.sampleapis.com/beers/ale')
    .then((response) => response.json())
    .then(beers => {
    for(let i= 0; i < beers.length; i++){
        console.log(beers[i].name)
    }
})
.catch(err => console.error(err))
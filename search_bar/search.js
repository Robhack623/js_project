const drinksUL = document.getElementById('drinksUL')
const searchBar = document.getElementById('searchBar')
const letter = document.getElementById('letter')
const letterA = document.getElementById("letterA")


let drinks =[]
console.log(drinks)

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredBevs = drinks.filter((result) => {
        return ( 
            result.strDrink.toLowerCase().includes(searchString) 
        );
    });
    displayLetterA(filteredBevs)
})




const getLetterA = async function() {

    const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"

    let response = await fetch(url)
    let bevs = await response.json()
    drinks = bevs.drinks
    displayLetterA(drinks)
}

const displayLetterA = function(drinks){

    let drink = drinks.map(function(result){
        return`
        <h4>${result.strDrink}</h4>
        `
    })
        letter.innerHTML = drink.join("")
}



getLetterA()
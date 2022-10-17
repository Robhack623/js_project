// extra
// google places API, show places to buy drinks, bars near me

// 
// https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a

// random
// www.thecocktaildb.com/api/json/v1/1/random.php

const drinksUL = document.getElementById("drinksUL")
const randomDrinkBtn = document.getElementById("randomDrinkBtn")


randomDrinkBtn.addEventListener("click", function() {
    async function getRandomDrink() {
        const url = "https://www.thecocktaildb.com/api/json/v2/9973533/random.php"
        let response = await fetch (url)
        let bevs = await response.json()
        console.log(bevs)

        let drinks = bevs.drinks
        console.log(drinks)

        let random = drinks.map(function(result) {
            return`

            if (value == null) {
                return ""
            } else {
                return value
            

            <h2><u>${result.strDrink}</u></h2>
            
            <h3>Instructions:</h3>
            <p>${result.strInstructions}</p>
               
            <h3>Ingredients:</h3>
            <ul>
                <li>${result.strIngredient1} - ${result.strMeasure1}</li>
                <li>${result.strIngredient2} - ${result.strMeasure2}</li>
                <li>${result.strIngredient3} - ${result.strMeasure3}</li>
                <li>${result.strIngredient4} - ${result.strMeasure4}</li>
                <li>${result.strIngredient5} - ${result.strMeasure5}</li>
                <li>${result.strIngredient6} - ${result.strMeasure6}</li>
                <li>${result.strIngredient7} - ${result.strMeasure7}</li>
                <li>${result.strIngredient8} - ${result.strMeasure8}</li>
                <li>${result.strIngredient9} - ${result.strMeasure9}</li>
                <li>${result.strIngredient10} - ${result.strMeasure10}</li>
                <li>${result.strIngredient11} - ${result.strMeasure11}</li>
                <li>${result.strIngredient12} - ${result.strMeasure12}</li>
                <li>${result.strIngredient13} - ${result.strMeasure13}</li>
                <li>${result.strIngredient14} - ${result.strMeasure14}</li>
                <li>${result.strIngredient15} - ${result.strMeasure15}</li>
            </ul>

            <img src="${result.strDrinkThumb}" />
            `
            
        })

    drinksUL.innerHTML = random.join("")
    
    }
    getRandomDrink()

})


const letter = document.getElementById("letter")


const letterA = document.getElementById("letterA")
async function getLetterA() {

    const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"

    let response = await fetch(url)
    let bevs = await response.json()
    console.log(bevs)

    let drinks = bevs.drinks
    console.log(drinks)

    let drink = drinks.map(function(result){
        return`
        <h4>${result.strDrink}</h4>
        `
    })
        letter.innerHTML = drink.join("")
}


const letterB = document.getElementById("letterB")
async function getLetterB() {

    const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=b"

    let response = await fetch(url)
    let bevs = await response.json()
    console.log(bevs)

    let drinks = bevs.drinks
    console.log(drinks)

    let drink = drinks.map(function(result){
        return`
        <h4>${result.strDrink}</h4>
        `
    })
        letter.innerHTML = drink.join("")
}
   

const letterC = document.getElementById("letterC")
async function getLetterC() {

    const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=c"

    let response = await fetch(url)
    let bevs = await response.json()
    console.log(bevs)

    let drinks = bevs.drinks
    console.log(drinks)

    let drink = drinks.map(function(result){
        return`
        <h4>${result.strDrink}</h4>
        `
    })
        letter.innerHTML = drink.join("")
}


const letterD = document.getElementById("letterD")
async function getLetterD() {

    const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=d"

    let response = await fetch(url)
    let bevs = await response.json()
    console.log(bevs)

    let drinks = bevs.drinks
    console.log(drinks)

    let drink = drinks.map(function(result){
        return`
        <h4>${result.strDrink}</h4>
        `
    })
        letter.innerHTML = drink.join("")
}
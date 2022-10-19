const drinksAZ = document.getElementById("drinksAZ")
const allDrinks = document.getElementById("allDrinks")


async function getLetterA() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=a"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container">${result.strDrink}<img class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML = drink.join("")
}



async function getLetterB() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=b"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container">${result.strDrink}<img class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}

async function getLetterC() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=c"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container">${result.strDrink}<img class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}

async function getLetterD() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=d"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container">${result.strDrink}<img class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}

async function getLetterE() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=e"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container">${result.strDrink}<img class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}

async function getLetterF() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=f"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container">${result.strDrink}<img class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}

async function getLetterG() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=g"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container">${result.strDrink}<img class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}

async function getLetterH() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=h"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container">${result.strDrink}<img class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}

async function getLetterI() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=i"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container">${result.strDrink}<img class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}

async function getLetterJ() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=j"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container">${result.strDrink}<img class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}

async function getLetterK() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=k"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container">${result.strDrink}<img class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}

async function getLetterL() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=l"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container">${result.strDrink}<img class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}

async function getLetterM() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=m"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container">${result.strDrink}<img class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}

async function getLetterN() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=n"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container">${result.strDrink}<img class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}

async function getLetterO() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=o"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container">${result.strDrink}<img class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}

async function getLetterP() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=p"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container">${result.strDrink}<img class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}

async function getLetterQ() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=q"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container">${result.strDrink}<img class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}

async function getLetterR() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=r"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container">${result.strDrink}<img class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}

async function getLetterS() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=s"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container">${result.strDrink}<img class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}

async function getLetterT() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=t"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container">${result.strDrink}<img class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}

async function getLetterU() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=u"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container">${result.strDrink}<img class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}

async function getLetterV() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=v"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container">${result.strDrink}<img class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}

async function getLetterW() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=w"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container">${result.strDrink}<img class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}

async function getLetterX() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=x"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container">${result.strDrink}<img class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}

async function getLetterY() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=y"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container">${result.strDrink}<img class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}

async function getLetterZ() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=z"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container">${result.strDrink}<img class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}

const azDrinks = async()=>{
    try{
        await getLetterA();
        await getLetterB();
        await getLetterC();
        await getLetterD();
        await getLetterE();
        await getLetterF();
        await getLetterG();
        await getLetterH();
        await getLetterI();
        await getLetterJ();
        await getLetterK();
        await getLetterL();
        await getLetterM();
        await getLetterN();
        await getLetterO();
        await getLetterP();
        await getLetterQ();
        await getLetterR();
        await getLetterS();
        await getLetterT();
        await getLetterV();
        await getLetterW();
        await getLetterY();
        await getLetterZ();

    } catch (err) {
        console.error(err);
    }

}

drinksAZ.addEventListener('click', function(){
        azDrinks()
})

const randDrink = document.getElementById('randDrink')
const largeImg = document.getElementById('largeImg')
const drinkDescript = document.getElementById('drinkDescript')
const contentAlign = document.getElementById('contentAlign')
const rightContainer = document.getElementById('rightContainer')

async function getRandomDrinkMobile() {
    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/random.php"
    let response = await fetch (url)
    let bevs = await response.json()
    let drinks = bevs.drinks
    let random = drinks.map(function(result) {

        return`
        <div class = "content-align" id="contentAlign">
        <img class="large-img-mobile" src="${result.strDrinkThumb}">
        <h2>${result.strDrink}</h2>
        <p>${result.strInstructions}</p>
        <ul>
                ${result.strIngredient1 ? `<li>${result.strIngredient1} - ${result.strMeasure1}</li>` : ""}
                ${result.strIngredient2 ? `<li>${result.strIngredient2} - ${result.strMeasure2}</li>` : ""}
                ${result.strIngredient3 ? `<li>${result.strIngredient3} - ${result.strMeasure3}</li>` : ""}
                ${result.strIngredient4 ? `<li>${result.strIngredient4} - ${result.strMeasure4}</li>` : ""}
                ${result.strIngredient5 ? `<li>${result.strIngredient5} - ${result.strMeasure5}</li>` : ""}
                ${result.strIngredient6 ? `<li>${result.strIngredient6} - ${result.strMeasure6}</li>` : ""}
                ${result.strIngredient7 ? `<li>${result.strIngredient7} - ${result.strMeasure7}</li>` : ""}
                ${result.strIngredient8 ? `<li>${result.strIngredient8} - ${result.strMeasure8}</li>` : ""}
                ${result.strIngredient9 ? `<li>${result.strIngredient9} - ${result.strMeasure9}</li>` : ""}
                ${result.strIngredient10 ? `<li>${result.strIngredient10} - ${result.strMeasure10}</li>` : ""}
                ${result.strIngredient11 ? `<li>${result.strIngredient11} - ${result.strMeasure11}</li>` : ""}
                ${result.strIngredient12 ? `<li>${result.strIngredient12} - ${result.strMeasure12}</li>` : ""}
                ${result.strIngredient13 ? `<li>${result.strIngredient13} - ${result.strMeasure13}</li>` : ""}
                ${result.strIngredient14 ? `<li>${result.strIngredient14} - ${result.strMeasure14}</li>` : ""}
                ${result.strIngredient15 ? `<li>${result.strIngredient15} - ${result.strMeasure15}</li>` : ""}
            </ul>
        </div>
        `
    })
 
    allDrinks.innerHTML = random.join("")
}

async function getRandomDrinkDesktop() {
    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/random.php"
    let response = await fetch (url)
    let bevs = await response.json()
    let drinks = bevs.drinks
    let random = drinks.map(function(result) {

        return`
        <div class = "bottom-right-container" id="rightContainer">
        <img class="large-img-mobile" src="${result.strDrinkThumb}">
        <h2>${result.strDrink}</h2>
        <p>${result.strInstructions}</p>
        <ul>
                ${result.strIngredient1 ? `<li>${result.strIngredient1} - ${result.strMeasure1}</li>` : ""}
                ${result.strIngredient2 ? `<li>${result.strIngredient2} - ${result.strMeasure2}</li>` : ""}
                ${result.strIngredient3 ? `<li>${result.strIngredient3} - ${result.strMeasure3}</li>` : ""}
                ${result.strIngredient4 ? `<li>${result.strIngredient4} - ${result.strMeasure4}</li>` : ""}
                ${result.strIngredient5 ? `<li>${result.strIngredient5} - ${result.strMeasure5}</li>` : ""}
                ${result.strIngredient6 ? `<li>${result.strIngredient6} - ${result.strMeasure6}</li>` : ""}
                ${result.strIngredient7 ? `<li>${result.strIngredient7} - ${result.strMeasure7}</li>` : ""}
                ${result.strIngredient8 ? `<li>${result.strIngredient8} - ${result.strMeasure8}</li>` : ""}
                ${result.strIngredient9 ? `<li>${result.strIngredient9} - ${result.strMeasure9}</li>` : ""}
                ${result.strIngredient10 ? `<li>${result.strIngredient10} - ${result.strMeasure10}</li>` : ""}
                ${result.strIngredient11 ? `<li>${result.strIngredient11} - ${result.strMeasure11}</li>` : ""}
                ${result.strIngredient12 ? `<li>${result.strIngredient12} - ${result.strMeasure12}</li>` : ""}
                ${result.strIngredient13 ? `<li>${result.strIngredient13} - ${result.strMeasure13}</li>` : ""}
                ${result.strIngredient14 ? `<li>${result.strIngredient14} - ${result.strMeasure14}</li>` : ""}
                ${result.strIngredient15 ? `<li>${result.strIngredient15} - ${result.strMeasure15}</li>` : ""}
            </ul>
        </div>
        `
    })
 
    rightContainer.innerHTML = random.join("")
}


randDrink.addEventListener('click', function(){
    if (screenSize.matches){
        getRandomDrinkDesktop()
    }else{
        getRandomDrinkMobile()
    }
})

var screenSize = window.matchMedia("(min-width: 750px)")


const drinksAZ = document.getElementById("drinksAZ")
const allDrinks = document.getElementById("allDrinks")


const chooseAD = document.getElementById("chooseAD")
const chooseEI = document.getElementById("chooseEI")
const chooseJN = document.getElementById("chooseJN")
const chooseOS = document.getElementById("chooseOS")
const chooseTZ = document.getElementById("chooseTZ")

async function getLetterAMobile() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=a"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container" onclick='passAnotherMobile(${result.idDrink})'>${result.strDrink}<img onclick='passAnotherMobile(${result.idDrink})' class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML = drink.join("")
}

async function getLetterBMobile() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=b"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container" onclick='passAnotherMobile(${result.idDrink})'>${result.strDrink}<img onclick='passAnotherMobile(${result.idDrink})' class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}

async function getLetterCMobile() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=c"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container" onclick='passAnotherMobile(${result.idDrink})'>${result.strDrink}<img onclick='passAnotherMobile(${result.idDrink})' class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}

async function getLetterDMobile() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=d"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container" onclick='passAnotherMobile(${result.idDrink})'>${result.strDrink}<img onclick='passAnotherMobile(${result.idDrink})' class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}

async function getLetterEMobile() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=e"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container" onclick='passAnotherMobile(${result.idDrink})'>${result.strDrink}<img onclick='passAnotherMobile(${result.idDrink})' class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML = drink.join("")
}

async function getLetterFMobile() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=f"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container" onclick='passAnotherMobile(${result.idDrink})'>${result.strDrink}<img onclick='passAnotherMobile(${result.idDrink})' class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}

async function getLetterGMobile() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=g"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container" onclick='passAnotherMobile(${result.idDrink})'>${result.strDrink}<img onclick='passAnotherMobile(${result.idDrink})' class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}

async function getLetterHMobile() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=h"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container" onclick='passAnotherMobile(${result.idDrink})'>${result.strDrink}<img onclick='passAnotherMobile(${result.idDrink})' class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}

async function getLetterIMobile() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=i"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container" onclick='passAnotherMobile(${result.idDrink})'>${result.strDrink}<img onclick='passAnotherMobile(${result.idDrink})' class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}

async function getLetterJMobile() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=j"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container" onclick='passAnotherMobile(${result.idDrink})'>${result.strDrink}<img onclick='passAnotherMobile(${result.idDrink})' class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML = drink.join("")
}

async function getLetterKMobile() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=k"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container" onclick='passAnotherMobile(${result.idDrink})'>${result.strDrink}<img onclick='passAnotherMobile(${result.idDrink})' class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}

async function getLetterLMobile() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=l"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container" onclick='passAnotherMobile(${result.idDrink})'>${result.strDrink}<img onclick='passAnotherMobile(${result.idDrink})' class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}

async function getLetterMMobile() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=m"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container" onclick='passAnotherMobile(${result.idDrink})'>${result.strDrink}<img onclick='passAnotherMobile(${result.idDrink})' class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}

async function getLetterNMobile() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=n"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container" onclick='passAnotherMobile(${result.idDrink})'>${result.strDrink}<img onclick='passAnotherMobile(${result.idDrink})' class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}

async function getLetterOMobile() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=o"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container" onclick='passAnotherMobile(${result.idDrink})'>${result.strDrink}<img onclick='passAnotherMobile(${result.idDrink})' class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML = drink.join("")
}

async function getLetterPMobile() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=p"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container" onclick='passAnotherMobile(${result.idDrink})'>${result.strDrink}<img onclick='passAnotherMobile(${result.idDrink})' class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}

async function getLetterQMobile() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=q"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container" onclick='passAnotherMobile(${result.idDrink})'>${result.strDrink}<img onclick='passAnotherMobile(${result.idDrink})' class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}

async function getLetterRMobile() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=r"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container" onclick='passAnotherMobile(${result.idDrink})'>${result.strDrink}<img onclick='passAnotherMobile(${result.idDrink})' class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}

async function getLetterSMobile() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=s"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container" onclick='passAnotherMobile(${result.idDrink})'>${result.strDrink}<img onclick='passAnotherMobile(${result.idDrink})' class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}

async function getLetterTMobile() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=t"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container" onclick='passAnotherMobile(${result.idDrink})'>${result.strDrink}<img onclick='passAnotherMobile(${result.idDrink})' class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML = drink.join("")
}


async function getLetterVMobile() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=v"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container" onclick='passAnotherMobile(${result.idDrink})'>${result.strDrink}<img onclick='passAnotherMobile(${result.idDrink})' class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}

async function getLetterWMobile() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=w"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container" onclick='passAnotherMobile(${result.idDrink})'>${result.strDrink}<img onclick='passAnotherMobile(${result.idDrink})' class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}


async function getLetterYMobile() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=y"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container" onclick='passAnotherMobile(${result.idDrink})'>${result.strDrink}<img onclick='passAnotherMobile(${result.idDrink})' class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}

async function getLetterZMobile() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=z"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container" onclick='passAnotherMobile(${result.idDrink})'>${result.strDrink}<img onclick='passAnotherMobile(${result.idDrink})' class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}




async function getLetterADesktop() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=a"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container" onclick='passAnotherDesktop(${result.idDrink})'>${result.strDrink}<img onclick='passAnotherDesktop(${result.idDrink})' class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML = drink.join("")
}

async function getLetterBDesktop() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=b"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container" onclick='passAnotherDesktop(${result.idDrink})'>${result.strDrink}<img onclick='passAnotherDesktop(${result.idDrink})' class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}

async function getLetterCDesktop() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=c"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container" onclick='passAnotherDesktop(${result.idDrink})'>${result.strDrink}<img onclick='passAnotherDesktop(${result.idDrink})' class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}

async function getLetterDDesktop() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=d"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container" onclick='passAnotherDesktop(${result.idDrink})'>${result.strDrink}<img onclick='passAnotherDesktop(${result.idDrink})' class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}

async function getLetterEDesktop() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=e"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container" onclick='passAnotherDesktop(${result.idDrink})'>${result.strDrink}<img onclick='passAnotherDesktop(${result.idDrink})' class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML = drink.join("")
}

async function getLetterFDesktop() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=f"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container" onclick='passAnotherDesktop(${result.idDrink})'>${result.strDrink}<img onclick='passAnotherDesktop(${result.idDrink})' class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}

async function getLetterGDesktop() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=g"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container" onclick='passAnotherDesktop(${result.idDrink})'>${result.strDrink}<img onclick='passAnotherDesktop(${result.idDrink})' class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}

async function getLetterHDesktop() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=h"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container" onclick='passAnotherDesktop(${result.idDrink})'>${result.strDrink}<img onclick='passAnotherDesktop(${result.idDrink})' class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}

async function getLetterIDesktop() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=i"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container" onclick='passAnotherDesktop(${result.idDrink})'>${result.strDrink}<img onclick='passAnotherDesktop(${result.idDrink})' class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}

async function getLetterJDesktop() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=j"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container" onclick='passAnotherDesktop(${result.idDrink})'>${result.strDrink}<img onclick='passAnotherDesktop(${result.idDrink})' class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML = drink.join("")
}

async function getLetterKDesktop() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=k"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container" onclick='passAnotherDesktop(${result.idDrink})'>${result.strDrink}<img onclick='passAnotherDesktop(${result.idDrink})' class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}

async function getLetterLDesktop() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=l"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container" onclick='passAnotherDesktop(${result.idDrink})'>${result.strDrink}<img onclick='passAnotherDesktop(${result.idDrink})' class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}

async function getLetterMDesktop() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=m"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container" onclick='passAnotherDesktop(${result.idDrink})'>${result.strDrink}<img onclick='passAnotherDesktop(${result.idDrink})' class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}

async function getLetterNDesktop() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=n"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container" onclick='passAnotherDesktop(${result.idDrink})'>${result.strDrink}<img onclick='passAnotherDesktop(${result.idDrink})' class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}

async function getLetterODesktop() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=o"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container" onclick='passAnotherDesktop(${result.idDrink})'>${result.strDrink}<img onclick='passAnotherDesktop(${result.idDrink})' class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML = drink.join("")
}

async function getLetterPDesktop() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=p"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container" onclick='passAnotherDesktop(${result.idDrink})'>${result.strDrink}<img onclick='passAnotherDesktop(${result.idDrink})' class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}

async function getLetterQDesktop() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=q"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container" onclick='passAnotherDesktop(${result.idDrink})'>${result.strDrink}<img onclick='passAnotherDesktop(${result.idDrink})' class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}

async function getLetterRDesktop() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=r"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container" onclick='passAnotherDesktop(${result.idDrink})'>${result.strDrink}<img onclick='passAnotherDesktop(${result.idDrink})' class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}

async function getLetterSDesktop() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=s"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container" onclick='passAnotherDesktop(${result.idDrink})'>${result.strDrink}<img onclick='passAnotherDesktop(${result.idDrink})' class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}

async function getLetterTDesktop() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=t"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container" onclick='passAnotherDesktop(${result.idDrink})'>${result.strDrink}<img onclick='passAnotherDesktop(${result.idDrink})' class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML = drink.join("")
}

async function getLetterVDesktop() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=v"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container" onclick='passAnotherDesktop(${result.idDrink})'>${result.strDrink}<img onclick='passAnotherDesktop(${result.idDrink})' class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}

async function getLetterWDesktop() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=w"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container" onclick='passAnotherDesktop(${result.idDrink})'>${result.strDrink}<img onclick='passAnotherDesktop(${result.idDrink})' class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}

async function getLetterYDesktop() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=y"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container" onclick='passAnotherDesktop(${result.idDrink})'>${result.strDrink}<img onclick='passAnotherDesktop(${result.idDrink})' class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}

async function getLetterZDesktop() {

    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=z"

    let response = await fetch(url)
    let bevs = await response.json()
    
    let drinks = bevs.drinks
    
    let drink = drinks.map(function(result){
        return`
        <div class="drink-container" onclick='passAnotherDesktop(${result.idDrink})'>${result.strDrink}<img onclick='passAnotherDesktop(${result.idDrink})' class="img-thumbnail" src="${result.strDrinkThumb}"></div>
        `
    })
        allDrinks.innerHTML += drink.join("")
}

const adDrinksMobile = async()=>{
    await getLetterAMobile();
    await getLetterBMobile();
    await getLetterCMobile();
    await getLetterDMobile();
}

const eiDrinksMobile = async()=>{
    await getLetterEMobile();
    await getLetterFMobile();
    await getLetterGMobile();
    await getLetterHMobile();
    await getLetterIMobile();
}

const jnDrinksMobile = async()=>{
    await getLetterJMobile();
    await getLetterKMobile();
    await getLetterLMobile();
    await getLetterMMobile();
    await getLetterNMobile();
}

const osDrinksMobile = async()=>{
    await getLetterOMobile();
    await getLetterPMobile();
    await getLetterQMobile();
    await getLetterRMobile();
    await getLetterSMobile();
}

const tzDrinksMobile = async()=>{
    await getLetterTMobile();
    await getLetterVMobile();
    await getLetterWMobile();
    await getLetterYMobile();
    await getLetterZMobile();
}


const adDrinksDesktop = async()=>{
    await getLetterADesktop();
    await getLetterBDesktop();
    await getLetterCDesktop();
    await getLetterDDesktop();
}

const eiDrinksDesktop = async()=>{
    await getLetterEDesktop();
    await getLetterFDesktop();
    await getLetterGDesktop();
    await getLetterHDesktop();
    await getLetterIDesktop();
}

const jnDrinksDesktop = async()=>{
    await getLetterJDesktop();
    await getLetterKDesktop();
    await getLetterLDesktop();
    await getLetterMDesktop();
    await getLetterNDesktop();
}

const osDrinksDesktop = async()=>{
    await getLetterODesktop();
    await getLetterPDesktop();
    await getLetterQDesktop();
    await getLetterRDesktop();
    await getLetterSDesktop();
}

const tzDrinksDesktop = async()=>{
    await getLetterTDesktop();
    await getLetterVDesktop();
    await getLetterWDesktop();
    await getLetterYDesktop();
    await getLetterZDesktop();
}


chooseAD.addEventListener('click', function(){
    if (screenSize.matches){
        adDrinksDesktop()
    }else{
        adDrinksMobile()
    }
})

chooseEI.addEventListener('click', function(){
    if (screenSize.matches){
        eiDrinksDesktop()
    }else{
        eiDrinksMobile()
    }
})

chooseJN.addEventListener('click', function(){
    if (screenSize.matches){
        jnDrinksDesktop()
    }else{
        jnDrinksMobile()
    }
})

chooseOS.addEventListener('click', function(){
    if (screenSize.matches){
        osDrinksDesktop()
    }else{
        osDrinksMobile()
    }
})

chooseTZ.addEventListener('click', function(){
    if (screenSize.matches){
        tzDrinksDesktop()
    }else{
        tzDrinksMobile()
    }
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

const searchBar = document.getElementById("searchBar")


searchBar.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const searchString = e.target.value.toLowerCase();
        async function getUserSearch() {
            const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=" + searchString
            let response = await fetch(url)
            let bevs = await response.json()  
            let drinks = bevs.drinks
            let drink = drinks.map(function(result){
                return`
                <div class="drink-container">${result.strDrink}<img class="img-thumbnail" src="${result.strDrinkThumb}"></div>
                `
            })
            allDrinks.innerHTML = drink
        }
        getUserSearch()
    }
})

const chooseGin = document.getElementById('chooseGin');
const chooseRum = document.getElementById('chooseRum');
const chooseTequila = document.getElementById('chooseTequila');
const chooseVodka = document.getElementById('chooseVodka');
const chooseWhiskey = document.getElementById('chooseWhiskey');
const thisOneDrink = document.getElementById('thisOneDrink')


chooseGin.addEventListener('click', function() {
    if(screenSize.matches){
    chooseSpiritDesktop(this.innerHTML) 
    }else{
    chooseSpiritMobile(this.innerHTML)   
    }
})
chooseRum.addEventListener('click', function() {
    if(screenSize.matches){
    chooseSpiritDesktop(this.innerHTML) 
    }else{
    chooseSpiritMobile(this.innerHTML)   
    }
})
chooseTequila.addEventListener('click', function() {
    if(screenSize.matches){
    chooseSpiritDesktop(this.innerHTML) 
    }else{
    chooseSpiritMobile(this.innerHTML)   
    }
})
chooseVodka.addEventListener('click', function() {
    if(screenSize.matches){
    chooseSpiritDesktop(this.innerHTML) 
    }else{
    chooseSpiritMobile(this.innerHTML)   
    }
})
chooseWhiskey.addEventListener('click', function() {
    if(screenSize.matches){
    chooseSpiritDesktop(this.innerHTML) 
    }else{
    chooseSpiritMobile(this.innerHTML)   
    }
})




async function chooseSpiritMobile(drinker) {
    let url = `https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=${drinker}`
    let response = await fetch(url)
    let drink = await response.json()
    let someDrinks = drink.drinks
    const chosenSpirit = someDrinks.map(function(drinky) {
        return `
            <div class = "drink-container" onclick='passAnotherMobile(${drinky.idDrink})'>${drinky.strDrink}<img onclick='passAnotherMobile(${drinky.idDrink})' class="img-thumbnail" src="${drinky.strDrinkThumb}">
            </div>
        `
    })
    
    allDrinks.innerHTML = chosenSpirit.join('')
}


async function chooseSpiritDesktop(drinker) {
    let url = `https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=${drinker}`
    let response = await fetch(url)
    let drink = await response.json()
    let someDrinks = drink.drinks
    const chosenSpirit = someDrinks.map(function(drinky) {
        return `
            <div class = "drink-container">
            <p onclick='passAnotherDesktop(${drinky.idDrink})'>${drinky.strDrink}</p>
            <img onclick='passAnotherDesktop(${drinky.idDrink})' class="img-thumbnail" src="${drinky.strDrinkThumb}">
            </div>
        `
    })
    

    allDrinks.innerHTML = chosenSpirit.join('')
}

async function passAnotherMobile(chooseThisDrink) {
    let url = `https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=${chooseThisDrink}`
    let response = await fetch(url)
    let drink = await response.json()
    let thisDrinks = drink.drinks
    console.log(thisDrinks)
    const thisDrink = thisDrinks.map(function(drinky) {
        return `
        <div class = "content-align" id="contentAlign">
        <img class="large-img-mobile" src="${drinky.strDrinkThumb}"></img>
        <h2>${drinky.strDrink}</h2>
        <ul>Ingredients:
            ${drinky.strIngredient1 ? `<li>${drinky.strIngredient1} - ${drinky.strMeasure1}</li>` : ""}
            ${drinky.strIngredient2 ? `<li>${drinky.strIngredient2} - ${drinky.strMeasure2}</li>` : ""}
            ${drinky.strIngredient3 ? `<li>${drinky.strIngredient3} - ${drinky.strMeasure3}</li>` : ""}
            ${drinky.strIngredient4 ? `<li>${drinky.strIngredient4} - ${drinky.strMeasure4}</li>` : ""}
            ${drinky.strIngredient5 ? `<li>${drinky.strIngredient5} - ${drinky.strMeasure5}</li>` : ""}
            ${drinky.strIngredient6 ? `<li>${drinky.strIngredient6} - ${drinky.strMeasure6}</li>` : ""}
            ${drinky.strIngredient7 ? `<li>${drinky.strIngredient7} - ${drinky.strMeasure7}</li>` : ""}
            ${drinky.strIngredient8 ? `<li>${drinky.strIngredient8} - ${drinky.strMeasure8}</li>` : ""}
            ${drinky.strIngredient9 ? `<li>${drinky.strIngredient9} - ${drinky.strMeasure9}</li>` : ""}
            ${drinky.strIngredient10 ? `<li>${drinky.strIngredient10} - ${drinky.strMeasure10}</li>` : ""}
            ${drinky.strIngredient11 ? `<li>${drinky.strIngredient11} - ${drinky.strMeasure11}</li>` : ""}
            ${drinky.strIngredient12 ? `<li>${drinky.strIngredient12} - ${drinky.strMeasure12}</li>` : ""}
            ${drinky.strIngredient13 ? `<li>${drinky.strIngredient13} - ${drinky.strMeasure13}</li>` : ""}
            ${drinky.strIngredient14 ? `<li>${drinky.strIngredient14} - ${drinky.strMeasure14}</li>` : ""}
            ${drinky.strIngredient15 ? `<li>${drinky.strIngredient15} - ${drinky.strMeasure15}</li>` : ""}
        </ul>
        <p>${drinky.strInstructions}<p>
        </div>
        `
    })
    allDrinks.innerHTML = thisDrink.join('')
}




async function passAnotherDesktop(chooseThisDrink) {
    let url = `https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=${chooseThisDrink}`
    let response = await fetch(url)
    let drink = await response.json()
    let thisDrinks = drink.drinks
    console.log(thisDrinks)
    const thisDrink = thisDrinks.map(function(drinky) {
        return `
        <div class = "bottom-right-container" id="rightContainer">
        <img class="large-img-mobile" src="${drinky.strDrinkThumb}">
        <h2>${drinky.strDrink}</h2>
        <ul>Ingredients:
            ${drinky.strIngredient1 ? `<li>${drinky.strIngredient1} - ${drinky.strMeasure1}</li>` : ""}
            ${drinky.strIngredient2 ? `<li>${drinky.strIngredient2} - ${drinky.strMeasure2}</li>` : ""}
            ${drinky.strIngredient3 ? `<li>${drinky.strIngredient3} - ${drinky.strMeasure3}</li>` : ""}
            ${drinky.strIngredient4 ? `<li>${drinky.strIngredient4} - ${drinky.strMeasure4}</li>` : ""}
            ${drinky.strIngredient5 ? `<li>${drinky.strIngredient5} - ${drinky.strMeasure5}</li>` : ""}
            ${drinky.strIngredient6 ? `<li>${drinky.strIngredient6} - ${drinky.strMeasure6}</li>` : ""}
            ${drinky.strIngredient7 ? `<li>${drinky.strIngredient7} - ${drinky.strMeasure7}</li>` : ""}
            ${drinky.strIngredient8 ? `<li>${drinky.strIngredient8} - ${drinky.strMeasure8}</li>` : ""}
            ${drinky.strIngredient9 ? `<li>${drinky.strIngredient9} - ${drinky.strMeasure9}</li>` : ""}
            ${drinky.strIngredient10 ? `<li>${drinky.strIngredient10} - ${drinky.strMeasure10}</li>` : ""}
            ${drinky.strIngredient11 ? `<li>${drinky.strIngredient11} - ${drinky.strMeasure11}</li>` : ""}
            ${drinky.strIngredient12 ? `<li>${drinky.strIngredient12} - ${drinky.strMeasure12}</li>` : ""}
            ${drinky.strIngredient13 ? `<li>${drinky.strIngredient13} - ${drinky.strMeasure13}</li>` : ""}
            ${drinky.strIngredient14 ? `<li>${drinky.strIngredient14} - ${drinky.strMeasure14}</li>` : ""}
            ${drinky.strIngredient15 ? `<li>${drinky.strIngredient15} - ${drinky.strMeasure15}</li>` : ""}
        </ul>
        <p>${drinky.strInstructions}<p>
        </div>
        `
    })
    rightContainer.innerHTML = thisDrink.join('')
}


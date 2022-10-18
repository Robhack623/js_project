
const randomDrinkBtn = document.getElementById("randomDrinkBtn")
randomDrinkBtn.addEventListener("click", function() {
    async function getRandomDrink() {
        const url = "https://www.thecocktaildb.com/api/json/v2/9973533/random.php"
        let response = await fetch (url)
        let bevs = await response.json()
        let drinks = bevs.drinks
        let random = drinks.map(function(result) {
            return`
            <h2><u>${result.strDrink}</u></h2>
            <h3>Instructions:</h3>
            <p>${result.strInstructions}</p>
            <h3>Ingredients:</h3>
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
            <img src="${result.strDrinkThumb}" />
            `
        })
    letter.innerHTML = random.join("")
    }
    getRandomDrink()
})




async function passAnother(chooseThisDrink) {
    const url = `https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=${chooseThisDrink}`
    let response = await fetch(url)
    let bevs = await response.json()
    let drinks = bevs.drinks
    const drink = drinks.map(function(result) {
        return`
            <h2><u>${result.strDrink}</u></h2>
            <h3>Instructions:</h3>
            <p>${result.strInstructions}</p>
            <h3>Ingredients:</h3>
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
            <img src="${result.strDrinkThumb}" />
            `
    })
    letter.innerHTML = drink.join('')
}




const letter = document.getElementById("letter")

const letterA = document.getElementById("letterA")
async function getLetterA() {
    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=a"
    let response = await fetch(url)
    let bevs = await response.json()
    let drinks = bevs.drinks
    let drink = drinks.map(function(result){
        return`
        <h4 onclick="passAnother(${result.idDrink})"><u>${result.strDrink}</u></h4>
        `
    })
        letter.innerHTML = drink.join("")
}


const letterB = document.getElementById("letterB")
async function getLetterB() {
    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=b"
    let response = await fetch(url)
    let bevs = await response.json()
    let drinks = bevs.drinks
    let drink = drinks.map(function(result){
        return`
        <h4 onclick="passAnother(${result.idDrink})"><u>${result.strDrink}</u></h4>        
        `
    })
        letter.innerHTML = drink.join("")
}
   

const letterC = document.getElementById("letterC")
async function getLetterC() {
    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=c"
    let response = await fetch(url)
    let bevs = await response.json()
    let drinks = bevs.drinks
    let drink = drinks.map(function(result){
        return`
        <h4 onclick="passAnother(${result.idDrink})"><u>${result.strDrink}</u></h4>        
        `
    })
        letter.innerHTML = drink.join("")
}


const letterD = document.getElementById("letterD")
async function getLetterD() {
    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=d"
    let response = await fetch(url)
    let bevs = await response.json()
    let drinks = bevs.drinks
    let drink = drinks.map(function(result){
        return`
        <h4 onclick="passAnother(${result.idDrink})"><u>${result.strDrink}</u></h4>        
        `
    })
        letter.innerHTML = drink.join("")
}


const letterE = document.getElementById("letterE")
async function getLetterE() {
    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=e"
    let response = await fetch(url)
    let bevs = await response.json()
    let drinks = bevs.drinks
    let drink = drinks.map(function(result){
        return`
        <h4 onclick="passAnother(${result.idDrink})"><u>${result.strDrink}</u></h4>
        `
    })
        letter.innerHTML = drink.join("")
}


const letterF = document.getElementById("letterF")
async function getLetterF() {
    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=f"
    let response = await fetch(url)
    let bevs = await response.json()
    let drinks = bevs.drinks
    let drink = drinks.map(function(result){
        return`
        <h4 onclick="passAnother(${result.idDrink})"><u>${result.strDrink}</u></h4>        
        `
    })
        letter.innerHTML = drink.join("")
}
   

const letterG = document.getElementById("letterG")
async function getLetterG() {
    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=g"
    let response = await fetch(url)
    let bevs = await response.json()
    let drinks = bevs.drinks
    let drink = drinks.map(function(result){
        return`
        <h4 onclick="passAnother(${result.idDrink})"><u>${result.strDrink}</u></h4>        
        `
    })
        letter.innerHTML = drink.join("")
}


const letterH = document.getElementById("letterH")
async function getLetterH() {
    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=h"
    let response = await fetch(url)
    let bevs = await response.json()
    let drinks = bevs.drinks
    let drink = drinks.map(function(result){
        return`
        <h4 onclick="passAnother(${result.idDrink})"><u>${result.strDrink}</u></h4>        
        `
    })
        letter.innerHTML = drink.join("")
}


const letterI = document.getElementById("letterI")
async function getLetterI() {
    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=i"
    let response = await fetch(url)
    let bevs = await response.json()
    let drinks = bevs.drinks
    let drink = drinks.map(function(result){
        return`
        <h4 onclick="passAnother(${result.idDrink})"><u>${result.strDrink}</u></h4>
        `
    })
        letter.innerHTML = drink.join("")
}


const letterJ = document.getElementById("letterJ")
async function getLetterJ() {
    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=j"
    let response = await fetch(url)
    let bevs = await response.json()
    let drinks = bevs.drinks
    let drink = drinks.map(function(result){
        return`
        <h4 onclick="passAnother(${result.idDrink})"><u>${result.strDrink}</u></h4>        
        `
    })
        letter.innerHTML = drink.join("")
}
   

const letterK = document.getElementById("letterK")
async function getLetterK() {
    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=k"
    let response = await fetch(url)
    let bevs = await response.json()
    let drinks = bevs.drinks
    let drink = drinks.map(function(result){
        return`
        <h4 onclick="passAnother(${result.idDrink})"><u>${result.strDrink}</u></h4>        
        `
    })
        letter.innerHTML = drink.join("")
}


const letterL = document.getElementById("letterL")
async function getLetterL() {
    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=l"
    let response = await fetch(url)
    let bevs = await response.json()
    let drinks = bevs.drinks
    let drink = drinks.map(function(result){
        return`
        <h4 onclick="passAnother(${result.idDrink})"><u>${result.strDrink}</u></h4>        
        `
    })
        letter.innerHTML = drink.join("")
}


const letterM = document.getElementById("letterM")
async function getLetterM() {
    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=m"
    let response = await fetch(url)
    let bevs = await response.json()
    let drinks = bevs.drinks
    let drink = drinks.map(function(result){
        return`
        <h4 onclick="passAnother(${result.idDrink})"><u>${result.strDrink}</u></h4>
        `
    })
        letter.innerHTML = drink.join("")
}


const letterN = document.getElementById("letterN")
async function getLetterN() {
    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=n"
    let response = await fetch(url)
    let bevs = await response.json()
    let drinks = bevs.drinks
    let drink = drinks.map(function(result){
        return`
        <h4 onclick="passAnother(${result.idDrink})"><u>${result.strDrink}</u></h4>        
        `
    })
        letter.innerHTML = drink.join("")
}
   

const letterO = document.getElementById("letterO")
async function getLetterO() {
    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=O"
    let response = await fetch(url)
    let bevs = await response.json()
    let drinks = bevs.drinks
    let drink = drinks.map(function(result){
        return`
        <h4 onclick="passAnother(${result.idDrink})"><u>${result.strDrink}</u></h4>        
        `
    })
        letter.innerHTML = drink.join("")
}


const letterP = document.getElementById("letterP")
async function getLetterP() {
    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=p"
    let response = await fetch(url)
    let bevs = await response.json()
    let drinks = bevs.drinks
    let drink = drinks.map(function(result){
        return`
        <h4 onclick="passAnother(${result.idDrink})"><u>${result.strDrink}</u></h4>        
        `
    })
        letter.innerHTML = drink.join("")
}


const letterQ = document.getElementById("letterQ")
async function getLetterQ() {
    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=q"
    let response = await fetch(url)
    let bevs = await response.json()
    let drinks = bevs.drinks
    let drink = drinks.map(function(result){
        return`
        <h4 onclick="passAnother(${result.idDrink})"><u>${result.strDrink}</u></h4>
        `
    })
        letter.innerHTML = drink.join("")
}


const letterR = document.getElementById("letterR")
async function getLetterR() {
    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=r"
    let response = await fetch(url)
    let bevs = await response.json()
    let drinks = bevs.drinks
    let drink = drinks.map(function(result){
        return`
        <h4 onclick="passAnother(${result.idDrink})"><u>${result.strDrink}</u></h4>        
        `
    })
        letter.innerHTML = drink.join("")
}
   

const letterS = document.getElementById("letterS")
async function getLetterS() {
    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=s"
    let response = await fetch(url)
    let bevs = await response.json()
    let drinks = bevs.drinks
    let drink = drinks.map(function(result){
        return`
        <h4 onclick="passAnother(${result.idDrink})"><u>${result.strDrink}</u></h4>        
        `
    })
        letter.innerHTML = drink.join("")
}


const letterT = document.getElementById("letterT")
async function getLetterT() {
    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=t"
    let response = await fetch(url)
    let bevs = await response.json()
    let drinks = bevs.drinks
    let drink = drinks.map(function(result){
        return`
        <h4 onclick="passAnother(${result.idDrink})"><u>${result.strDrink}</u></h4>        
        `
    })
        letter.innerHTML = drink.join("")
}


const letterU = document.getElementById("letterU")
async function getLetterU() {
    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=u"
    let response = await fetch(url)
    let bevs = await response.json()
    let drinks = bevs.drinks
    let drink = drinks.map(function(result){
        return`
        <h4 onclick="passAnother(${result.idDrink})"><u>${result.strDrink}</u></h4>
        `
    })
        letter.innerHTML = drink.join("")
}


const letterV = document.getElementById("letterV")
async function getLetterV() {
    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=v"
    let response = await fetch(url)
    let bevs = await response.json()
    let drinks = bevs.drinks
    let drink = drinks.map(function(result){
        return`
        <h4 onclick="passAnother(${result.idDrink})"><u>${result.strDrink}</u></h4>        
        `
    })
        letter.innerHTML = drink.join("")
}
   

const letterW = document.getElementById("letterW")
async function getLetterW() {
    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=w"
    let response = await fetch(url)
    let bevs = await response.json()
    let drinks = bevs.drinks
    let drink = drinks.map(function(result){
        return`
        <h4 onclick="passAnother(${result.idDrink})"><u>${result.strDrink}</u></h4>        
        `
    })
        letter.innerHTML = drink.join("")
}


const letterX = document.getElementById("letterX")
async function getLetterX() {
    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=x"
    let response = await fetch(url)
    let bevs = await response.json()
    let drinks = bevs.drinks
    let drink = drinks.map(function(result){
        return`
        <h4 onclick="passAnother(${result.idDrink})"><u>${result.strDrink}</u></h4>        
        `
    })
        letter.innerHTML = drink.join("")
}


const letterY = document.getElementById("letterY")
async function getLetterY() {
    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=y"
    let response = await fetch(url)
    let bevs = await response.json()
    let drinks = bevs.drinks
    let drink = drinks.map(function(result){
        return`
        <h4 onclick="passAnother(${result.idDrink})"><u>${result.strDrink}</u></h4>
        `
    })
        letter.innerHTML = drink.join("")
}


const letterZ = document.getElementById("letterZ")
async function getLetterZ() {
    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=z"
    let response = await fetch(url)
    let bevs = await response.json()
    let drinks = bevs.drinks
    let drink = drinks.map(function(result){
        return`
        <h4 onclick="passAnother(${result.idDrink})"><u>${result.strDrink}</u></h4>        
        `
    })
        letter.innerHTML = drink.join("")
}
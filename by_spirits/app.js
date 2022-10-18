
const chooseGin = document.getElementById('chooseGin');
const chooseRum = document.getElementById('chooseRum');
const chooseTequila = document.getElementById('chooseTequila');
const chooseVodka = document.getElementById('chooseVodka');
const chooseWhiskey = document.getElementById('chooseWhiskey');
const thisOneDrink = document.getElementById('thisOneDrink')

chooseGin.addEventListener('click', function() {
    passValue(this.innerHTML)
})
chooseRum.addEventListener('click', function() {
    passValue(this.innerHTML)
})
chooseTequila.addEventListener('click', function() {
    passValue(this.innerHTML)
})
chooseVodka.addEventListener('click', function() {
    passValue(this.innerHTML)
})
chooseWhiskey.addEventListener('click', function() {
    passValue(this.innerHTML)
})

async function passValue(drinker) {
    let url = `https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=${drinker}`
    let response = await fetch(url)
    let drink = await response.json()
    let someDrinks = drink.drinks
    const allDrinks = someDrinks.map(function(drinky) {
        return `
            <p onclick='passAnother(${drinky.idDrink})'>${drinky.strDrink}</p>
            <img src="${drinky.strDrinkThumb}">
        `
    })
    
    chosenDrink.innerHTML = allDrinks.join('')
}


async function passAnother(chooseThisDrink) {
    let url = `https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=${chooseThisDrink}`
    let response = await fetch(url)
    let drink = await response.json()
    let thisDrinks = drink.drinks
    console.log(thisDrinks)
    const thisDrink = thisDrinks.map(function(drinky) {
        return `
        <h2>${drinky.strDrink}</h2>
        <img src="${drinky.strDrinkThumb}">
        <ul>Ingredients:
            <li>${drinky.strIngredient1} - ${drinky.strMeasure1}</li>
            <li>${drinky.strIngredient2} - ${drinky.strMeasure2}</li>
            <li>${drinky.strIngredient3} - ${drinky.strMeasure3}</li>
            <li>${drinky.strIngredient4} - ${drinky.strMeasure4}</li>
            <li>${drinky.strIngredient5} - ${drinky.strMeasure5}</li>
            <li>${drinky.strIngredient6} - ${drinky.strMeasure6}</li>
            <li>${drinky.strIngredient7} - ${drinky.strMeasure7}</li>
            <li>${drinky.strIngredient8} - ${drinky.strMeasure8}</li>
        </ul>

        <p>${drinky.strInstructions}<p>
        `
    })
    chosenDrink.innerHTML = thisDrink.join('')
}







randomDrink.addEventListener('click', function() {
    async function getRandom() {
        let url = 'https://www.thecocktaildb.com/api/json/v2/9973533/random.php'
        let response = await fetch(url)
        let drink = await response.json()
        let randomDrinks = drink.drinks
        const allDrinks = randomDrinks.map(function(drinky) {
            return `
                <a href='${drinky.idDrink}'><p>${drinky.strDrink}</p></a>
                <img src="${drinky.strDrinkThumb}">
            `
        })
        chosenDrink.innerHTML = allDrinks.join('')
    }
    getRandom()
})


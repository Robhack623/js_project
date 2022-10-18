
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
    const thisDrink = thisDrinks.map(function(drinky) {
        return `
        <h2>${drinky.strDrink}</h2>
        <img src="${drinky.strDrinkThumb}">
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
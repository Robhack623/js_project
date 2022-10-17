
const chooseDrink = document.getElementById('chooseDrink');
const chooseDrink1 = document.getElementById('chooseDrink1');

chooseDrink.addEventListener('change', function() {
    console.log('You selected: ', this.value);
    passValue(this.value)
});


async function passValue(drinker) {
    let url = `https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=${drinker}`
    console.log(url)
    let response = await fetch(url)
    let drink = await response.json()
    let someDrinks = drink.drinks
    
    console.log(someDrinks)
    }
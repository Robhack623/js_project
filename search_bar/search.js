const drinksUL = document.getElementById('drinksUL')
const searchBar = document.getElementById('searchBar')
const letter = document.getElementById('letter')
const letterA = document.getElementById("letterA")


let bevs =[]

console.log(bevs)
searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value;
    const filteredBevs = bevs.filter((result) => {
        return ( 
            result.strDrink.includes(searchString) 
        );
    });
   console.log(filteredBevs)
})




const loadBevs = async () => {
    const url = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=a"
    let response = await fetch(url)
    bevs = await response.json()
    displayBevs(bevs)
}

const displayBevs = () => {
    let drinks = bevs.drinks
    const htmlString = drinks
        .map((result) => {
        return`
        <h4>${result.strDrink}</h4>
        `;
    })
        .join('');
        letter.innerHTML = htmlString;
};

loadBevs();
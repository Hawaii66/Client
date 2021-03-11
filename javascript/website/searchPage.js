const SearchInputForm = document.querySelector("#SearchInput");

/* PIZZA INFO

Name of pizza = string
Max price = 10 <-> 100 kr
Ingridients = []

*/

SearchInputForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Search");
    const pizzaFormData = new FormData(SearchInputForm);
    const name = pizzaFormData.get("SearchInputName").toString();
    const maxPrice = pizzaFormData.get("SearchInputMaxPrice");
    ingridients = GetIngridients(SearchInputForm);
    toSend = {
        name,
        maxPrice,
        ingridients
    }
    console.log(toSend);
    SearchForPizzas(toSend, (result) => {
        console.log(result);
    })
});

function GetIngridients(parent) {
    let ingridients = [];
    stillGoing = true;
    index = 1;
    stopCount = 0;
    while (stillGoing) {
        const Ingridient = parent.querySelector(".Ingridients").querySelector("#Ingridient" + index.toString());
        if (isNull(Ingridient)) { break; }
        const checkboxValue = Ingridient.querySelector("input").checked;
        const name = Ingridient.querySelector("h4").textContent;
        const ingridient = {
            name,
            checkboxValue
        }
        ingridients.push(ingridient)
        index += 1;
        stopCount += 1;
        if (stopCount > 100) {
            console.log("ERROR");
            return [];
        }
    }
    return ingridients;
}

function isNull(obj) {
    if (obj === null) {
        return true;
    }
    return false;
}

function test1(test) {
    console.log(test);
}

function MoneySliderChange() {
    const slider = document.querySelector("#SearchInputMaxPrice");
    const name = document.querySelector("#sliderPriceName");
    name.textContent = "Max price: " + slider.value + " kr";
}
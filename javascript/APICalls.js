const localhost = "http://localhost:5000/"
const websiteURL = "";
const MAIN_URL = localhost
const GetPizzasWithOptions = MAIN_URL + "SearchPizzas";

function SearchForPizzas(searchOptions, callback) {
    console.log(searchOptions);
    fetch(GetPizzasWithOptions, {
            method: "POST",
            body: JSON.stringify(searchOptions),
            headers: {
                "content-type": "application/json"
            }
        }).then(res => res.json())
        .then(k => {
            console.log(k);
        });
}
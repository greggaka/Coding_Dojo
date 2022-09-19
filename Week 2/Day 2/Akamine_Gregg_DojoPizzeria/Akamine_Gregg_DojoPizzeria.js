function pizzaOven (crustType, sauceType, cheeses, toppings) {
    let pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

let pizza1 = pizzaOven ("deep dish", "traditional", ["mozarella"], ["pepperoni", "sausage"]);
console.log ("pizza1", pizza1);

let pizza2 = pizzaOven ("hand tossed", "marinara", ["mozerella", "feta"], ["mushrooms", "olives", "onions"]);
console.log ("pizza2", pizza2);

let pizza3 = pizzaOven ("thin crust", "marinara", ["mozerella, brie"], ["pepperoni", "mushrooms", "olives", "peppers", "sausage", "onions"]);
console.log ("pizza3", pizza3);

let pizza4 = pizzaOven ("stuffed crust", "pesto and olive oil", ["mozerella"], ["spinach", "garlic", "tomatoes"]);
console.log("pizza4", pizza4);
var computer = {
    brand: "HP",
    model: "HP 15s ",
    ram: 8,
    processor: "intel i5",
    memory: 512,
    price: "62K"
}

// console.log(computer);


console.log(computer.brand);  // to see single property


var computerPrice = computer.price;  // set variable also posible


console.log(computerPrice);

// change property value 

computer.price = 22000;

console.log(computer);


// different ways to change object properties 

computer.price = 23000;
computer["price"] = 24000;

var computerPrice = price;
computer[computerPrice] = 25999;
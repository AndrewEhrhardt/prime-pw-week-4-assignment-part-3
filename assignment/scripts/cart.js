console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem(newItem) {
  basket.push(newItem);
  return true;
}

let i = 0;

function listItems(){
  while (i < basket.length){
    console.log(basket[i]);
    i++;
  }
}



console.log("Adding pants to the basket, should return true:", addItem("Pants"));
console.log("Adding shirt to the basket, should return true:", addItem("Shirt"));
console.log("Adding shoes to the basket, should return true:", addItem("Shoes"));

//console.log(basket);


console.log('Basket now contains:');
listItems();


function empty(){
  basket = [];
}

empty()
console.log(basket);

console.log("Adding pants to the basket, should return true:", addItem("Pants"));
console.log("Adding shirt to the basket, should return true:", addItem("Shirt"));
console.log("Adding shoes to the basket, should return true:", addItem("Shoes"));
console.log("Adding pants to the basket, should return true:", addItem("Socks"));
console.log("Adding shirt to the basket, should return true:", addItem("Hat"));


const maxItems = 5;

function isFull() {
  return (basket.length <= maxItems ? true : false);
}

console.log(isFull());

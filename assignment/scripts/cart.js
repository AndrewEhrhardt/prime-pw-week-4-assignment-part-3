console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;

function addItem(newItem) {
  if(isFull()){
    return false;
  } else {
    basket.push(newItem);
    return true;
  }
}

function listItems(){
  let i = 0;
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

addItem("Pants");
addItem("Shirt");
addItem("Shoes");
addItem("Socks");

console.log(basket.length)

function isFull() {
  return (basket.length >= maxItems);
}
//I'd orignally completed the above function using an if else statement, however just using
//a comparision seems to work fine, is this a better/more efficent way of solving the problem?

console.log(isFull());
console.log(addItem("Hat"));

listItems();

function removeItem(item){
  if (basket.indexOf(item) >= 0){
    basket.splice(basket.indexOf(item), 1)
    return item;
  } else {
    return "null";
  }
}

console.log(removeItem("Hat"));
listItems();
console.log(removeItem("Scarf"))

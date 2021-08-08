console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


//Variables must be declared before being used in any functions
let basket = [];
const maxItems = 5;


function addItem(newItem) {
  if(isFull()){ //isFull() will return true if the number of items is equal to or more than variable maxItems
    return false; //false is returned to indicate more items cannot be added
  }
  else {
    basket.push(newItem); //if isFull() returned false (meaning there is less than the max number of items), the newItem is added to basket
    return true; //function also returns true to confirm the item was added
  }
}

function listItems(){
  let i = 0; //Variable is declared locally so the function is reusable (otherwise "i" would permanantly increase after the first time the funciton is used)
  while (i < basket.length){ //While "i" is less than the number of items in the array "basket" run code below
    console.log(basket[i]); //console.log the "i" index of basket
    i++;//increase the value of "i" by one
  }
}

console.log("Adding pants to the basket, should return true:", addItem("Pants")); //Testing the addItem() function
console.log("Adding shirt to the basket, should return true:", addItem("Shirt"));
console.log("Adding shoes to the basket, should return true:", addItem("Shoes"));


console.log('Basket now contains:');
listItems(); //testing the list item function


console.log(basket)
console.log("what does the variable basket contain now:", basket)
function empty(){
  basket = []; //Simply sets the array "basket" to an empty array
}

empty(); //Testing function
console.log("The empty() function was just used, variable 'basket' should now just contain an empty array: ", basket);

addItem("Pants");//Adding items back into the array for further testing
addItem("Shirt");
addItem("Shoes");
addItem("Socks");

function isFull() {
  return (basket.length >= maxItems); //Checks if there are more items in "basket" than the maxItems
}
//I'd orignally completed the above function using an if else statement, however just using
//a comparision seems to work fine, is this a better/more efficent way of solving the problem?

console.log("Basket has less than 5 items, so isFull() should return false:", isFull());
console.log("Adding an item to the basket, this should return true becuase there is room for the item:" , addItem("Hat"));
console.log("Adding one more item to the basket, the basket is full so this should return false:" , addItem("Hat"));

function removeItem(item){
  if (basket.indexOf(item) >= 0){ //Array.indexOf() will return -1 if the item is not in the array, so this confirms the item is in the list
    basket.splice(basket.indexOf(item), 1) //Array.splice() is combined with Array.indexof() to select and remove the correct item
    return item; //That item is then returned
  }
    return "null"; //If Array.indexOf() returns a "-1" the code above is skipped and null is returned
}

console.log("Using the removeItem() function to remove 'Hat', function should return 'Hat':", removeItem("Hat")); //Testing removeItem() function
console.log("Using the removeItem() function to attempt to remove 'Scarf', function should return null:", removeItem("Scarf"));
console.log("Using the removeItem() function to attempt to remove 'Hat', function should return null as 'Hat' was just removed:", removeItem("Hat"));
console.log("Basket should now contain Pants Shirt Shoes and Socks:");
listItems();

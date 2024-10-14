// Rest operator real world example
function makeGroceryList(person, ...items) {
    console.log(`${person}'s Grocery List:`);
    
    if (items.length === 0) {
      console.log("No items in the list.");
    } else {
      console.log(items);
    }
  }
  
  makeGroceryList('Ayesha', 'Milk', 'Eggs', 'Bread', 'Butter');
  makeGroceryList('Imran');



//   Spread operator real world example

function mergeShoppingLists(list1, list2) {
    const combinedList = [...list1, ...list2];
    console.log("Combined Grocery List:", combinedList);
}
const myList = ['Milk', 'Bread', 'Eggs'];
const friendList = ['Butter', 'Cheese', 'Juice'];
  
mergeShoppingLists(myList, friendList);



//   functional composition real world example

function applySeasonalDiscount(price) {
    const discount = 0.1; // 10% seasonal discount
    return price - (price * discount);
  }
  
  function applyCouponDiscount(price) {
    const discount = 0.05; // 5% coupon discount
    return price - (price * discount);
  }
  
  function calculateFinalPrice(initialPrice) {
    let price = initialPrice;
    price = applySeasonalDiscount(price);
    price = applyCouponDiscount(price);
    
    return price;
  }
  
  
  const initialPrice = 200;
  const finalPrice = calculateFinalPrice(initialPrice);
  
  console.log(`The final price of the item is $${finalPrice}`);
  


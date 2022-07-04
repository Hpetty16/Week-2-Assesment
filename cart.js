///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]


//CODE HERE

 const summedPrice = cart.reduce(foodPrice,0)

function foodPrice(accumulator,value){
    return accumulator+value.price
}
 console.log(summedPrice)



//  const summedPrice = cartTwo.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// })

// console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = (cartToatal, couponValue, tax) => {
   let cartToatalAfterTax = cartToatal + (cartToatal*tax)
   let finalCost = cartToatalAfterTax - couponValue
    return finalCost
}
  
//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    The four properties that I would choose would be:
    1. Name
    2. Price
    3. Item
    4. Delete 

    The reason why I chose those four properties for the cart is because the  restaurant would need the appropriate name of the customer in order to ensure the right customer receives their order. The price will show the total of the cart. Item shows the item that was added  into the cart. Quantity can show how many of a particular item  a person may want.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
let customer = {
    name:  Haywood,
    price: 32.97,
    item: `Big Kahuna Cheesesteak`,
    quantity: 2
}


let prices = []
function addToCart(price){
    // alert("Book Added Successfully")   
    prices.push(price)
    console.log(prices)
    const bill = document.getElementById("billing")
    bill.innerHTML += `
    price : ₹${price} <br>
    `
}
function bill(){
    let sum=0;
    for(i of prices) sum+=i;
    const bill = document.getElementById("bill")
    bill.innerHTML=`<hr> Final Price: ₹${sum}`

}
function register(){
    // waitfordelay(6000)
    setTimeout(()=>{
         console.log("Registered..")
    }, 7000)
}
function login(){
    // waitfordelay(5000)
    setTimeout(()=>{
        console.log("User Logged in..")
    },5000)
}
function fetchData(){
    // waitfordelay(3000)
    setTimeout(()=>{
         console.log("Data fetched..")
    },3000)
}
function DisplayData(){
    // waitfordelay(6000)
    setTimeout(()=>{
         console.log("Data Displayed..")
    },8000)
}
// function waitfordelay(delay){
//     const mt = Date.now() + delay;
//     while(Date.now() < mt){

//     }
// }
register();
login();
fetchData();
DisplayData();
console.log("Calling another app..")

//Solving issue of asynchronous: 1. Promises 2. Callback 3. Async/Await

function register(){
    return new Promise((resolve,reject)=>{      
          setTimeout(()=>{
         console.log("Registered..")
         resolve()
    }, 7000)
    })
}
function login(){
   return new Promise((resolve,reject)=>{
     setTimeout(()=>{
        console.log("User Logged in..")
        resolve()
    },5000)
   })
    
}
function fetchData(){
   return new Promise((resolve, reject)=>{
     setTimeout(()=>{
         console.log("Data fetched..")
         resolve()
    },3000)
   })
}
function DisplayData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
         console.log("Data Displayed..")
         resolve()
    },8000)
    })
}

async function test(){
    try{
        await register();
        await login();
        await fetchData();
        await DisplayData();
    }
    catch(err){
        console.log("Error Ocurred..", err)
    }
}
test();

console.log("Calling another app..")


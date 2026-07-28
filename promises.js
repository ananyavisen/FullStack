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
    register().then(login).then(fetchData).then(DisplayData).catch((err)=>{
        console.log("An Error ocurred...",err);
    })
console.log("Calling another app..")


import Book from "./book"

const bookData = [
    {image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsiix0gdWY_Cp8e69K9Q7oD9luodHRqDDabwoJII715w&s=10", title: "ReactJS", price: "₹465" },
    {image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxf1kOGA1WfxBxUmIkbM7nE-TP7rpUkKNL5nOMlLNItg&s=10", title: "NodeJS", price: "₹500" },
    {image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgS-IRlKHegMxrslY9XVulixMgx1PyT1tWO6ajR--pcA&s=10", title: "ExpressJS", price: "₹385" },
];


function App(){
    const bookstore = bookData.map((b)=>{
       return Book(b)
    })
    const div= React.createElement("div",{className:"bookstore", style:{
        display:"flex", gap: "5px"
    }},bookstore)
    return div;
}

export default App;
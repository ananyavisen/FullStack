
function addParagraph(){
    const para = document.createElement("p");
    para.innerText = "This is new paragraph";
    para.style.color = "blue";
    const parent = document.getElementById("root");
    parent.appendChild(para);
}
function removeParagraph(){
    const para = document.querySelector("p");
    const parent = document.getElementById("root");
    parent.removeChild(para)

}
function removeAllParagraph(){
    const para = document.querySelectorAll("p");
    const parent = document.getElementById("root");
    para.forEach((i)=>{
         parent.removeChild(i)
    })
    

}
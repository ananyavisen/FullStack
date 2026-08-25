function Book(props){
    const image = React.createElement("img",
        {src: props.image, width:"140px",height:"200px"},null);
    const title = React.createElement("h2",{style:{color:"red"}}, props.title );
    const price = React.createElement("p",{style:{color:"green"}},props.price);
    const btn = React.createElement("button",{style:{color:"blue"}},"Add To Cart");
    const div = React.createElement("div",{className:"book", style:
        {width: "250px", height:"350px", padding:"10px", borderRadius:"12px", backgroundColor:"beige"}}, [image,title,price,btn]);
    return div;
}
export default Book;
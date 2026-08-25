function sum(...num){
    let s=0;
    for(let x of num) s=s+x;
    return s;
}
function add(...num){
    const sum = num.reduce((s,i)=>(s+i))
    return sum
}

export  {sum,add};

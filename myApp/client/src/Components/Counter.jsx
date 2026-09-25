import { useState } from "react";

const Counter = () => {
    const [count,setCount] = useState(0);
    const increment = () =>{
        console.log("count=", count+1);
        setCount(count+1)
        return count;
    }
    const decrement = () =>{
        console.log("count=", count-1);
        setCount(count-1)
        return count;
    }
  return (
    <>
    <h1>Counter</h1>
    <div className='counter'>
        <button onClick={decrement}>-</button>
        <div className='id'>{count}</div>
        <button onClick={increment}>+</button>
    </div>
    </>
  )
}

export default Counter
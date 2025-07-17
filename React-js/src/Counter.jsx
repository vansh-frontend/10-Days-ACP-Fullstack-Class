import React from 'react'

const Counter = () => {
    const [count, setCount] = React.useState(0);    
  return (
    <div className="counter-section">
    <strong>Counter: useState</strong>
    <h1>Counter: {count}</h1>   
    <button onClick={() => setCount(count + 1)}>Increment</button>
    <button onClick={() => setCount(count - 1)}>Decrement</button>
    <button onClick={() => setCount(0)}>Reset</button>
  </div>
  )
}

export default Counter
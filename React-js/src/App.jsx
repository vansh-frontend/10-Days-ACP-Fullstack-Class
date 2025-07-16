// const App = () =>{
//   return (
//     <div>
//       <h1>Hello i am Vansh 👋</h1>
//       <p>I am Frontend Dev💻</p>
//       <button>Resume📃</button>
//     </div>
//   );
// }
//

import { useState } from 'react';
const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => 
        {
          if(count === 10) return;
          setCount(count + 1);
        
        }}> + </button>

      <button onClick={()=> 
      {if (count > 0){
        setCount(count - 1);
      }}}> - </button>


    </div>
  );
};

export default App;

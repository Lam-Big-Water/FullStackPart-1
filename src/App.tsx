import { useState } from "react";

const App = () => {
  
  const [counter, setCounter] = useState(0);

  const [clickCounter, setClickCounter] = useState(0);

  const handleClick = () => setClickCounter(clickCounter + 1);

  setTimeout(() => setCounter(counter + 1), 1000);

  return (
    <div>
      SetTimeOut: {counter}
      Click: {clickCounter}
      <button onClick={handleClick}>+1</button>
    </div>

  )
}

export default App
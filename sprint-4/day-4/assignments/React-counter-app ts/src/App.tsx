import React from "react";
function App() {
  return (
    <div className="App">
      <h1 data-testid="counter">{/* Show counter here  */}</h1>
      <button data-testid="increment">Increment</button>
      <button data-testid="decrement">Decrement</button>
      <button data-testid="increment5">Increment 5 times</button>
      <button data-testid="decrement5">Decrement 5 times</button>
    </div>
  );
}

export default App;

// Old code from the project initialisation:

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


import { useState } from "react";
import AddItemForm from "./components/AddItemForm";
import WishlistItem from "./components/WishlistItem";
import "./App.css";

function App() {
  const [items, setItems] = useState<string[]>([
    "New Headphones",
    "Fancy Coffee Machine",
    "Learn React Fast"
  ]);

  const addItem = (item: string) => {
    if (item.trim()) setItems([...items, item]);
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const clearAll = () => setItems([]);

  return (
    <div className="app">
      <h1>My Awesome Wishlist</h1>
      <AddItemForm addItem={addItem} />
      <ul>
        {items.map((item, idx) => (
          <WishlistItem
            key={idx}
            name={item}
            onRemove={() => removeItem(idx)}
          />
        ))}
      </ul>
      <button className="clear-btn" onClick={clearAll}>Clear All</button>
    </div>
  );
}

export default App;

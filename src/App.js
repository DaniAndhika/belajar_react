// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import { useState, useEffect } from "react"
import ProductList from "./components/ProductList";
 
function App() {
  const [products, setProducts] = useState([
    {id: 1, title: 'Product 1', price: 899},
    {id: 2, title: 'Product 2', price: 982},
    {id: 3, title: 'Product 3', price: 322},
    {id: 4, title: 'Product 4', price: 763},
    {id: 5, title: 'Product 5', price: 389}
  ]);

  const [name, setName] = useState('Dani');
  
  const deleteProduct = (productId) => {
    const newProducts = products.filter(product => product.id !== productId);
    setProducts(newProducts);
  }
  useEffect(() => {
    console.log('Use Effect Running');
  }, [name]);
 
  return (
    <div>
      <ProductList products={ products } deleteProduct={ deleteProduct }/>
      <button onClick={ () => setName('John') }>Change Name</button>
      <p>Name: { name }</p>
    </div>
  );
}
 
export default App;
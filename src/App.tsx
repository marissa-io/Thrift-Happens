import "./App.css";
import ThriftHappens from "./Components/ThriftHappens";
import { products } from "./data/data";
import NavBar from "./Components/NavBar";


export default function App(){
  return (
  <>
  <NavBar />


<div id="shop">
    <ThriftHappens data={products}/>
    </div>
  </>
  );
}
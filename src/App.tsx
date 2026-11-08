import "./App.css";
import ThriftHappens from "./Components/ThriftHappens";
import { products } from "./data/data";

export default function App(){
  return (
  <>
    <ThriftHappens data={products}/>
  </>
  );
}
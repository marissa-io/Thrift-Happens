import "./App.css";
import ThriftHappens from "./Components/ThriftHappens";
import { products } from "./data/data";
import NavBar from "./Components/NavBar";


export default function App(){
  return (
  <>
  <NavBar />

<div>
  <h1>Welcome to Thrift Happens!</h1>
</div>

<div id="shop">
    <ThriftHappens data={products}/>
    </div>
  </>
  );
}
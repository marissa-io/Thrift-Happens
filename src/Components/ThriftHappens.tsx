import { useState } from "react";
import type { ClothingProduct } from "../data/data";
import ItemsContainer from "./ItemsContainer"
import CheckoutContainer from "./CheckoutContainer";

interface ClothingProductData{
    data: ClothingProduct[];
}

export interface ItemsContainerProps{
    products: CheckoutItem[];
    handleChangeQuantity: (id: number, delta: number) => void; 
    handleAddToCart: (cartItem: CartItem) => void;
}

export interface CheckoutItem{
    id: number;
    name: string;
    image: string;
    fit: string;
    category: string;
    color: string;
    description: string;
    size: string;
    price: number;
    quantity: number; //remaining stock
    itemQuantity: number; // selected
}

export interface CartItem{
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number; //amount in cart
  total: number;
}

export default function ThriftHappens({ data }: ClothingProductData){
  
    const [items, setItems] = useState<CheckoutItem[]>(()=>
    data.map((product)=> ({
        id: product.id,
        name: product.name,
        image: product.image,
    fit: product.fit,
    category: product.category,
    color: product.color,
    description: product.description,
    size: product.size,
    price: product.price,
    quantity: product.quantity,
    itemQuantity: product.itemQuantity
    })),
    );

    //Start with empty cart
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

function handleChangeQuantity(id: number, delta: number) {
  setItems((prevData) =>
    prevData.map((item) =>
      item.id === id
        ? {
            ...item,
            itemQuantity: Math.min(
              item.quantity,
              Math.max(item.itemQuantity + delta, 0)
            ),
          }
        : item
    )
  );
}

//start cart at empty

function handleAddToCart(cartItem: CartItem){
const selectedItem = items.find((item) => item.id === cartItem.id);

if(!selectedItem || cartItem.quantity <= 0 || cartItem.quantity > selectedItem.quantity) return;
setCartItems((prevItems)=>{
  const isExisting = prevItems.find((item)=> item.id === cartItem.id);

if(isExisting) {
  return prevItems.map((item)=>
  item.id === cartItem.id 
? {...item,
  quantity: item.quantity + cartItem.quantity,
  total: item.total + cartItem.total
}
:item
);
}
return [...prevItems, cartItem];
})

setItems((prevData)=>
prevData.map((item)=>
item.id === cartItem.id
?{
  ...item,
  quantity: item.quantity -cartItem.quantity,
  itemQuantity: 0
}
:item
))
}

//Empties cart and restores each products quantity.
function handleEmptyCart(){
setItems((prevData) =>
prevData.map((item)=>{
  const cartItem= cartItems.find((cart)=> cart.id === item.id);
  return cartItem
  ?{...item, quantity: item.quantity + cartItem.quantity}
  :item;
}))

  setCartItems([]);
}

//removes one item from checkout and restores stock belonging to the removed item.
function handleRemoveFromCart (id: number) {
const removedItem = cartItems.find((item)=> item.id === id);
if (!removedItem) return;
setItems((prevData)=> prevData.map((item)=>
item.id === id
?{...item, quantity: item.quantity + removedItem.quantity}
:item
))
  setCartItems((prevItems)=>{
    return prevItems.filter((item)=> item.id !== id);
  })
}
       
    return ( 
    <>
    <ItemsContainer
     products={items} 
     handleChangeQuantity={handleChangeQuantity}
     handleAddToCart={handleAddToCart}
     />
     <div id="checkout">
     <CheckoutContainer 
     checkoutData={cartItems}
     handleEmptyCart={handleEmptyCart}
    handleRemoveFromCart={handleRemoveFromCart}
 />
 </div>
</>
);

}
import { useState } from "react";
import type { ClothingProduct } from "../data/data";
import ItemsContainer from "./ItemsContainer"

interface ClothingProductData{
    data: ClothingProduct[];
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
       
    return ( <ItemsContainer
     products={items} 
     handleChangeQuantity={handleChangeQuantity}/>
);

}
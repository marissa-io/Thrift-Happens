import type { CheckoutItem } from "./ThriftHappens";
import ItemCard from "./ItemCard";

interface ItemsContainerProps{
    products: CheckoutItem[];
    handleChangeQuantity: (id: number, delta: number) => void; 
}

export default function ItemsContainer({
    products,
    handleChangeQuantity,
}: ItemsContainerProps){
return (
    <div>
        {products.map((product) =>(
    <ItemCard 
    key={product.id}
    {...product}
    handleChangeQuantity={(delta: number) =>
        handleChangeQuantity(product.id, delta)} 
    />
        ))}
    </div>
);
}
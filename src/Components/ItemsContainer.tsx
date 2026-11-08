import type { ItemsContainerProps } from "./ThriftHappens";
import ItemCard from "./ItemCard";


export default function ItemsContainer({
    products,
    handleChangeQuantity,
    handleAddToCart,
}: ItemsContainerProps){
return (
    <div>
        {products.map((product) =>(
    <ItemCard 
    key={product.id}
    {...product}
    handleChangeQuantity={(delta: number) =>
        handleChangeQuantity(product.id, delta)} 
        handleAddToCart={handleAddToCart}
    />
        ))}
    </div>
);
}
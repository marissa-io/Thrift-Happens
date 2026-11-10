import type { CartItem } from "./ThriftHappens";

interface CheckoutCardProps extends CartItem{
handleRemoveFromCart: (id: number) => void;
}

export default function CheckoutCard({
id,
image, 
name,
price, //the unit price of the item
quantity, //number of item purchased
total, //line subtotal
handleRemoveFromCart,
}: CheckoutCardProps) {

    //TODO: Show empty when applicable
    return (
    <div>
        <img src={image} alt={name}></img>
        <p>{name}</p>
        <p>Price: ${price.toFixed(2)}</p>
        <p>Quantity: {quantity}</p>
        <p>Subtotal: ${total.toFixed(2)}</p>
<button onClick={()=> handleRemoveFromCart(id)}>Delete</button>
    </div>
    );
}
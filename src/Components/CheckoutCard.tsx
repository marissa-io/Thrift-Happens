import type { CartItem } from "./ThriftHappens";

interface CheckoutCardProps extends CartItem{

}

export default function CheckoutCard({
image, 
name,
price, //the unit price of the item
quantity, //number of item purchased
total, //line subtotal
}: CheckoutCardProps) {

    //TODO: Show empty when applicable
    return (
    <div>
        <img src={image} alt={name}></img>
        <p>{name}</p>
        <p>Price: {price.toFixed(2)}</p>
        <p>Quantity: ${quantity}</p>
        <p>Subtotal: ${total.toFixed(2)}</p>
        {/* remove from cart button will go here */}

    </div>
    );
}
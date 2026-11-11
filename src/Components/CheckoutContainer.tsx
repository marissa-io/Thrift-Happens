import type { CartItem } from "./ThriftHappens";
import CheckoutCard from "./CheckoutCard";


interface CheckoutContainerProps{
    checkoutData: CartItem[];
    handleEmptyCart: ()=> void;
    handleRemoveFromCart: (id: number) => void;
}

export default function CheckoutContainer({
    checkoutData,
    handleEmptyCart,
    handleRemoveFromCart
}: CheckoutContainerProps){

    return (
        <div>
            <h2 id="checkoutTitle">Checkout</h2>
        <div className="checkoutItems">
            {/* display each item in the checkout currently */}
            {checkoutData.map((item)=>(
                <CheckoutCard key={item.id}
                {...item}
                handleRemoveFromCart={handleRemoveFromCart}
                />
            ))}
</div>
            <h2>
        {/* calculate total price of cart items */}
                {checkoutData.length > 0
                ?`Total: $${checkoutData.reduce((acc,item)=> acc + item.total, 0).toFixed(2)}`
            :"Cart Is Empty"}
            </h2>
            <button onClick={()=> handleEmptyCart()}>Empty Cart</button>
        </div>
    );
}
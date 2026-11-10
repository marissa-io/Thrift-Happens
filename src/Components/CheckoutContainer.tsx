import type { CartItem } from "./ThriftHappens";
import CheckoutCard from "./CheckoutCard";

interface CheckoutContainerProps{
    checkoutData: CartItem[];
}

export default function CheckoutContainer({
    checkoutData,
}: CheckoutContainerProps){

    return (
        <div>
            {checkoutData.map((item)=>(
                <CheckoutCard key={item.id}
                {...item}
                />
            ))}

            <h2>
                {checkoutData.length > 0
                ?`Total: $${checkoutData.reduce((acc,item)=> acc + item.total, 0).toFixed(2)}`
            :"Cart Is Empty"}
            </h2>
            {/* Add empty cart button */}
        </div>
    );
}
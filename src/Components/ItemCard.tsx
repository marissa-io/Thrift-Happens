import type { CheckoutItem, CartItem } from "./ThriftHappens";

interface ItemCardProps extends CheckoutItem{
    handleChangeQuantity: (delta: number) => void;
    handleAddToCart: (cartItem: CartItem) => void;
    
}

export default function ItemCard({
    id,
    name,
    image,
    fit,
    category,
    color,
    description,
    size,
    price,
    quantity,
    itemQuantity,
    handleChangeQuantity,
    handleAddToCart,
}: ItemCardProps){

    //Variable to check if quantity is zero
    const outOfStock = quantity === 0;
    return (
        <div>
            <img src={image} alt={name} />
            <h3>{name}</h3>
         <p>{description}</p>

            <span> {fit} | </span>
            <span> {category} | </span>
            <span> {color} | </span>
            <span> Size: {size} </span>
            <p>${price.toFixed(2)}</p>
            {/* if true, mark as out of stock other wise display quantity */}
            <p>{outOfStock ? "Out of Stock" : `In Stock: ${quantity}`}</p>

{/* increase or decrease quantity by one, without exceeding available stock*/}
            <button onClick={() => handleChangeQuantity(-1)}
                disabled={outOfStock || itemQuantity === 0}
                >{" - "}
                </button>
            <span>{itemQuantity}</span> 
            <button onClick={() => handleChangeQuantity(1)}
            disabled={outOfStock || itemQuantity >= quantity}
>
    {" + "}
    </button>

{/* add selected quantity to cart and calculate subtotal */}
    <button
    disabled={itemQuantity === 0}
    onClick={()=> handleAddToCart({
        id,
        name,
        image,
        price,
        quantity: itemQuantity,
        total: price * itemQuantity,
    })}>Add to Cart</button>

        </div>
    );
}

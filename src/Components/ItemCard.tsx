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
    const outOfStock = quantity === 0;
    return (
        <div>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            {/* TODO find a better format for these */}
            <p>{fit}</p>
            <p>{category}</p>
            <p>{color}</p>
            <p>{description}</p>
            <p>Size: {size}</p>
            <p>${price.toFixed(2)}</p>
            <p>{outOfStock ? "Out of Stock" : `In Stock: ${quantity}`}</p>


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

    <button
    disabled={itemQuantity === 0}
    onClick={()=> handleAddToCart({
        id,
        name,
        price,
        quantity: itemQuantity,
        total: price * itemQuantity,
    })}>Add to Cart</button>

        </div>
    );
}

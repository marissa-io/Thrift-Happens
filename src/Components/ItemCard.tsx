
interface ItemCardProps{
    id: number;
    name: string;
    image: string;
    fit: string;
    category: string;
    color: string;
    description: string;
    size: string;
    price: number;
    quantity: number
    itemQuantity: number;
    handleChangeQuantity: (delta: number) => void;
}

export default function ItemCard({
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

        </div>
    );
}

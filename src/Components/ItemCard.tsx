import type { ClothingProduct } from "../data/data";

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
    quantity: number;
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
}: ItemCardProps){
    return (
        <div>
            <img src={image} />
            <h3>{name}</h3>
            {/* TODO find a better format for these */}
            <p>{fit}</p>
            <p>{category}</p>
            <p>{color}</p>
            <p>{description}</p>
            <p>Size: {size}</p>
            <p>${price.toFixed(2)}</p>
            <p>In stock: {quantity}</p>
        </div>
    );
}

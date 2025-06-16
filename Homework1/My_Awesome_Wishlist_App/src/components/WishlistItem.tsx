type WishlistItemProps = {
    name: string;
    onRemove: () => void;
};

function WishlistItem({ name, onRemove }: WishlistItemProps) {
    return (
        <li className="wishlist-item">
            <span>{name}</span>
            <button className="remove-btn" onClick={onRemove}>Remove</button>
        </li>
    );
}

export default WishlistItem;

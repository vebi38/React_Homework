import { useState } from "react";

type AddItemFormProps = {
    addItem: (item: string) => void;
};

function AddItemForm({ addItem }: AddItemFormProps) {
    const [input, setInput] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addItem(input);
        setInput("");
    };

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <input
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Add new item"
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default AddItemForm;

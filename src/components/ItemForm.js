import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [newItem, setNewItem] = useState({
    name: "",
    category: "produce",
  });

  const onItemChange = (e) => {
    setNewItem({
      ...newItem,
      [e.target.name]: e.target.value,
     
    });
    
  };

  const secondNewItem  = {
    id: uuid(),
    name: newItem.name,
    category: newItem.category,
  };

  return (
    <form 
      className="NewItem"
      onSubmit={(e) => {
        e.preventDefault();
        onItemFormSubmit(secondNewItem)
        setNewItem({
          name: "",
          category: "produce",
        });
      }}
        
      >
      <label>
        Name:  
        <input 
          onChange={onItemChange}
          value={newItem.name} 
          type="text" 
          name="name"
          />
      </label>

      <label>
        Category:
        <select 
          onChange={onItemChange}
          value={newItem.category}
          name="category"
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;

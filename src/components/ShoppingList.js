import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [listItem, setListItem] = useState(items);

  const onItemFormSubmit = (newItem) => {
    setListItem([...listItem, newItem]);
  };

  const onSearchChange  = (e) => {
    setSearch(e.target.value);
  }

  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value);
  };

  const itemsToDisplay = listItem.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  const filteredItemsToDisplay = itemsToDisplay.filter((item) => {
   return item.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}
      />
      <Filter 
        onCategoryChange={handleCategoryChange} 
        onSearchChange={onSearchChange}
        search={search}
      />
      <ul className="Items">
        {filteredItemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

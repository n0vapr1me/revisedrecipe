import React from "react";

function Recipe({ recipe, deleteRecipe }) {
  const { name, cuisine, photo, ingredients, preparation } = recipe;

  const handleDelete = () => {
    deleteRecipe(name);
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{cuisine}</td>
      <td>
        <img src={photo} alt={name} />
      </td>
      <td className="content_td">
        <p>{ingredients}</p>
      </td>
      <td className="content_td">
        <p>{preparation}</p>
      </td>
      <td>
        <button name="delete" onClick={handleDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Recipe;
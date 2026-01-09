// src/components/IngredientList/IngredientList.jsx

const IngredientList = (props) => {
    return (
        <ul>
          {props.ingredients.map((ingredient) => (
            <li
              key={ingredient.name}
              style={{ backgroundColor: ingredient.color }}
            >
              <span>{ingredient.name}</span>
              <button onClick={() => props.addToBurger(ingredient)}>+</button>
            </li>
          ))}
        </ul>
      );
    };
export default IngredientList;

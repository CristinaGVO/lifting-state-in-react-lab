// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = (props) => {
    return (
        <ul>
          {props.ingredients.map((ingredient, index) => (
            <li
              key={`${ingredient.name}-${index}`}
              style={{ backgroundColor: ingredient.color }}
            >
              <span>{ingredient.name}</span>
              <button onClick={() => props.removeFromBurger(index)}>X</button>
            </li>
          ))}
        </ul>
      );
    };
    
export default BurgerStack;

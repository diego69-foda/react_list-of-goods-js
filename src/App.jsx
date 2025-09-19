import 'bulma/css/bulma.css';
import './App.scss';
import React, { useState } from 'react'; // Importing React library

// Array of goods received from a hypothetical server
export const goodsFromServer = [
  // List of various food items
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

// Main App component
export const App = () => {
  const [goods, setGoods] = useState([]);

  return (
    <div className="section content">
      <div className="buttons">
        {/* Button to sort items alphabetically */}
        <button type="button" className="button is-info is-light">
          Sort alphabetically
        </button>

        {/* Button to sort items by their length */}
        <button type="button" className="button is-success is-light">
          Sort by length
        </button>

        {/* Button to reverse the order of items */}
        <button type="button" className="button is-warning is-light">
          Reverse
        </button>

        {/* Button to reset the list to its initial state */}
        <button type="button" className="button is-danger is-light">
          Reset
        </button>
      </div>

      {/* Unordered list to display the goods */}
      <ul>
        <li data-cy="Good">{goods}</li>
      </ul>
    </div>
  );
};

import React from 'react';
import { data } from '../../../data';
const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  /**useState version 2 - i update 'newPeople' data
   * array using a previous state, i'll call it
   * 'oldPeople'
  */
  const removeItem = (id) => {
    setPeople((oldPeople) => {
    const newPeople = oldPeople.filter((person) => person.id !== id);
    return newPeople;

    });
  };
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button className='btn' onClick={() => setPeople([])}>
        clear items
      </button>
    </>
  );
};

export default UseStateArray;

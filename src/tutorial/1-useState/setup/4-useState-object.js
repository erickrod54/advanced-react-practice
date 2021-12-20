import React, { useState } from 'react';

/** useState object example version 1 -
 * the change for message property using
 * spread operator- */

const UseStateObject = () => {
  const [ person, setPerson ] = useState({ 
      name: 'Esxie', 
      age: 55,
      message: 'ramdom message' 
    });

  const ChangeMessage = () => {
    /**with spread operator i copy the properties
     * of the previous object and then i can modify
     * or add the object or property that i want 
     */
    setPerson({...person, message: 'Hello World'})
  } 
  
  return (
    <>
      <h2>useState object example</h2>
      <h4>{person.name}</h4>
      <h4>{person.age}</h4>
      <h4>{person.message}</h4>
    <button 
        className='btn' 
        onClick={ChangeMessage}>Change Message</button>
    </>
      );
};

export default UseStateObject;

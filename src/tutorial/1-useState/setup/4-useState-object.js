import React, { useState } from 'react';

/** useState object example version 2 -
 * the change for message property using
 * useState for individual elements- */

const UseStateObject = () => {
  /** 'person' is used when i don't set individual
   * values, in fact i can comment the object, and
   * will still working fine, also setName, 
   * and setAge, for demonstrate propuse
   *  i leave it*/
  const [ person, setPerson ] = useState({ 
      name: 'Esxie', 
      age: 55,
      message: 'ramdom message' 
    });

  /**i can set for individual values */
  const [name, setName] = useState('Esxie')
  const [age, setAge] = useState(55) 
  const [message, setMessage] = useState('ramdom message')

  const ChangeMessage = () => {
    //setPerson({...person, message: 'Hello World'})
    //In this version like i have the handler i can
    //change the message directly
    setMessage('Specific Message')
  } 
  
  return (
    <>
      <h2>useState object example</h2>
      {/**i use person right here, like person.name
       * cause i'm bringin everything from the object,
       * this particular case below is when i set for
       * individual values
       */}
      <h4>{name}</h4>
      <h4>{age}</h4>
      <h4>{message}</h4>
    <button 
        className='btn' 
        onClick={ChangeMessage}>Change Message</button>
    </>
      );
};

export default UseStateObject;

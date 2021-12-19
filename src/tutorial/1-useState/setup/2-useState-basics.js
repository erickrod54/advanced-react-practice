import React, { useState } from 'react';

const UseStateBasics = () => {

  const handleClick = () => {

    /** this way makes a toogle functionality*/
    if (text === 'ramdom title') {
      setText('Alohaa')
    } else {
      setText('ramdom title')
    }
  }
  /**useState hook, can be set to whatever data 
   * i need to render
   */
  const [text, setText] = useState('ramdom title')
  return (
    <>
     <h1>useState basic example</h1>
     <h2>{text}</h2>
    <button 
           type='button'
           className='btn'
           onClick={handleClick}
           >
             Change title
           </button>
    </> 
     );
};

export default UseStateBasics;

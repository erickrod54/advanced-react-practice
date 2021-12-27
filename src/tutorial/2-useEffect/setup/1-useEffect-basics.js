import React, { useState, useEffect } from 'react';
/**useEffect is the second most used hook for 
 * side-effects( any work outside of the component), 
 * - the cases where is use most could be:
 * 
 *  'changing document title', 
 *  'signing-up for suscriptions', 
 *  'fetching data', 
 *  'event listener'- 
 * 
 * */

// by default runs after every re-render
// cleanup function
// second parameter

/** useEffect version 2 'conditional useEffect' */
const UseEffectBasics = () => {

  /**i use the 'useState' value to manage the counter
   * state
   */
  const [value, setValue] = useState(0)

  useEffect(() => {
    console.log('call useEffect');
    /**the conditional goes inside useEffect*/
    if (value > 1) {
      document.title = `New Messages (${value})` 
    }
  });
  console.log('render component, renders twice cause react strict mode')
  return (
    <>  
      <h2>useEffect Basics</h2>
      <h1>{value}</h1>
      <button className='btn' 
              onClick={()=> setValue(value +1 )}
              >Click Me</button>
    </>
    );
};

export default UseEffectBasics;

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

/** this example is about 'changing document title' */
const UseEffectBasics = () => {

  /**i use the 'useState' value to manage the counter
   * state
   */
  const [value, setValue] = useState(0)
  useEffect(() => {
    console.log('call useEffect');
    /** Second - as i clicked already the side-effect
     * of 'New Message' as the title changes for the
     * counter value
    */
    document.title = `New Messages (${value})`
  });
  console.log('render component, renders twice cause react strict mode')
  return (
    <>  
      <h2>useEffect Basics</h2>
      <h1>{value}</h1>
      {/**First - when i click the component 
       * renders */}
      <button className='btn' 
              onClick={()=> setValue(value +1 )}
              >Click Me</button>
    </>
    );
};

export default UseEffectBasics;

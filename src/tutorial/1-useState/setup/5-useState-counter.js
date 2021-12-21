import React, { useState } from 'react';

/**useState version 1, is a counter that uses inline
 * function to decrease and increase and a reference 
 * handler to reset to the initial value
 */
const UseStateCounter = () => {
  /**to set up the counter, i set an 'initialValue',
   * variable, this can be whatever value i need
   */
  const initialValue = 0;

  /**destructure my counter in a 'value' and 
   * 'setValue' */
  const [ value, setValue ] = useState(initialValue);

  /**this handler make a reference to reset the value
   * when is called onClick
   */
  const resetValue = () =>{
    setValue(initialValue)
  }
  console.log('initial value:', initialValue)
  
  return (
    <>  
      <h1>useState counter example</h1>
      <section style={{margin:'4rem 0'}}>
        <h2>regular counter</h2>
          <h2>{value}</h2>
          {/**Increase and Decrease button can be
           * done also as reference handler, in this
           * case i done with inline function
           */}
            <button 
                className='btn' 
                onClick={()=>
                setValue(value -1)}>
                  Decrease</button>
                  {console.log('value:', value)}
            <button 
                className='btn' 
                onClick={()=>
                setValue(value + 1)}>
                  Increase</button>
            <button 
                className='btn' 
                onClick={()=>
                resetValue()}>
                  Reset</button>
      </section>
    </>  
      );
};

export default UseStateCounter;

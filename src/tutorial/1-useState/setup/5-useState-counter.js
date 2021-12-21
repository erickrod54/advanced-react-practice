import React, { useState } from 'react';

/**useState-counter version 2, is a counter 
 * that uses inline function to decrease and 
 * increase and a reference  handler to reset 
 * to the initial value (first version ) and 
 * a second counter that use functional
  * aproach inside the setTimeout() method to update 
  * the count
 */
const UseStateCounter = () => {
  
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

  /**this handler increase the value 2 seonds 
   * later -asynchronous- 
  */
  const complexIncrease = () => {
    setTimeout(() =>{
      setValue(value + 1)
    }, 2000);
  };
  
  return (
    <>  
      <h1>useState counter example</h1>
      <section style={{margin:'4rem 0'}}>
        <h2>regular counter</h2>
          <h2>{value}</h2>
          {/***/}
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
              <h2>More Complex Counter</h2>
              <h1>{value}</h1>
              <button 
                className='btn' 
                onClick={complexIncrease}>
                  Increase</button>
      </section>
    </>  
      );
};

export default UseStateCounter;

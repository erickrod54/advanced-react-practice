import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

/** 'ref' hook is an alternative for:
 *      
 *      --->use 'onChange' for JSX DOM nodes or 
 *          elements
 *      --->'controlled input' features 
 *      ---> using ref i can target nodes/elements and
 *           values
 * 
 *  useRefBasisc App version 1 - Features:
 *        -->Building Refs
 *        -->targeting DOM nodes/elements
 *        --> no re-rendering (no dependency array)
*/


const UseRefBasics = () => {

  /**this 'ref' is use to refers to a whole 'JSX'
   * element*/
  const refDivContainer = useRef(null);
  /**this ref is refering to  a input 'value'*/
  const refContainer = useRef(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    /**this console log will show the input value */  
    console.log(refContainer.current.value)
    /** this console log will show the 'JSX' element*/
    console.log(refDivContainer.current)
  }


  console.log(refContainer)

/**using 'refs' i can avoid the use of the dependency
 * array, cause the dependency is the ref focus in what
 * i need it
*/
  useEffect(() =>{
    console.log(refContainer.current)
    refContainer.current.focus()
  })

  return (
    <>
      <h2>useRef</h2>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input 
              className='text'
              /**here reference to the input */
              ref={refContainer}/>
          
          <button type='submit'>submit </button>
        </div>
      </form>
      
      {/**here is the reference to the 'JSX' 
       * element*/}
      <div ref={refDivContainer}>hello world</div>
    </>
    );
};

export default UseRefBasics;

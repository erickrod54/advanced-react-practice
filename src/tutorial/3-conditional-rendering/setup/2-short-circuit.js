import React, { useState } from 'react';

/**---short circuit evaluation and ternary 
 *      operator version 3-- this version is
 *      about short-circuit evaluation over 
 *      expresions using 'ternary operator'
 */

// ternary operator

const ShortCircuit = () => {

  const [ text, setText ] = useState('')
  /**i can check the changing value javaConsole
   * >Components, ShortCircuit
   */
  const [isError, setIsError] = useState(false);

  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  return (
  <>
    <h1>short circuit</h1>

      <h2>{firstValue}</h2>
      <h2>value: {secondValue}</h2>
      {/**this button will change the state of the
       * error from 'isError' -true- to '!isError'
       * -false-
      */}
        <button 
            className='btn' 
            onClick={() => setIsError(!isError)}
            >Toogle error</button>
      {isError && <h1>Error...</h1>}
      
      {/**the ternary operator evaluate over a true
       * - false expresion, then depending on the value
       * will display 'first JSX' - 'p' tag- or 
       * 'second JSX' - 'div' tag -
       */}
      {isError ? (
          <p>There is an error...</p>
        ) : (
          <div>
            <h2>there is no error</h2>
          </div>
          )} 
      

      {/**i can evaluate directly in the JSX */}
      {/**<h2>{text || 'jhon Doe'}</h2> */}

  </>  
  );
};

export default ShortCircuit;

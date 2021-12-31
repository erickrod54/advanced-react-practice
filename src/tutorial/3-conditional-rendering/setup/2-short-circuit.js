import React, { useState } from 'react';

/**---short circuit evaluation and ternary 
 *      operator version 1-- this version is
 *      about short-circuit evaluation over 
 *      expresions
 */

// short-circuit evaluation

/**short-circuit evaluation is a way to
 * evaluate expresions using operators
 */
// ternary operator

const ShortCircuit = () => {

  /**i build the state setting up in empty string
   * and it will be use to evaluate*/
  
  /**i can test changing empty string for a value
   * and will short circuit the value from one
   * expression to another
   */
  const [ text, setText ] = useState('')
  
  /**evaluation over 2 values */

  /**--the evaluation is from left to right, and
   * keep the value from right
   */

  /**--if the text state is 'true' or 'hello wolrd'--*/
  /**if the text value is 'true' and 'hello world',
   * i'm evaluating a expresion where both values are
   * true so the result will be 'hello wolrd'
   */
  const firstValue = text || 'hello world';
  
  /**--if the text state is 'true' and 'hello wolrd'--*/
  /**the result of this expresion having an 'empty'
   * string that represent 'false' and 'hello 
   * world' that represents true will result in 
   * empty string as 'value'
   */
  const secondValue = text && 'hello world';

  return (
  <>
    <h1>short circuit</h1>

      <h2>{firstValue}</h2>
      <h2>value: {secondValue}</h2>
      
      {/**i can evaluate directly in the JSX */}
      {/**<h2>{text || 'jhon Doe'}</h2> */}

  </>  
  );
};

export default ShortCircuit;

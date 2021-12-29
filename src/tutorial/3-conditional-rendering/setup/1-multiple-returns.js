import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

/**In this example i develop a Loading state */

const MultipleReturns = () => {

  /**Multiple returns is a usefull way to conditionally rendering
   * and develop features like a 'loading' feature for this example,
   * or rendering 'conditionally a component' that makes really
   * dynamic components rendering
   */

  /**first i destructure 2 states for useState so i be 
   * able to switch between true and false*/
  const [ loading, setLoading ] = useState(true);

  if (loading) {
    return <h2>Loading ...</h2>;
  } 
  
  /**i can hold a whole app here and render it conditionally */
  return (
  <>
    <h1>Multiple Returns</h1>

    <div className='container'>
      <h2>Conditional Renderering</h2>


    </div>

  </>  
    );
};

export default MultipleReturns;

import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

/**-------covered in this version------------ */

/** Forms Basics version 1 - feautures: 
 * --------->Build a Basic Form to control their 
 *          inputs.
 * --------->controlled input behavior( 
 *              -> to make it behave by the 
 *                requirement that i need. 
 *              ->to place it whereever i need it,
 * )*/

const ControlledInputs = () => {

  /**with this reference function trigger a loopback
   * test to return the behavior that i want from the 
   * form -> onSubmit={handleSubmit} 
   * 
   *  Note: the parameter 'e' is used to target the 
   *  inputs
   * 
   * */

  const handleSubmit = (e) => {
    /**this line is very important prevents the 
     * default behavior to handle forms, and let
     * me take control of the forms*/
    e.preventDefault();
    /**doing the previous line, hello world will
     * be prompted doing the 'behavior' test 
     * sucessful*/
    console.log('hello world')
  }

  return (
  <>
    <h2>controlled inputs</h2>
    <arcticle>
      {/** styles applied:
       *          form--> the form container-where 
       *                  the inputs are-
       *  form-control--> style for the input itself
      */}

      {/**i can control where to place and trigger the
       * action: 
       *        --->from the form with onSubmit
       *        --->from the button with onClick
       * */}
      <form className='form' onSubmit={handleSubmit}>
        {/**first input for the name */}
        <div className='form-control'>
          <label htmlFor='firstName'>Name:</label>
          <input 
            type='text' 
            id='firstName' 
            name='firstName'/>
        </div>
        {/** second input for the email*/}
        <div className='form-control'>
          <label htmlFor='email'>Email:</label>
          <input 
            type='text' 
            id='email' 
            name='email' />
        </div>
        <button type='submit'>add person</button>
      </form>
    </arcticle>
  
  </>
    
  );
};

export default ControlledInputs;

import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// React

/**-------covered in this version------------ */

/** Forms Basics version 2 - feautures: 
 * 
 * --------->Build states for inputs.
 * --------->controlled input behavior( 
 *              -> to make it behave to take
 *                 whatever target values that i 
 *                 give to them:
 *        
 *        const inputValue = input.value
 *        value, onChange
 *  
 *              ->to place it whereever i need it )*/

const ControlledInputs = () => {

  /**These are the states for the inputs
   * --intially empty because i gonna fill it
   * --with the values that i enter in the inputs*/
 const [ firstName, setFirstName ] = useState('');
 const [ email, setEmail ] = useState('');

 /**the 'e' -this parameter can be whatever i want-
  * will prompted the values after they get entered*/
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, email)
  }

  return (
  <>
    <h2>controlled inputs</h2>
    <arcticle>
      <form className='form' onSubmit={handleSubmit}>
        {/**first input for the name */}
        <div className='form-control'>
          <label htmlFor='firstName'>Name:</label>
          <input 
            type='text' 
            id='firstName' 
            name='firstName'
            /**i add the initial values of the state '' */
            value={firstName}
            /** 'onChange' i trigger the setFirstName 
             * to get the values entered by the user:
             * 
             *  thats what 'e.target.value' does
             * 
             * i can check the state change in 
             * javaConsole > Components
            */
            onChange={(e)=>setFirstName(e.target.value)}
            placeholder='Your Name'/>
        </div>
        {/** second input for the email*/}
        <div className='form-control'>
          <label htmlFor='email'>Email:</label>
          <input 
            type='text' 
            id='email' 
            name='email' 
            /**i add the initial values of the state '' */
            value={email}
            /** 'onChange' i trigger the setEmail 
             * to get the values entered by the user
             * i can check the state change in 
             * javaConsole > Components
             */
            onChange={(e)=>setEmail(e.target.value)}
            placeholder='Your Email'/>
        </div>
        <button type='submit'>add person</button>
      </form>
    </arcticle>
  
  </>
    
  );
};

export default ControlledInputs;

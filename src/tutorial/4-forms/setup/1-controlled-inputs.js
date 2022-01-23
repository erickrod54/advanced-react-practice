import React, { useState } from 'react';
// JS
// React

/**-------covered in this version------------ */

/** Forms Basics version 3 - feautures: 
 * 
 * --------->Add people to a list:
 *        -->Build a state for people
 *        -->Add dynamicly people( after cheking for
 *          every person is fullfiled i'll add into 
 *          the empty people array, then i'll map the
 *          people array and destructure the data that 
 *         i need: id, firstName, email)
 *                     
 *   ---- pending 'removeItem' feature --------
 * 
 * */

const ControlledInputs = () => {

 const [ firstName, setFirstName ] = useState('');
 const [ email, setEmail ] = useState('');
 /**Here i build the state to keep all the persons
  * added*/
 const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    /**check for fullfilled fields */
    if (firstName && email) {
    /**i destructure the single item in his
     * values -creating an id converting
     *  date to string-*/  
    const person = { 
      id: new Date().getTime().toString(),
       firstName, email}

 console.log(person)
 /**i use the 'setPeople' state to add the person into
  * the empty 'people' array*/
 setPeople((people) => {
   return [...people, person]
 })
 /**then i set back the inputs to empty strings 
  * again */
 setFirstName('');
 setEmail('');
 console.log(people)
    }else{
      console.log('empty values')
    }
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
      {/**then i add dynamicly the person to the
       * people array and show in them*/}
      {
        /**i map the people array first */
        people.map((person) => {
          /**i ask for every person id,firstName,
           * email*/
          const {id, firstName, email} = person
          return(
            /**then i return the 'JSX' with the unique
             * 'id, firstName and email'*/
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          
          )
        })
      }
    </arcticle>
  
  </>
    
  );
};

export default ControlledInputs;

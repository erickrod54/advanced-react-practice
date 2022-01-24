import React, { useState } from 'react';
// JS
// React

/**----multiple inputs App version 1 - Features:
 *           ---> Simplified state values
 *                using 'dynamic object keys'
 *                -the object added as a value
 *                in:
 *                - useState({firstName:'',
 *                email:'', age:'', statuss:''})-
 * 
 *             -->value, onChange: making a way
 *                to handle every value change in the
 *                'dynamic object keys' 
 * 
 *  
 * 
 * 
 * --this kind of implementation is adviceable for
 * --multiple inputs not just to or three can be 
 * --many more
 * 
 * Note: to demonstrate multiple inputs i refactor
 * Forms Basics - controlled inputs -
 */

const ControlledInputs = () => {

  /**Doing a single state 'person' will handle as
   * the data inside of 'useState' an object with
   * all the fields or characteristics i need for 
   * a person*/
  const [person, setPerson] = useState({firstName:'',
  email:'', age:'', statuss:''})

  /**this statte will keep every person that get
   * entered by the user*/
  const [people, setPeople] = useState([]);


  /**-----in both functionalities i target
   * ----- 'e' the event handler
   */

  /**'handleChange' will handle will target
   * first the 'value' entered*/
    const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    /** i use the 'setPerson' to add every
     * person field '...person', and the name
     * '[name]:value}' -i can see how is been
     * add by javaConsole>Components -*/
    setPerson({...person, [name]:value})
  }

  /**handleSubmit will trigger the functionality
   * to add every 'person' to the 'people' array*/

  const handleSubmit = (e) => {
    /**i prevent the default bahavior, and take 
     * control*/
    e.preventDefault();
    /**i check that every field is fullfilled */
    if (person.firstName && 
            person.email && 
            person.age && person.statuss) {
      /**i created a newPerson array and get
       * all the props adding an id for each one*/        
      const newPerson = {...person, 
        id: new Date().getTime.toString()}

       /**i use the 'setPeople' state to add the
        * entire 'people' array and every 'newPerson'*/ 
      setPeople([...people, newPerson]);
      /**i clear the fields after that */
      setPerson({firstName:'',email:'',age:'',statuss:''})
    }
  }
  
  return (
    <>
    {/** i set the onChange with handleChange*/}
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              /**i access the values with .
               * 'person.firstName'
               */
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              /**i access the values with .
               * 'person.email'
               */
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='age'>Age : </label>
            <input
              type='text'
              id='age'
              name='age'
              /**i access the values with .
               * 'person.age'
               */
              value={person.age}
              onChange={handleChange} />
            <div className='form-control'>
            <label htmlFor='status'>Status : </label>
            <input
              type='text'
              id='statuss'
              name='statuss'
              /**i access the values with .
               * 'person.statuss'
               */
              value={person.statuss}
              onChange={handleChange} />
            
          </div>
          </div>
          
          <button type='submit' onClick={handleSubmit}>add person</button>
        </form>
        {/**here i add dynamicly and render
         * every 'person' added to the 'people'
         * array*/}
        {people.map((person) => {
          const { id, firstName, email, age, statuss } = person;
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{age}</p>
              <p>{email}</p>
              <p>{statuss}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;

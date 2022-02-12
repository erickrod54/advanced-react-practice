import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function

/**Modal App version 1 - Features:
 * 
 *      ---->Building states (for single name, 
 *           for people -an array of names-, and
 *           showModal- a flag for showing or not 
 *           the modal)
 *      ---->Building a Basic Form -with handleSubmit-
 *      ---->Building 'handleSubmit' method 
 *      ---> Styling the app
 * 
 * Note: 'index' name is a default page to be 
 * displayed as default- check App js file comment-
 */

const Index = () => {

  /**the state for name  */
  const [name, setName] = useState('');
  /**the state for data using the data array */
  const [people, setPeople] = useState(data);
  /**the modal set as 'false' as default */
  const [showModal, setShowModal] = useState(false)

  /**i catch the 'event' e from onChance 'prop' from 
   * the input*/
  const handleSubmit = (e) =>{
    e.preventDefault()
    /**if 'name' exist */
    if (name) {
      /**the modal get triggered */
      setShowModal(true)
      /**i add the name to the 'data' array */
      setPeople([...people,
        {id: new Date().getTime().toString(), name }])
      setName('')
    }else{
      setShowModal(true)
    }
  }

  return (
  <>
    <h2>useReducer</h2>
    {/**if 'showModal' exist show the 'Modal' 
     * Component*/}
    {showModal && <Modal />}
    {/**the form with the 'handleSubmit' and the
     * 'form' style*/}
    <form onSubmit={handleSubmit} className='form'> 
      <div>
        {/**the input with name value and targeting
         * the event with the value for 'name'*/}
        <input 
          type='text' 
          value={name} 
          onChange={(e) => 
          setName(e.target.value)} 
          />
      </div>
      <button type='submit'>Add</button>
    </form>
    {/**Maping the people array to show every old
     * and new name*/}
    {people.map((person) => {
      return(
        /**by 'id' show every 'name' */
        <div key={person.id}>
          <h4>{person.name}</h4>
        </div>
      )
    })}
  </>
    
  );
};

export default Index;

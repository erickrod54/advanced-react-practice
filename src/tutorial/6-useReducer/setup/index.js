import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function

/**Modal App version 2 - Features:
 * 
 *      ---->Refactoring states for 'showModal' and 
 *           'people' with reducers.
 * 
 *      Note: this states will be reduced to a
 *            default 'state' value
 * 
 *      ---->Drilling the 'modalContent' prop
 *          to Modal component 
 */

/**this is the reducer for the states,
 * always has a 'state' and a 'action'*/
const reducer = (state, action) => {
  /**this will prompt a test for the action */
  console.log(state, action);
  return state;
};
/**Note: a reducer always has to return something
 * for this 'test', i'll return the state*/

/**this default state must be value of the reducer 
 * state*/
const defaultState = {
  /**if i want to test the content i can pass
   * a value for 'modalContent'
   */
  people: [],
  isModalOpen:false,
  modalContent: '',
};
/**in this version 'showModal' is replaced by
 * 'isModalOpen' and switch beetwen 'true' and 
 * 'false'*/

const Index = () => {

  /**the state for name  */
  const [name, setName] = useState('');
  
  /**this is the reducer state */
  const [state, dispatch ] = useReducer(reducer, defaultState)
  /**dispatch must be a value of reducer state
   * and indicates a type of action*/

  /**i catch the 'event' e from onChance 'prop' from 
   * the input*/
  const handleSubmit = (e) =>{
    e.preventDefault()
    /**if 'name' exist */
    if (name) {
        /**this message will be propmted
         * and is related to reducer function*/
        dispatch({type:'Testing'})
    }else{
   
    }
  }

  return (
  <>
    <h2>useReducer</h2>
    {/**if 'state.isModalOpen' and show Modal 
     * Component with modalContent prop drilled 
     * to the component*/}
    {state.isModalOpen && <Modal modalContent={state.modalContent}/>}
    {/**Note: to test switch the values of 'defaultState'*/}
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
    {state.people.map((person) => {
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

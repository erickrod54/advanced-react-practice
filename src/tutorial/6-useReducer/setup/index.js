import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function

/**Modal App version 5 - Features:
 * 
 *      ---->Building 'CLOSE_MODAL' 
 *          feature 
 *     
 *     ---->Build 'REMOVE_ITEM' Feature
 *  
 *  Note: the issue with 'REMOVE_ITEM' on
 *  version 4 was the condition of 'CLOSE_MODAL'
 *  was asigning instead of comparing -the modal
 *  was blocking the remove feature-
 * 
 */

/**this is the reducer for the states,
 * always has a 'state' and a 'action'*/

 const reducer = (state, action) => {

  if (action.type === 'ADD_ITEM') {
     const newPeople = [...state.people, action.payload]
     return {...state, 
              people: newPeople,
              isModalOpen: true,  
              modalContent: 'Item Added'};
            }
  if (action.type === 'NO_VALUE') {
      return{ ...state, 
           isModalOpen:true,
           modalContent: 'please enter a value'}
  }
  /**this line was action.type = 'CLOSE_MODAL' instead of
   * action.type === 'CLOSE_MODAL'*/
  if (action.type === 'CLOSE_MODAL') {
    return{ ...state, 
      isModalOpen:false
    }
  }
  if (action.type === 'REMOVE_ITEM') {
    const newPeople = state.people.filter(
        (person) =>  person.id !== action.payload
    )
    return { ...state, people: newPeople}
  }
  throw new Error('no matching action type')
};

const defaultState = {
  /**people is the default state of the array and 
   * i gonna fill it in the reducer*/
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
    
    if (name) {
      /**here i create the item to be added */
      const newItem = {
        id: new Date().getTime().toString(),
        name }
        /**the action type will refer the action that i
         * want to do -this case add item, im gonna build it
         * 
         * - action type + payload -*/

        dispatch({type:'ADD_ITEM', payload: newItem})
        setName('')
    }else{
      /**this is the 'NO_VALUE' action, i defined 
       * in the reducer */
      dispatch({ type: 'NO_VALUE'})
    }
  }

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL'})
  }

  return (
  <>
    <h2>useReducer</h2>
    {/**if 'state.isModalOpen' and show Modal 
     * Component with modalContent prop drilled 
     * to the component*/}
    {state.isModalOpen && <Modal 
                              closeModal={closeModal} 
                              modalContent={state.modalContent}/>}
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
        <div key={person.id} className='item'>
          <h4>{person.name}</h4>
          <button 
            onClick={()=> dispatch(
              { type: 'REMOVE_ITEM', payload: person.id})}
            >remove</button>
        </div>
      )
    })}
  </>
    
  );
};

export default Index;

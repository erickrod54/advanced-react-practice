import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  /**i destructure people and setPeople in a React.useState(data), so
   * everytime that i need to use 'useState' hook, i can use it directly
   * with people, and setPeople
   */
  const [ people, setPeople ] = React.useState(data)

  /**the action to remove an item will filter the array, with the no
   * matching id's -removing the id that does match-, and returning
   * a new array using setPeople() handler
   */
  const removeItem = (id) =>{
      const newPeople = 
        people.filter((person) => person.id !== id)
      
        setPeople(newPeople)
  }


  return (
    <>
        
        <h2>useState array example</h2>
        {
          
          people.map((person) =>{
            //first i tested console.log(person)
            //and return 'hello'

            /**i destructure to render in a JSX div element*/
            const {id, name} = person
            
            return (
              <div 
                  key={id} 
                  className='item'>
                    <h4>{name}</h4>
                    
                    {/**this button will keep the action to remove an item */}
                    <button 
                      onClick={() => removeItem(id)}
                        >remove </button>
              </div>
            )
            
          })}
          {/**this button clears the data array */}
          <button 
              className='btn' 
              onClick={() => setPeople([])}> Clear Items
          </button>
          {/**this button restores the data array */}
          <button 
              className='btn' 
              onClick={() => setPeople(data)}> Restore Data
          </button>
    </>
        );
       
};

export default UseStateArray;

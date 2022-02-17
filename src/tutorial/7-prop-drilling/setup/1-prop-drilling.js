import React, { useState } from 'react';
import {data} from '../../../data'

// more components
// fix - context api, redux (for more complex cases)

/**Prop Drilling App version 1 - Features:
 * 
 *      --->Building state for 'people' with data value
 *      --->Building 'List' Component
 *      --->Building 'SinglePerson' Component
 * 
 *      --->drilling props people form List Component 
 *          -here is use to map every person in the array-
 *          to SinglePerson Component -here is use to render
 *          every person of the array-
 * 
 *      ---> building 'removePerson' feature and drilling it
 * 
 *          List --> SinglePerson component
 * 
 * Note: prop drilling is not an oficial term -is used to pass
 *'props and functions' from top to down of components tree-
 *a way to fix it for large apps is using context api, redux 
 *(for more complex cases)
 */

const PropDrilling = () => {
  const [ people, setPeople ] = useState(data);

  const removePerson = (id) => {
    setPeople((people) =>{
      return people.filter((person) => person.id !== id)
    })
  }

  /**first drill for 'removePerson' will be in the List
   * component -this block of code could be in the App js-
  */
  return(
    <>
      <section>
        <h3>prop drilling</h3>
        <List people={people} removePerson={removePerson}/>
      </section>
    </>
  );
};

/**second drill of 'removePerson' is in the component itself
 * -this block of code could represent List Component file-
 * -list of all the people( the whole array )-
 * -here is destructured-*/
const List = ({people, removePerson}) => {
  return(
    <>
      {people.map((person) =>{
        return(
          /**i use spread operator to pass every prop of person
           * plus the function removePerson*/
         <SinglePerson key={person.id} {...person} removePerson={removePerson}/> 
        )
      })}
    </>
  )
}
/**third drill is for a SinglePerson component -this block of
 * code could represent the data for every single person- */
/**individual items */
 /**-here is destructured also-*/
const SinglePerson = ({ id, name, removePerson }) => {
    return(
      <div className='item'>
        <h4>{name}</h4>
        <button onClick={() => removePerson(id)}>remove</button>
      </div>
    )
}

export default PropDrilling;

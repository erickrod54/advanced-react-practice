import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';
/**
 * React-router app version 3 - Person Component - Features:
 * 
 *              -->Building states.
 *              -->Destructuring 'id' on 'useParams' hook.
 *              -->Building 'useEffect' to find and set the
 *                 'data' for 'name' and 'position'
 *              -->Rendering 'name' and 'position'
 *                
 * 
 * Note: Destructuring 'id' on 'useParams' in very important 
 * in order to use it, and the best practice to set the 
 * functionality is inside the 'useEffect', notice for this
 * practice i use 'find' because i need to find a specific
 * person in a list
 * 
 * */

const Person = () => {
  /**console log it i can acces to the id */
  //console.log(useParams())

  /**Here i build the states in order to set values for 
   * 'name' and 'position'
   */
  const [ name, setName ] = useState('default name')
  const [ position, setPosition ] = useState('default position')

  /**First - i set useParams hook to use the 'id' */
  const {id} = useParams();

  /**Second */
  /**with useEffect i bring the data */
  useEffect(() =>{
    /**i 'parseInt' because the id on the link is a string
     * and the link my data is a number*/

    /**i use 'find' to get by 'id' and set the data that i need*/
    const newPerson = data.find((person) => person.id === 
    parseInt(id))
    setName(newPerson.name)
    setPosition(newPerson.position)
  },[])

  return (
    <div>
      {/**i render the data that i need */}
      <h1>{name}</h1>
      <h2>{position}</h2>
      {/**i set a link to go back to the list of 'people' */}
      <Link to='/people' className='btn'>Back to People</Link>
    </div>
  );
};

export default Person;

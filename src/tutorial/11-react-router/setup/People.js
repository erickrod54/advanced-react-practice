import React, { useState } from 'react';
import { data } from '../../../data';
import { Link } from 'react-router-dom';
/**
 * React-router app version 3 - People Component - Features:
 * 
 *              --> Setting up 'dinamicly' the link for 
 *                  Person' Component.
 * 
 * Note: 'People' Component is a list that contains each single
 * 'Person' Component
 * 
 * The link is set dinamicly -because the name can be whatever 
 * i want, thats why is 'dynamic'- to generate the link that 
 * will display the detail of 'Person' 
 * 
 */
const People = () => {
  const [people, setPeople] = useState(data);
  return (
    <div>
      <h1>People Page</h1>
      {people.map((person) => {
        return (
          <div key={person.id} className='item'>
            <h4>{person.name}</h4>
            {/**here i set the link dinamicly */}
            <Link to={`/person/${person.id}`}>
              Know more
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default People;

import React, { useState, useContext } from 'react';
import { data } from '../../../data';
// more components
// fix - context api, redux (for more complex cases)

/**ContextApi app version 1 - Features:
 *            --->Refactoring 'drill props' using 'useContext' 
 *                hook to pass people 'data', and 'removePerson' 
 *               functionality 
 * 
 * 
 * Note: using 'useContext' hook is a pretty 
 * good alternative to 'drill props', in small applications
 * like this one three levels deep i can drill props with 
 * no issue, but in large applications with 6, 8, 10 or more
 * deep levels 'drillin props' becomes very complex, so this 
 * refactor will solve the prop drilling replacing it with
 * 'context API'
 * 
 * ----in this app i Provide people to be Consumed by 'List' 
 * ---Component and removePerson to be Consumed by 
 * ---'SinglePerson' Component
 */

/**First i create a context - this give me access to 
 * two components 'Provider' and to the 'Consumer'*/
const PersonContext = React.createContext();

/**this is the 'Root Component' where all the components
 * are rendered -i have to find always the root component-:
 *      --> Second i wrap the component that i want to serve
 *          as Provider
*/
const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    /**i want to provide from the List Component 'people' data 
     * and 'removePerson' feature -with value i can test it 
     * emaple: doing a hello world-*/

    /**in the value prop i'm passing an object so i can pass in
     * data and functions */
    <PersonContext.Provider value={{removePerson, people }}>
      <h3>prop drilling</h3>
      <List 
        /**i remove it -i dont need prop-drillin here- */
        //people={people} 
        //removePerson={removePerson} 
        />
    </PersonContext.Provider>  
  );
};

/**i remove it 'people' -i dont need prop-drillin here- */
const List = () => {
  /**i can either destructure or use a variable name 
   * 'mainData' and then map the people data */
  //const  { people } = useContext(PersonContext);
  const  mainData = useContext(PersonContext);
  return (
    <>
      {mainData.people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            /**i remove it -i dont need prop-drillin here- */
            //removePerson={removePerson}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  /**Third i create a variable for whatever i want to
   * consume, this case i'm going to consume 'people' data
   * and 'removePerson' in 'singlePerson' Component */
  
  /**i use useContext hook and pass as value the 
   * 'PersonContext' i created */
  const  { removePerson } = useContext(PersonContext);
  console.log(data)
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;

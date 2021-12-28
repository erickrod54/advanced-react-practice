import React, { useState, useEffect } from 'react';

/**This useEffect will focus on fetch data, i'll use for acomplish
 * this task:
 *      
 *      useState
 *      useEffect
 * 
 *      fetch requests ( remember there multipe scenarios )
 *        * async
 *        * await
 * 
 *  -using async, await i approach separate functions to ask 
 *  for the data to the API - remember this specific topic
 *  is about Promises-
 */

/**this 'url' is the API - the data that i'll use to feed this app */
const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {

  /**implementing useState with an empty array ( i gonna fill it with 'url' data ) */
  const [users, setUsers] = useState([]);

  /**i make a separate const with the function cause this can not be
   * done directly inside 'useEffect' hook, 'async' because i'll do a 
   * 'asynchronous request', and 'await' because is the promise that 
   * i'll get the data 
  */
  const getUsers = async() => {

    /**i'm fetching here 'url' */
    const response = await fetch(url);
    /**here i'm getting 'users' data */
    const users = await response.json();
    /**i console log it here, but in order
     * to promp it in the console i have to
     * call it from 'useEffect'
     */
    
    //console.log(users)
    
    /** useState preserve the value, if i 
     * call users -getUsers()- i'm getting
     * the 'data' but if i 'get', and then
     * 'update' i'll crash the browser with
     * an infinite loop, the solution is
     * to cleanup the  data with useEffect
     * second argument, i can use in this 
     * case an empty array '[]' */

    setUsers(users)
  }

  useEffect(() => {
    /**i call the data like this cause remember 
     * is a function
     */
    getUsers();
  }, [])
  /**i can test it without dependencies -remember 
   * dependencies are 'Second Argument' will be in 
   * this case empty array '[]'- , little crashy 
   * (* not recomended *)
   */

  return (
    /**i'll build here 'JSX' to get the data from 'getUsers()' 
     * that get 'users' data first with the Promise, and then 
     * 'setUsers data' -line 53-
    */

    <>
        <h3>github users</h3>
        {/**i'll put the data in a 'unordered list', className 'users'
         * -getting the style-
        */}
        <ul className='users'>
          {/**first i map the 'API' */}
          {users.map((user) => {
            /**i destructure the data that i need in 'user' */
            const { id, login, avatar_url, html_url} = user;
            return(
              /**ordered list with key 'id' */
              <li key={id}>
                {/**'img' with 'login' as 'alt prop' cause
                 * images must have an 'alt' prop
                */}
                <img 
                  src={avatar_url} 
                  alt={login} />
                  {/** this 'JSX' shows me login 
                   * -username- the 'a tag links 
                   * to the profile'*/}
                  <div>
                    <h4>{login}</h4>
                    <a href={html_url}
                        >profile</a>
                  </div>
              </li>
            )
          })}
        </ul>

    </>  
      );
};

export default UseEffectFetchData;

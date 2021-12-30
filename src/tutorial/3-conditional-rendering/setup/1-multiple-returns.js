import React, { useState, useEffect } from 'react';

/**In this example i develop a Loading state - version 1**/

/**---------code reference---------------
 * 
 *  
 *  'Second argument'
 * 
 *  'Cleanup Function'
 * 
 * reference -> 2d511cc784cda30c55ba37b271da4f248a1cd739
 * 
 *      'Promises' 'async await'   
 * 
 *  reference -> e5505d76f849ebf5331ff1f754181affe3afabcb
 * 
 *       'Multiple returns' -Basic version-   
 * 
 *  reference -> 1eb3ee757bc7170b7ee9ede7c3ff3222b89c42b0
 */

/**this will be the API for the fetch request */
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturns = () => {

/**-------i build three states---------*/

  /**-----first state to manage loading feature---- */
  const [ isLoading, setisLoading ] = useState(true);

  /**-----second state to manage 'error' feature 
   * - for error loading the app :)---- */
  const [isError, setIsError] = useState(false);

  /**------third state to manage a 'default user' in 
   * case of not getting API response ------------*/
  const [ user, setUser ] = useState('default user')

/**implementing useEffect hook to make the fetch request**/
  useEffect(() => {
/**this is the second way to make a fetch request*/

/**---in this option i don't use separate function 
 * 'async' - 'await' instead i use 'Second argument' 
 * as an empty array '[]'(to render to request only 
 * once), and i do not use cleanup functions
*/
    fetch(url)

    /**with 'then' i make Promises */

      /**1st Promise to get the 'json' data from 'url' */
      .then((resp) => {
        /**a 'conditional update'  base on data
         * transmission rate
        */
        if (resp.status >= 200 && resp.status <= 299) {
           return resp.json()
        }else{
          /**this state here is just in case of error */
          setisLoading(false)
          setIsError(true)
          throw new Error(resp.statusText)
        }
      })
      /**2nd Promise to get the data of 'login' from
       * the API as 'user' -remember if fails the 
       * state will be 'default user'- 
      */
      .then((user) => {
        const {login} = user;
        setUser(login)
        setisLoading(false)
      })
      /**this catch is to prompt the error */
      .catch((error) => console.log(error))
  }, [])

  /**----Here i make a 'conditional rendering'-----*/

  /**--this conditional rendering is for 
   * 'loading state' */
  if (isLoading) {
    return(
      <div>
        <h1> Loading...</h1>
      </div>
    )
  }
/**--this conditional rendering is for 
 * 'error state'*/
  if (isError) {
    return(
      <div>
        <h1> Error...</h1>
      </div>
    )
  }
 /**--this conditional rendering is for 
  * 'user' as default user*/ 
  return (
  <>
    <h1>Multiple Returns</h1>

    <div className='container'>
      <h2>{user}</h2>


    </div>

  </>  
    );
};

export default MultipleReturns;

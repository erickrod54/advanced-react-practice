import { useEffect } from 'react';
import authFetch from '../axios/interceptors';

/**AxiosApp app version 6 - 'interceptors' file - 
 * Features:
 * 
 *              --> Importing 'authFetch' instance
 * 
 * Notes: 'randomUserUrl' and 'productsUrl' are two
 * different servers and using global instance.
 * 
 * Interceptors are functions that axios call for every 
 * request and i can use it to transform the request 
 * before it leaves the application 
 * 
 * This is handy for complex application that need to 
 * handle mixed features with authentication.
 */

const url = 'https://course-api.com/react-store-products';

const Interceptors = () => {
  const fetchData = async () => {
    try {
      /**i can test with routes that doesn't exist
       * to see how is the error handled
       */
      const response = authFetch('/react-store-products')
      console.log(response)
    } catch (error) {
      
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>interceptors</h2>;
};
export default Interceptors;

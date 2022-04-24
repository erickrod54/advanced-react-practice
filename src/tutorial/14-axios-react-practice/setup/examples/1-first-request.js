import { useEffect } from 'react';
import axios from 'axios';

/**AxiosApp app version 2 - 'axios-app' file - Features:
 * 
 *              --> Building 'get' request using axios.
 * 
 * Notes: The behavior is like a Promise, but the difference is
 * that using axios i can get a big object with extended props
 * that 'data' and i can checkout the object by 
 * 'console.log(response)'.
 */

 /**limit, if 429 wait for 15 min and try again */
const url = 'https://course-api.com/react-store-products';

const FirstRequest = () => {
  const fetchData = async () => {
    /**i use a try-catch */
    try {
      /**here i set the response */
      const response = await axios(url);
      /**here i can get the whole 'response' 
       * console.log(response)
      */

      /**here i get from the object the 'data' prop, to get only
       * the data*/
      const data = response.data;
      console.log(data)
    } catch (error) {
      console.log(error.response)
    }
  }
  /**here i implement 'useEffect' to invoke 'fetchData'*/
  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>first request</h2>;
};
export default FirstRequest;

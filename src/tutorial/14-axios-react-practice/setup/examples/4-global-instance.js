import { useEffect } from 'react';
import axios from 'axios';

/**AxiosApp app version 4 - 'global-instance' file - 
 * Features:
 * 
 *              --> Setting 'global' js instance for
 *                  'productsUrl'.          
 *
 *              --> Setting 'global' js instance for
 *                  'randomUserUrl'.
 * 
 * Notes: 'randomUserUrl' and 'productsUrl' are two
 * different servers and using global instance i set
 * global instance for both.
 * 
 * This can be kind an issue with 'tokens' keys but
 * also has a solution as custom-instance. 
 * 
 */
const productsUrl = 'https://course-api.com/react-store-products';
const randomUserUrl = 'https://randomuser.me/api';

const GlobalInstance = () => {
  const fetchData = async () => {
    try {
      const response1 = await axios(productsUrl);
      const response2 = await axios(randomUserUrl)
      console.log(response1)
      console.log(response2)
    } catch (error) {
      
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>global instance</h2>;
};
export default GlobalInstance;

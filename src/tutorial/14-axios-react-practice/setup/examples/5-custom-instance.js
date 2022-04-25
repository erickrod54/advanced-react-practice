import { useEffect } from 'react';
import authFetch from '../axios/custom';
import axios from 'axios';

/**AxiosApp app version 5 - 'custom-instance' file - 
 * Features:
 * 
 *              --> Importing 'AuthFetch' custom instance.
 *  
 *              --> Setting 'custom' js instance for
 *                  'productsUrl'.          
 *
 *              --> Setting 'global' js instance for
 *                  'randomUserUrl'.
 * 
 * Notes: 'randomUserUrl' and 'productsUrl' are two
 * different servers and using global instance.
 * 
 * Setting a custom instance is a solution to handle
 * 'tokens' beceause the get request can be customized.
 */

const randomUserUrl = 'https://randomuser.me/api';

const CustomInstance = () => {
  const fetchData = async () => {
    try {
      const response1 = await authFetch('/react-store-products')
      const response2 = await axios(randomUserUrl)
      console.log(response1)
      console.log(response2)
    } catch (error) {
      
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>custom instance</h2>;
};
export default CustomInstance;

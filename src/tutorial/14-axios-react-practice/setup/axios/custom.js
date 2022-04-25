import axios from "axios";

/**AxiosApp app version 5 - 'custom' js file - 
 * Features:
 * 
 *              --> Building custom 'authFetch' instance.
 * 
 * Notes: 'randomUserUrl' and 'productsUrl' are two
 * different servers and using global instance.
 * 
 * Setting a custom instance is a solution to handle
 * 'tokens' beceause the get request can be customized.
 * 
 * This solution also is very usefull to handle to 
 * situations where i need a more detailed setup.
 */
const authFetch = axios.create({
    baseURL: 'https://course-api.com',
    headers:{
        Accept: 'application/json',
    }
})

export default authFetch;
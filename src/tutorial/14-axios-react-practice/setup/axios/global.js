import axios from 'axios';

/**AxiosApp app version 4 - 'global.js' file - Features:
 * 
 *              --> Implementing 'axios' default get 
 *                  request to set a default headers.
 * 
 * Notes: by using 'axios.defaults.' i can set a default
 * get or post action for axios
 * 
 * In this case every request will have the value 'Accept' 
 * to 'application/json' 
 * 
 * this file and kind of code is called 'instance'
 */

axios.defaults.headers.common['Accept'] = 'application/json'
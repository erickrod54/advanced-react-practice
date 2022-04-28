import axios from "axios";

/**AxiosApp app version 6 - 'interceptors' file - 
 * Features:
 * 
 *              --> Building a 'authFetch' custom 
 *                  instance.
 * 
 *              --> Building a 'request'.
 *  
 *              --> Building a 'response'.
 * 
 * 
 * Notes: This case the 'response' handles an error.
 * 
 * Interceptors are functions that axios call for every 
 * request and i can use it to transform the request 
 * before it leaves the application 
 * 
 * This is handy for complex application that need to 
 * handle mixed features with authentication.
 * 
 * In the case of the interceptors here is a friendly
 * way to build the structure first:
 * 
 * ----first argument the request or response
 * ---second arguemnt the error handling
 * 
 * 'authFetch.interceptors.request.use(() =>{},()=>{})'
 */

/**here i build the custom instance */
const authFetch = axios.create({
    baseURL: 'https://course-api.com',
})

/**here i build the 'request' */
authFetch.interceptors.request.use((
    request
) =>{
    request.headers.common['Accept'] = 'application/json'
    console.log('request sent')
    return request;
},(error)=>{
    return Promise.reject(error)
})

/**here i build the 'response' */
authFetch.interceptors.response.use((response) =>{

    console.log('got response')
    return response;
},(error)=>{
    console.log(error.response);
    /**here i handle the error using the 'status'
     * prop from the axios object*/

    if (error.response.status === 404) {
        console.log('NOT FOUND')
    }
    return Promise.reject(error)
})

export default authFetch;
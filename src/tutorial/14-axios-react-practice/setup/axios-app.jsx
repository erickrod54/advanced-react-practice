import Title from './components/Title';
import Setup from './examples/4-global-instance';
/**in this case i'm importing the instance created
 * different to say that comes form 'axios' library
 */
import './axios/global';

/**AxiosApp app version 4 - 'axios-app' file - Features:
 * 
 *              --> Setting up 'global' js file in order
 *                  to set defualt global axios request.
 * 
 * Notes: Axios is a library that manages the 
 * fetching data from ... and sending data to... 
 * ------------ a server---------------------
 * 
 * Quote:
 * 
 *  "Axios is a simple promise based HTTP client for
 *  the browser and node.js. Axios provides a simple to use
 *  library in a small package with a very extensible interface."
 * 
 * reference: https://axios-http.com/
 * 
 * this component is a test for axios
 */

const AxiosApp = ()  => {

  return (
    <main>
      <Title />
      <Setup />
    </main>
  );
}

export default AxiosApp;

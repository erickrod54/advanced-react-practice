import Title from './components/Title';
import Setup from './examples/5-custom-instance';
/**in this case i'm importing the instance created
 * different to say that comes form 'axios' library
 */
import './axios/global';

/**AxiosApp app version 5 - 'axios-app' file - Features:
 * 
 *              --> Setting up 'custom-instance' using
 *                  axios.
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

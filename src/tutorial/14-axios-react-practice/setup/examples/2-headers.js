import { useState } from 'react';
import axios from 'axios';

/**AxiosApp app version 2 - 'headers' file - Features:
 * 
 *              --> Implementing 'axios' second argument
 *                  to render 'headers' prop from axios
 *                  object.
 * 
 * Notes: from the 'url' API i access to 'application/json'
 * in order to render 'data.joke'
 */

const url = 'https://icanhazdadjoke.com/';
// Accept : 'application/json'

const Headers = () => {
  const [joke, setJoke] = useState('random dad joke');

  const fetchDadJoke = async () => {
    try {
      /**here i set the axios prop 'headers' to get
       * the 'jokes' data from the API
      */
      const { data } = await axios(url, {
        headers:{
          Accept: 'application/json'
        }
      });
      setJoke(data.joke)
      console.log(data.joke) 
    } catch (error) {
      console.log(error.response)
    }
  };

  return (
    <section className='section text-center'>
      <button className='btn' onClick={fetchDadJoke}>
        random joke
      </button>
      <p className='dad-joke'>{joke}</p>
    </section>
  );
};
export default Headers;

import { useState } from 'react';
import axios from 'axios';
const url = 'https://course-api.com/axios-tutorial-post';

/**AxiosApp app version 3 - 'post-request' file - Features:
 * 
 *              --> Implementing 'axios' post method to
 *                  send 'data'.
 *
 *              --> Using axios second argument to send 
 *                  'name' and 'email' data.
 * 
 * Notes: In order to checkout the 'post' payload i go
 * to Chrome 'DevTools' > 'Network' > 'axios.post' > 
 * 'here i can check the payload and also the sattus and 
 * many more props'.
 * 
 * Here is not storing in the 'database' but is almost the
 * same concept.
 * 
 */
const PostRequest = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(url, {
       name: name, email: email   
      })
      console.log(response.data)
    } catch (error) {
      console.log(error.response)
    }
  };

  return (
    <section>
      <h2 className='text-center'>post request</h2>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            className='form-input'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            email
          </label>
          <input
            type='email'
            className='form-input'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-block'>
          login
        </button>
      </form>
    </section>
  );
};
export default PostRequest;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductWrapper } from "../components/index.styles";
import "styled-components/macro";

/**React-routerv6 Products app version 7 - 'Login' Component - Features:
 * 
 * 
 *          --> Building 'Login' Component.
 * 
 *          --> Building 'States' for Authenticate a user using 'name' 
 *              and'email'. 
 *  
 *          --> Building Reference functionality 'handleSubmit'.
 * 
 *          --> Building a 'BasicForm' targeting values for
 *              'name' and 'user' to be submitted
 * 
 *          --> Importing and Placing 'ProductWrapper' Component,
 *              and using 'macro' css on it.
 * 
 * Notes: 'Login' Component will handle the authentication 
 * fetaure for Products app - controlled inputs
 * 
 * to test handleSubmit:
 * 
 * ---console.log('username:', name,'password:',email)-----
 * 
 * The test with 'ProductWrapper' can be replaced by 'media queries' on 
 * 'Container' Style Coponent
 */

/**here i bring 'setUser' prop previously passed in 'Login' Route*/
const Login = ({ setUser }) => {

    /**here i build states for the authentication */
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');

    const navigate = useNavigate();

    /**here i build a 'handleSubmit' to redirect to '/dashboard' */
     const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!name || !email) return;
        /**i 'setUser' as a key object with the values typed by the user*/
        setUser({name: name, email: email})
        
        navigate('/dashboard')    
      };
    

    return(
        <>
        
        <ProductWrapper css={`margin-top: -1rem`}>

                {/** 'handleSubmit' is triggered by submitting */}
                <form className='form' onSubmit={handleSubmit}>
                    <h5>Login</h5>

                    <div className='form-row'>
                        {/**field for 'name' */}
                        <label htmlFor='name' className='form-label'>
                            name     
                        </label>

                        <input 
                            type='text' 
                            className='form-input' 
                            id='name' 
                            value={name} 
                            onChange={ (e) => setName(e.target.value)}/>
                    </div>
                    <div className='form-row'>
                        <label htmlFor='enail' className='form-label'>
                            email
                        </label>
                        {/**field for 'email' */}
                        <input 
                            type='email' 
                            className='form-input' 
                            id='email' 
                            value={email} 
                            onChange={ (e) => setEmail(e.target.value)}/>
                    </div>
                    {/**button to submit the BasicForm */}
                    <button 
                        type='submit' 
                        className='btn btn-block'>
                            login
                        </button>
                </form>
        </ProductWrapper>
         
        </>
    )
}

export default Login;
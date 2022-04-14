import React from 'react';
import Setup from './tutorial/13-react-router-v6/setup/';
import GlobalStyles from './global.styles';

/**React-routerv6 Products app version 4 - 'App.js' file - 
 * Features:
 * 
 *              -->Importing and Placing 'GlobalStyles'
 *                 Component.
 * 
 * Notes: 'GlobalStyles' Component set Global Styles instead
 * of using 'index.css' style sheet. This way i'll be able to
 * use without any conflict the styles for 'React-routerv6 
 * Products app'
 * 
 */
function App() {
  return (
    <>
    <h2>Advanced React Concepts</h2>
    <div className='container'>
      <GlobalStyles/>
      <Setup />
   
    </div>
    </>
    
  )
}
export default App

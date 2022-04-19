import React from 'react';
import Setup from './tutorial/14-axios-react-practice/setup/axios-app';
import AxiosGlobalStyle from './global.styles.axios.practice';

/**Axios app version 1 - 'App.js' file - Features:
 * 
 *              -->Importing and Placing 'App' from axios app.
 * 
 *              -->Importing and Placing 'AxiosGlobalStyle' to 
 *                 set Styles as Global. 
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
      <AxiosGlobalStyle />      
      <Setup />
    
    </>
  )
}
export default App

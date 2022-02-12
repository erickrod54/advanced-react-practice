import React from 'react';
import Setup from './tutorial/6-useReducer/setup'

/**Modal app version 1 - App js - 
 * 
 *   ---> the way that 'Setup' is imported:
 * 
 *      './tutorial/6-useReducer/setup'
 * 
 *      Works because is in 'setup' a file named
 *      as 'index', so wil be displayed as default 
 */

function App() {
  return (
    <>
    <h2>Advanced React Concepts</h2>
    <div className='container'>
      <Setup />
  
    </div>
    </>
    
  )
}
export default App

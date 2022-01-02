import React, { useState, useEffect } from 'react';

/**------Show/Hide component -cleanup function more in deep
 *------- with a toggle component behavior 'component  version 1*
 * 
 * @returns 
 */

const ShowHide = () => {
  /**i build a state to manage a toogle of 'Item /
  const [ show, setShow ] = useState(false)

  return (
  <>
    {/**Here in this 'JSX' i build a button to set am onClick Event
     * yo toggle 'Item'
    */}
    <h2>show/hide</h2>
    <button className='btn' onClick={() => setShow(!show)}
    > show/hide </button>
    {show && <Item />}
  </>  
  );
};

/**This is the Item component */
const Item = () => {
  /**i build a state to manage window size */
const [ size, setSize ] = useState( window.innerWidth );

const checkSize = () => {
  setSize(window.innerWidth)
};

useEffect(() => {
/**if i leave this line without the celanup function, this line
 * will add resize events to my EventListener */  
window.addEventListener('resize', checkSize)
/**the return with the callback function is clean it up the sideEffect
 * of the windwow resizing because the EventListener
 *  
 *  > JavaConsole > Elements > EventListeners
  
 */
  return () =>{
    /**this line generates an EventListener with the name: resize
     * --reference
     *  > JavaConsole > Elements > EventListeners
     */

    window.addEventListener('resize', checkSize)
  }
}, [])


  return (
    /**in this 'JSX' i'll display the 'Item' data*/
    <div style={{marginTop: '2rem'}}>
      <h1>window</h1>
      <h2>size: {size} px</h2>
    </div>
  )};

export default ShowHide;

import React, { useEffect } from 'react';

/**Modal app version 2 - Modal Component - Features:
 * 
 *      -->drilling 'modalContent' from:
 *                  index.js --> Modal.js
 *         and render it
 *      
 */
const Modal = ({modalContent}) => {
  return (
  <>
    <div className='modal'>
      <p>{modalContent}</p>
    </div>
  
  </>
  );
};

export default Modal;

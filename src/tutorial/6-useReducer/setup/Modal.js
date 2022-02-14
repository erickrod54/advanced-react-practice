import React, { useEffect } from 'react';

/**Modal app version 5 - Modal Component - Features:
 * 
 *      -->drilling 'modalContent' from:
 *                  index.js --> Modal.js
 *         and render it
 *      
 */
const Modal = ({modalContent, closeModal }) => {
  
  useEffect(() => {
    setTimeout(() => {
      closeModal()
    }, 3000)
  })

  return (
  <>
    <div className='modal'>
      <p>{modalContent}</p>
    </div>
  
  </>
  );
};

export default Modal;

import React from 'react';

const ErrorExample = () => {
  const title = 'ramdom title';

  const handleClick = () => {
      const title = 'green peppers'
      console.log(title)
  }

  return (
  <>
       <h2>{title}</h2>
       <button
              type='button'
              className='btn'
              onClick={handleClick}
              >
               Change title 
             </button>
  </>
       );
};

export default ErrorExample;

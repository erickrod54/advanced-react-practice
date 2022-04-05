import styled from 'styled-components';

/**React-routerv6 Products app version 1- 'index.styles.js' 
 * Component - Features:
 * 
 *              --> Migrating firts class style 'btn' to 
 *                  Btn Style Component 
 * 
 *              --> Setting colors from 'Global Variables'.
 * 
 * Notes: as the original style is set as style classes, i have 
 * to keep them the same, and the goal is to set an element 
 * this case a JSX 'div' element to applied successfully the 
 * styles the Link 
 * 
 * The colors are bring by targeting the ':root' element on 
 * the Global css sheet, and defining each variable 'name' and 
 * 'color' value  
 * 
 * (reference index.css) 
 */

export const ErrorWrapper = styled.article`
 h3{
    text-transform: lowercase;
  }
`

export const Btn = styled.div`
  .btn{

    display: inline-block;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    padding: 0.25rem 0.75rem;
    border-radius: var(--radius);
    border-color: transparent;
    text-transform: capitalize;
    font-size: 1rem;
    letter-spacing: var(--spacing);
    margin-top: 2rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    cursor: pointer;
    transition: var(--transition);
    
  }

  .btn:hover {
  background: var(--clr-primary-1);
  color: var(--clr-primary-5);
  }
`
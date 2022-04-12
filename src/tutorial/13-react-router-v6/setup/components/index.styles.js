import styled from 'styled-components';

/**React-routerv6 Products app version 4 - 'index.styles.js' 
 * Component - Features:
 * 
 *              --> Building 'NavLinks' Style Component.
 * 
 *              --> Building 'Container' Style Component.
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

export const Btn = styled.div`
.btn {
  display: inline-block;
  background: var(--clr-orange-6);
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

export const ErrorWrapper = styled.article`
 h3{
    text-transform: lowercase;
  }
`



export const NavLinks = styled.div`
  max-width: var(--fixed-width);
  margin: 0 auto;
  margin-bottom: 4rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

export const Container = styled.div`
  width: 50vw;
  margin: 0 auto;
  max-width: var(--max-width);
`
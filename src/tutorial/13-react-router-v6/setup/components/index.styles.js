import styled from 'styled-components';

/**React-routerv6 Products app version 6 - 'index.styles.js' 
 * Component - Features:
 * 
 *              --> Building 'ProductWrapper' Component to set 
 *                  Styles for 'SingleProduct'.
 * 
 * Notes: 'ProductWrapper' has styles for JSX 'div' as well as
 * the JSX 'img' element
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
  width: 30vw;
  margin: 0 auto;
  max-width: var(--max-width);
`

export const ProductWrapper = styled.div`
  width: 90vw;
    max-width: 300px;
    background: var(--cardBackGround);
    border-radius: 0.25rem ;
    
    img {
        width: 100%;
        border-top-left-radius: 5rem;
        border-top-right-radius: 0.25rem;
        border-bottom-right-radius: 5rem;
    } 
`
import { Link } from "react-router-dom";
import styled from "styled-components";
import { NavLayout } from "./NavLayout";


export const Header = () => {
  return (
    <>
      <SHeaderNav className={BHeaderNav}>
        <STodoAppLink to='/' className={BTodoAppLink}>
          TODO_APP
        </STodoAppLink>
        <NavLayout>
          <SSubLink to='/todos' className={BSubLink}>
            TODOs
          </SSubLink>
          <SSubLink to='/oldtodos' className={BSubLink}>
            OLD TODOs
          </SSubLink>
        </NavLayout>
      </SHeaderNav>
    </>
  )
}

// ######## styled ################################################

const BHeaderNav = 'container-fluid navbar navbar-expand-lg';
const SHeaderNav = styled.nav`
  background-color: #1f1f1f;
`
const BTodoAppLink = 'navbar-brand text-warnign mx-3';
const STodoAppLink = styled(Link)`
  color :#00e5ff;
  font-size: 25px;
  font-weight: bold;
`
const BSubLink = 'nav-link nav-item mx-2';
const SSubLink = styled(Link)`
  color :#5de9f9b2;
  font-size: 18px;
  font-weight: bold;
`


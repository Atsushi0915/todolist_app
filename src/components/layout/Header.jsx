import { Link } from "react-router-dom";
import styled from "styled-components";
import { NavLayout } from "./NavLayout";
import { FaReact } from "react-icons/fa";


export const Header = () => {
  return (
    <>
      <SHeaderNav className={BHeaderNav}>
        <STodoAppLink to='/' className={BTodoAppLink}>
          <FaReact className={BFiEdit}/>
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

const BTodoAppLink = 'navbar-brand align-items-center text-warnign mx-1';
const STodoAppLink = styled(Link)`
  color :#00e5ff;
  font-size: 25px;
  font-weight: bold;
`

const BFiEdit = 'mx-2 mb-1';

const BSubLink = 'nav-link nav-item mx-2';
const SSubLink = styled(Link)`
  color :#5de9f9b2;
  font-size: 18px;
  font-weight: bold;
`


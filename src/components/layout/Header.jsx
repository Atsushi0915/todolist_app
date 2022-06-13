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
          <SOldTodoslink to='/oldtodos' className={BOldTodoslink}>OldTodos</SOldTodoslink>
        </NavLayout>
      </SHeaderNav>
    </>
  )
}

const BHeaderNav = 'container-fluid navbar navbar-expand-lg';
const SHeaderNav = styled.nav`
  background-color: #000000;
`
const BTodoAppLink = 'navbar-brand text-warnign';
const STodoAppLink = styled(Link)`
  color :#ffcc00e8;
  font-size: 25px;
  font-weight: bold;
`
const BOldTodoslink = 'nav-link';
const SOldTodoslink = styled(Link)`
  color :#ffffffe8;
`


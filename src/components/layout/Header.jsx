import { Link } from "react-router-dom";
import styled from "styled-components";
import { NavLayout } from "./NavLayout";


export const Header = () => {
  return (
    <>
      <SHeaderNav className={BHeaderNav}>
        <STodoAppLink to='/' className={BTodoAppLink}>TODO_APP</STodoAppLink>
        <NavLayout>
          <SOldTodoslink to='oldtodos' className={BOldTodoslink}>OldTodos</SOldTodoslink>
        </NavLayout>
      </SHeaderNav>
    </>
  )
}

const BHeaderNav = 'container-fluid navbar navbar-expand-lg navbar-light bg-primary';
const SHeaderNav = styled.nav`
`
const BTodoAppLink = 'navbar-brand text-light';
const STodoAppLink = styled(Link)`
`
const BOldTodoslink = 'nav-link';
const SOldTodoslink = styled(Link)`
`


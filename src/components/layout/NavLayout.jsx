import styled from "styled-components";

export const NavLayout = (props) => {
  const { children } = props;

  return (
    <>
      <Button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <Span className="navbar-toggler-icon"></Span>
      </Button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ">
          {children}
        </ul>
      </div>
    </>
  )
}

const Button = styled.button`
  background-color:#00e5ff;
  border-color:#27009e;
  
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='-4 2 40 25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0,0,0,1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
  &:hover{
    background-color:#0008ff;
    border-color:#0009bd;
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='-4 2 40 25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(100,100,100,1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
  }
`

const Span = styled.span`
  
`

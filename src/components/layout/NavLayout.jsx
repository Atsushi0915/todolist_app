export const NavLayout = (props) => {
  const { children } = props;

  return (
    <>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li className='nav-item'>
            {children}
          </li>
        </ul>
      </div>
    </>
  )
}
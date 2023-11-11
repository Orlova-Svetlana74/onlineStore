// import { NavLink } from 'react-router-dom';
// import { useContext } from 'react';
// import { Context } from '..';

// const NavBar = () => {
//   const { user } = useContext(Context);
//   return (
//     <nav className="navbar navbar-expand-lg bg-body-tertiary">
//       <div class="container-fluid">
//         <a className="navbar-brand" href="#">
//           Navbar
//         </a>
//         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//           <NavLink to={'/'}>Купи девайс!!!</NavLink>
//           <div className="navbar-nav">
//             <a className="nav-link active" aria-current="page" href="#">
//               Home
//             </a>
//             <a className="nav-link" href="#">
//               Features
//             </a>
//             <a className="nav-link" href="#">
//               Pricing
//             </a>
//             <a className="nav-link disabled" aria-disabled="true">
//               Disabled
//             </a>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };
// export default NavBar;

import React, { useContext } from 'react';
import { Context } from '../index';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import Container from 'react-bootstrap/Container';

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  // const logOut = () => {
  //   user.setUser({});
  //   user.setIsAuth(false);
  // };

  const adminBackButtonClick = () => {
    navigate('/admin', { replace: true });
  };

  const loginBackButtonClick = () => {
    navigate('/login', { replace: true });
  };
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{ color: 'white' }} to={'/'}>
          КупиДевайс
        </NavLink>
        {user.isAuth ? (
          <Nav className="ml-auto" style={{ color: 'white' }}>
            <Button variant={'outline-light'} onClick={adminBackButtonClick}>
              Админ панель
            </Button>
            <Button
              variant={'outline-light'}
              onClick={loginBackButtonClick}
              className="ml-2">
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto" style={{ color: 'white' }}>
            <Button
              variant={'outline-light'}
              onClick={() => user.setIsAuth(true)}>
              Авторизация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;

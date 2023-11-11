import { Card, Container, Form, Button, Row } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === '/login';

  return (
    <Container
      className="d-flex justify-content align-items-center"
      style={{ height: window.innerHeight - 54 }}>
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <Form className="d-flex flex-column">
          <input className="nt-2" placeholder="Введите ваш email..."></input>

          <input className="nt-2" placeholder="Введите ваш пароль..."></input>

          <Row className="d-flex justify-content-between nt-3 pl-3 pr-3">
            {isLogin ? (
              <div>
                Нет аккаунта?
                <NavLink to={'/registration'}>Зарегистрируйся!</NavLink>
              </div>
            ) : (
              <div>
                Есть аккаунт?
                <NavLink to={'/login'}>Войдите!</NavLink>
              </div>
            )}

            <Button variant={'outline-success'}>Войти</Button>
          </Row>
        </Form>
      </Card>      
    </Container>
  );
};
export default Auth;

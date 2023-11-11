import { Button, Container } from 'react-bootstrap';
import CreateType from '../components/modals/CreateType';
import CreateDevice from '../components/modals/CreateDevice';
import CreateBrand from '../components/modals/CreateBrand';

const Admin = () => {
  return (
    <Container className="d-flex flex-column">
      <Button variant={'outline-dark'} className="mt-2">
        Добавить тип
      </Button>
      <Button variant={'outline-dark'} className="mt-2">
        Добавить брэнд
      </Button>
      <Button variant={'outline-dark'} className="mt-2">
        Добавить устройство
      </Button>
      <CreateDevice />
      <CreateBrand />
      <CreateType show={true} />
    </Container>
  );
};
export default Admin;

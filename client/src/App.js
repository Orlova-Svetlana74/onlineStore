import { observer } from 'mobx-react-lite';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import { useContext, useState } from 'react';
import { Context } from '.';
// import { check } from './http/userAPI';
// import { Spinner } from 'react-bootstrap';

const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     check()
  //       .then((data) => {
  //         user.setUser(true);
  //         user.setIsAuth(true);
  //       })
  //       .finally(() => setLoading(false));
  //   }, 1000);
  // }, []);
  // if (loading) {
  //   return <Spinner animayion={'grow'} />;
  // }

  return (
    <div className="App">
      <NavBar />
      <AppRouter />
    </div>
  );
});

export default App;

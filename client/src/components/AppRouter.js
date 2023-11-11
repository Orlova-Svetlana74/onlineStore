import Admin from '../pages/Admin';
import Shop from '../pages/Shop';
import DevicePage from '../pages/DevicePage';
import Basket from '../pages/Basket';
import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '..';
import Auth from '../pages/Auth';
// import { ProtectedRoute } from '../components/protected-routs/protected-routs';
// import { authRoutes, publicRoutes } from '../routes';

// import {
//   ADMIN_ROUTE,
//   BASKET_ROUTE,
//   DEVICE_ROUTE,
//   LOGIN_ROUTE,
//   REGISTRATION_ROUTE,
//   SHOP_ROUTE,
// } from '../utils/consts';

const AppRouter = () => {
  const { user } = useContext(Context);
  console.log(user);
  // const isAuth = false;
  return (
    <Routes>
      <Route path="/login" element={<Auth />} />
      <Route path="/" element={<Shop />} />
      <Route path="/device/:id" element={<DevicePage />} />
      <Route path="/registration" element={<Auth />} />
      <Route path="/basket" element={<Basket />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
};
export default AppRouter;

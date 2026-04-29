import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavLayout from './containers/NavLayout';
import Home from './pages/Home';
import CreateAccount from './pages/CreateAccount/CreateAccount';
import NewPassword from './pages/NewPassword/NewPassword';
import PasswordRecovery from './pages/PasswordRecovery/PasswordRecovery';
import MyAccount from './pages/MyAccount/MyAccount';
import Login from './pages/Login/Login';
import SendEmail from './pages/SendEmail/SendEmail';
import Checkout from './pages/Checkout/Checkout';
import NotFound from './pages/NotFound/NotFound';
import Orders from './pages/Orders/Orders';
import AppContext from './contexts/AppContext';
import useInitialState from './hooks/useInitialState';
import { APP_ROUTES } from './constants/routes';
import './styles/global.css';

function App() {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={ initialState }>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        {/* Route constants keep navigation and route declarations in sync. */}
        <Routes>
          <Route path={APP_ROUTES.HOME} element={
            <NavLayout>
              <Home />
            </NavLayout>
          } />
          <Route path={APP_ROUTES.CREATE_ACCOUNT} element={<CreateAccount />} />
          <Route path={APP_ROUTES.NEW_PASSWORD} element={<NewPassword />} />
          <Route path={APP_ROUTES.PASSWORD_RECOVERY} element={<PasswordRecovery />} />
          <Route path={APP_ROUTES.MY_ACCOUNT} element={<MyAccount />} />
          <Route path={APP_ROUTES.LOGIN} element={<Login />} />
          <Route path={APP_ROUTES.SEND_EMAIL} element={<SendEmail />} />
          <Route path={APP_ROUTES.CHECKOUT} element={<Checkout />} />
          <Route path={APP_ROUTES.ORDERS} element={<Orders />} />
          <Route path={APP_ROUTES.NOT_FOUND} element={<NotFound />} />
        </Routes>
    </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;

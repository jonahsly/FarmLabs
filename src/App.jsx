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
import './styles/global.css';

function App() {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={ initialState }>
    <BrowserRouter>
        <Routes>
          <Route path='FarmLabs' element={
            <NavLayout>
              <Home />
            </NavLayout>
          } />
          <Route path='FarmLabs/create-account' element={<CreateAccount />} />
          <Route path='FarmLabs/new-passwrod' element={<NewPassword />} />
          <Route path='FarmLabs/password-recovery' element={<PasswordRecovery />} />
          <Route path='FarmLabs/my-account' element={<MyAccount />} />
          <Route path='FarmLabs/login' element={<Login />} />
          <Route path='FarmLabs/send-email' element={<SendEmail />} />
          <Route path='FarmLabs/checkout' element={<Checkout />} />
          <Route path='FarmLabs/orders' element={<Orders />} />
          <Route path='FarmLabs/*' element={<NotFound />} />
        </Routes>
    </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
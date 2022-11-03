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
          <Route path='/' element={
            <NavLayout>
              <Home />
            </NavLayout>
          } />
          <Route path='create-account' element={<CreateAccount />} />
          <Route path='new-passwrod' element={<NewPassword />} />
          <Route path='password-recovery' element={<PasswordRecovery />} />
          <Route path='my-account' element={<MyAccount />} />
          <Route path='login' element={<Login />} />
          <Route path='send-email' element={<SendEmail />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='orders' element={<Orders />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
    </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
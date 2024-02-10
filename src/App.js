import React, { useContext } from 'react';
import { createBrowserRouter, RouterProvider, Route, Outlet, Navigate, } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Navbar from './Components/Navbar/Navbar';
import LeftBar from './Components/LeftBar/LeftBar';
import RightBar from './Components/RightBar/RightBar';
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';
import { DarkModeContext } from './Context/DarkModeContext';
import { AuthContext } from './Context/AuthContext';
import './style.scss';

const App = () => {

  const { currentUser } = useContext(AuthContext);
  const { darkMode } = useContext(DarkModeContext);

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? 'dark' : 'light'}`}>
        <Navbar />
        <div style={{ display: 'flex' }}>
          <LeftBar />
          <div style={{ flex: '6' }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    )
  }

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to='/login' />
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: '/',
          element: <Home />
        },

        {
          path: '/profile/:id',
          element: <Profile />
        },
      ]
    },

    {
      path: '/login',
      element: <Login />
    },

    {
      path: '/register',
      element: <Register />
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
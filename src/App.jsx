import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './LoginPage.jsx';
import Dashboard from './Dashboard.jsx';
import useToken from './useToken';


function App() {

  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <>
      <div>
        {/* <LoginPage /> */}

        <h1>App</h1>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App

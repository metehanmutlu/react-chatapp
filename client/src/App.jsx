import './App.css';
import { useEffect } from 'react';
import { init } from './api/socketApi'
import Chat from './components/Chat/Chat';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login/Login';
import { UserProvider } from './contexts/UserContext';
import NotFound from './components/NotFound/NotFound';
// import Register from './components/Register/Register';


function App() {
  useEffect(() => {
    init()
  }, [])

  return (
    <div className="App">
      <UserProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/chat' element={<Chat />} />
            {/* <Route path='/register' element={<Register />} /> */}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;

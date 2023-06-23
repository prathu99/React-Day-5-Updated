import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { CreateUser } from './CreateUser';
import { ListUsers } from './ListUsers';
import { AppBar, Button, Toolbar } from '@mui/material';
import { HomePage } from './HomePage';
import { useState } from 'react';


//Design an UI to implement the CRUD // CRUD - Create,Read,Update,Delete // Dashboard // List Users - /users // Create User - /create-user 
// Edit User - /edit-user/:id // profile - /profile/:id // edit-profile – /edit-profile/:id

function App() {

  const [users, setUsers] = useState([{
    name: "Rajendran",
    email: "rajendrankr25@gmail.com",
    phone: "9176227713"
  },
  {
    name: "Selvakumari",
    email: "selvakumari@gmail.com",
    phone: "1234567890"
  }
  ]);

  const navigate = useNavigate();

  return (
    <div className="App">
      <AppBar position="static" color='error'>
        <Toolbar>
          <Button color="inherit" onClick={() => navigate("/")}>Home</Button>
          <Button color="inherit" onClick={() => navigate("/users")}>Users</Button>
          <Button color="inherit" onClick={() => navigate("/create-user")}>Create User</Button>
        </Toolbar>
      </AppBar>
      <h1>User Dashboard</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<ListUsers users={users} />} />
        <Route path="/create-user" element={<CreateUser users={users} setUsers={setUsers} />} />
      </Routes>
    </div>
  );
}

export default App;

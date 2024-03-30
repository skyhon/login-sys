//import React from 'react';
import Button from './Components/Button/Buttons';
import Login from './Components/Login/Login';
import RegisterForm from './Components/RegisterForm/RegisterForm';

function App() {
  return (
    <>
      <Button onClick={()=>{alert ('hello');}}>Hello</Button>
      <Login />
      <RegisterForm />
    </>
    
  );
}

export default App;

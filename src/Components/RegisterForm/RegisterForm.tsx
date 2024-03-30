import React, { useState } from 'react';
import {auth} from '../../config';
import {createUserWithEmailAndPassword} from 'firebase/auth';

const RegisterForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('User registered successfully');
      // Redirect to another page or perform other actions
    } catch (error:any) {
      console.error('Error registering user:', error.message);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default RegisterForm;

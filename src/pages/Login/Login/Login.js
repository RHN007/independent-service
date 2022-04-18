import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
   const emailRef = useRef('');
   const passwordRef = useRef('');
   const navigate = useNavigate()

   const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(auth);


   let errorElement;

  

const location = useLocation()
   let from = location.state?.from?.pathname || "/";

   const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  if(user){
    navigate(from, { replace: true });
  }
  if (error) { 
    errorElement= 
       <p className='text-danger'>Error: {error?.message} </p>
         
 }


   const handleSubmit = event => {
       event.preventDefault();
       const email = emailRef.current.value; 
       const password = passwordRef.current.value; 

       signInWithEmailAndPassword(email, password)
      
   }

   const navigateRegister = event => {
        navigate('/register')
   }

   const forgetPassword = async () => {
    const email = emailRef.current.value;
    
    if(email){
      await sendPasswordResetEmail(email);
      alert('Sent email');

    }
    
    
  }
   
   
    return (
        <div className='container w-50 mx-auto'>
            <h2>Please Login </h2>
            <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    
    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
   
    <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
    Login
  </Button>
</Form>
{errorElement}
<p>New to our Service ?<Link to='/register' className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link> </p>
<p>Forget Your Password ?<button  className=' btn btn-link text-primary pe-auto text-decoration-none' onClick={forgetPassword}>Reset Password</button> </p>
<SocialLogin></SocialLogin>  
  
      
      
</div>
    );
};

export default Login;
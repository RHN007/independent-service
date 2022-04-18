import React from 'react';
import google from '../../../images/icon/Google.png'
import facebook from '../../../images/icon/facebook_logos_PNG19757.png'
import github from '../../../images/icon/github_PNG40.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate(); 
    
    let errorElement;    
    if (error || error1) { 
         errorElement=  <p className='text-danger'>Error: {error?.message} {error1?.message}</p>        
      }
    if(user || user1) {
        navigate('/home')
    }

    return (
        <div>
            <div className='d-flex align-items-center '>
                <div style={{height:'1px'}} className='bg-primary w-50'></div>
                <p className="mt-2 px-2">or</p>
                <div style={{height:'1px'}} className='bg-primary w-50' ></div>
            </div>

            {errorElement}

            <div>
                    <button 
                    onClick = {() => signInWithGoogle()}
                    className='btn btn-info d-block w-50 mx-auto my-2'>
                    <img src={google} alt="" />
                     <span className='px-2'>Google Sing In </span> 
                    </button>

                    <button className='btn btn-info d-block w-50 mx-auto my-2'>
                    <img src={facebook} height='30' alt="" />
                     <span className='px-2'>Facebook Sing In </span> 
                    </button>


                    <button onClick={() => signInWithGithub()} className='btn btn-info d-block w-50 mx-auto my-2'>
                    <img src={github} height='30' alt="" />
                     <span className='px-2'>Github Sing In </span> 
                    </button>
            </div>
        </div>
    );
};

export default SocialLogin;
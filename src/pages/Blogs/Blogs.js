import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='text-center'>
            <article>
                <h1>Authentication vs. Authorization</h1>
                <p>Authentication verifies who the user is where Authorization determines what resources a user can access.</p>
                <p>Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user where Authorization works through settings that are implemented and maintained by the organizationd.</p>
                <p>Authentication is the first step of a good identity and access management process. where Authorization always takes place after authentication.</p>
            </article>
            <article>
                <h1> Services does firebase provide other than authentication</h1>
                <p>
                    1.Real Time data Base Service . 
                   <br /> 
                   2. Cloud Firestore
                   <br />
                   3. Storage Service 
                   <br />
                   4. Machine Learning
                   <br />
                   5. Hosting
                </p>


            </article>
        </div>
    );
};

export default Blogs;
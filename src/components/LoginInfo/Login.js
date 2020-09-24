import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Google from '../../images/Google.png';
import Fb from '../../images/Fb.png';
import './SignUp.css';
import { UserContext } from '../../App';
import { createUserWithEmailAndPassword, handleFbSignin, handleGoogleSignin, initializeLoginFramework, signInWithEmailAndPassword } from './FirebaseInfo';

const Login = () => {

    const [newUser, setNewUser] = useState(false);

    const [user, setUser] = useState({
        isSignedIn : false,
        name: '',
        email: '',
        password: ''
    })

    initializeLoginFramework();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/details" } };

    const googleSignin = () => {
        handleGoogleSignin()
        .then(res => {
            setUser(res);
            setLoggedInUser(res);
            history.replace(from);
        })
    }

    const fbSignin = () => {
        handleFbSignin()
        .then(res => {
            setUser(res);
            setLoggedInUser(res);
            history.replace(from);
        })
    }
    
    const handleBlur = (event) => {
        let isFieldValid = true;
        if(event.target.name === 'email'){
            isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
            if (isFieldValid === false){
                const newUserInfo = {...user};
                newUserInfo.error = "Invalid email! Please enter a valid email.";
                setUser(newUserInfo);
            }
        }
        if (event.target.name === 'password') {
            const isPasswordValid = event.target.value.length > 6;
            const passwordHasNumber =  /\d{1}/.test(event.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
            if (isFieldValid === false) {
                const newUserInfo = { ...user };
                newUserInfo.error = "Password should be more than 6 characters and contains at least one number.";
                setUser(newUserInfo);
            }
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[event.target.name] = event.target.value;
            newUserInfo.error = '';
            setUser(newUserInfo);
        }
    }

    const handleSubmit = (event) => {
        if(newUser && user.email && user.password){
            createUserWithEmailAndPassword(user.name, user.email, user.password)
            .then(res => {
                setUser(res);
                setLoggedInUser(res);
                history.replace(from);
            })
        }
        event.preventDefault();
    }

    const handleSignIn = event => {
        if(!newUser && user.email && user.password){
            signInWithEmailAndPassword(user.email, user.password)
            .then(res => {
                setUser(res);
                setLoggedInUser(res);
                history.replace(from);
            })
        }
        event.preventDefault();
    }
    

    return (
        <div>
            <Navbar></Navbar>
            <div className="container login-form mt-5">
            {newUser ? <h1 className="mb-5">Create an account</h1> : <h1 className="mb-5">Login</h1>}
                <form className="form-details mt-5" onSubmit={newUser ? handleSubmit : handleSignIn}>

                    { newUser &&
                        <>
                            <label>UserName</label>
                            <input type="text" name="name" onBlur={handleBlur} placeholder="Enter your UserName" required/>
                        </>
                    }

                    <label>Email </label>
                    <input type="text" name="email" onBlur={handleBlur} placeholder="Enter your Email" required/>

                    <label>Password</label>
                    <input type="password" name="password" onBlur={handleBlur} placeholder="Password" required/>

                    { newUser &&
                        <>
                            <label>Confirm Password</label>
                            <input type="password" name="password" onBlur={handleBlur} placeholder="Confirm Password" required/>
                        </>
                    }
                
                    {newUser ? <input type="submit" value="Submit"/> : <input type="submit" value="Login"/>}
                    

                    <p style={{textAlign: 'center'}}><small>{newUser ? 'Already have an account?' : "don't have an account?"}</small><span style={{color: 'blue', cursor: 'pointer'}} onClick={() => setNewUser(!newUser)}>{newUser ? 'Login' : 'Create an account'}</span></p>
                             
                    
                </form>

                {user.error && <p style={{ color: 'red', textAlign: 'center' }}>{user.error}</p>}

                <button className="google-details mt-3 ml-5" onClick={googleSignin}>
                    <div className="row google-btn">
                        <div className="col-2 mt-2">
                            <img src={Google} alt="" style={{width:"20px"}}/>
                        </div>
                        <div className="col-10 mt-2">
                            <p>Continue with Google</p>
                        </div>
                    </div>
                </button>
                <button className="google-details mt-3 ml-5 mb-5" onClick={fbSignin}>
                    <div className="row google-btn">
                        <div className="col-2 mt-2">
                            <img src={Fb} alt="" style={{width:"20px"}}/>
                        </div>
                        <div className="col-10 mt-2">
                            <p>Continue with Facebook</p>
                        </div>
                    </div>
                </button>
            </div>
            
        </div>

    );
};

export default Login;
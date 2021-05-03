//* LOGIN FORM COMPONENT *//
import './LoginForm.css'


import Footer from "../Footer/index"

//todo: import all the necessary hooks and actions
import React, { useState } from 'react';
import * as sessionActionCreators from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

//todo: Functional component for the login page
function LoginFormPage() {
    //? All the the react-redux hooks:
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    //? useState hooks:
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([]);

    //? React-router
    const history = useHistory()

    if (sessionUser) history.push(`/profile/${sessionUser.id}`);

    //? Handle submit custom event handler:
    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors([]);
        return dispatch(sessionActionCreators.login({ credential, password }))
                .catch(async res => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors)
                })
            }
            //? JSX Form for login:
            return (
<>
            <div className="form-main-body-login">
                <div className="welcome-back-login-msg"></div>
                    <div id="img-div-login">
                    <div id="form-div-login">
                    {
                    errors.length > 0 ?
                        <div className="error-ul-div">
                        <ul>
                            {errors.map((error, index) => {
                                return<li key={index}>— {error}</li>
                            })}
                        </ul>
                     </div>

                     :

                     null
                }
                    <form className="formLogin" onSubmit={handleSubmit}>
                            <label>
                                Username or Email
                                <input
                                    className="input1"
                                    type="text"
                                    value={credential}
                                    onChange={(e) => setCredential(e.target.value)}
                                    required
                                />
                            </label>
                            <label>
                                    Password
                                    <input
                                        className="input2"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                            </label>
                            <button
                            className="login-form-btn"
                            type="submit" >Log In</button>
                             <div className="error-ul">
                         </div>
                    </form>
                        <div id="demo-btn-div">
                            <button
                            className="demo-user-btn"
                                onClick={() => dispatch(sessionActionCreators.demoUserLogin())}
                            >
                                Demo Login</button>
                        </div>
                    </div>
                </div>
                    <Footer />
            </div>
</>
            )
}

export default LoginFormPage;

//* SIGNUP FORM COMPONENT *//
import './SignupForm.css'
import Footer from "../Footer/index"
// import apod2 from "../../imgs/apod2.jpg"

//todo: import all the necessary hooks and actions
import React, { useState } from 'react';
import * as sessionActionCreators from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

function SignupPage() {
    //? All the the react-redux hooks:
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    //? useState hooks:
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState([]);


    //? React-router
    const history = useHistory()

    // if (sessionUser) history.push("/");
    if (sessionUser) history.push(`/profile/${sessionUser.id}`);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
          setErrors([]);
          return dispatch(sessionActionCreators.signup({ firstName, lastName, email, username, password }))
            .catch(async (res) => {
              const data = await res.json();
              if (data && data.errors) setErrors(data.errors);
            });
        }
        return setErrors(['Confirm Password field must be the same as the Password field']);
      };

      return (
        <>
        <div className="form-main-body">
          <div id="img-div">
          <div id="form-div">
          {
                    errors.length > 0 ?
                        <div className="error-ul-div-sign-up">
                        <ul>
                            {errors.map((error, index) => {
                                return<li key={index}>— {error}</li>
                            })}
                        </ul>
                     </div>

                     :

                     null
                }
          <form className="formSignup" onSubmit={handleSubmit}>
          <label>
              Sign up for Spacr
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder={`First name`}
              required
            />
          </label>
          <label>
            <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder={`Last name`}
            required
            />
          </label>
          <label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={`Email address`}
              required
            />
          </label>
          <label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder={`Username`}
              required
            />
          </label>
          <label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={`Password`}
              required
            />
          </label>
          <label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder={`Confirm password`}
              required
            />
          </label>
          <div id="after-form">
          <button type="submit">Sign Up</button>
          <div id="login-btn">
            <h4>Already a member of Spacr?</h4>
              <p>
                  <Link key={`login_btn`} to="/login">The log in page, Master Jedi</Link>
              </p>
          </div>
          </div>
            </form>
          </div>
          </div>
        <Footer />
        </div>
        </>
      );
    }

export default SignupPage;

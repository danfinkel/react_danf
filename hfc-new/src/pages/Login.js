import React, { useState } from 'react';
import PropTypes from 'prop-types';


async function loginUser(credentials) {
  return fetch('http://localhost:3001/api/users/login/', {  
   method: 'POST',
   headers: {
     'Content-Type': 'application/json',
   },
   credentials: 'include',
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}

export default function Login({ setToken }) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [alert, setAlert] = useState();

    const handleSubmit = async e => {
      setAlert("")
      e.preventDefault();
      try {
          const uname = await loginUser({
                email,
                password
              });
          console.log(uname)
          setToken(uname?.userName);
        }
      catch (error) {
        console.log(error)
        setAlert('Your credentials were not entered correctly. Please try again.')
        // window.location.href = '/login'
      }
    }

    return (
        <div className="content">
            <form className="pure-form pure-form-stacked" onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Sign in for HFC Website</legend>
                    <label htmlFor="stacked-email">Email</label>
                    <input type="email" id="stacked-email" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
                    <span className="pure-form-message">This is a required field.</span>
                    <label htmlFor="stacked-password">Password</label>
                    <input type="password" id="stacked-password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                    <label htmlFor="stacked-remember" className="pure-checkbox">
                        <input type="checkbox" id="stacked-remember" /> Remember me
                    </label>
                    <button type="submit" className="pure-button pure-button-primary">Sign in</button>
                </fieldset>
            </form>
            <h2>{alert}</h2>
        </div>
        )
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}
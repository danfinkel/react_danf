import React, { useState } from 'react';
import PropTypes from 'prop-types';


async function loginUser(credentials) {
 return fetch('http://localhost:3001/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}

export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
      e.preventDefault();
      const token = await loginUser({
        username,
        password
      });
      console.log(token)
      setToken(token);
    }    

    return (
        <div className="content">
            <form className="pure-form pure-form-stacked" onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Sign in for HFC Website</legend>
                    <label htmlFor="stacked-email">Email</label>
                    <input type="email" id="stacked-email" placeholder="Email" onChange={e => setUserName(e.target.value)}/>
                    <span className="pure-form-message">This is a required field.</span>
                    <label htmlFor="stacked-password">Password</label>
                    <input type="password" id="stacked-password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                    <label htmlFor="stacked-remember" className="pure-checkbox">
                        <input type="checkbox" id="stacked-remember" /> Remember me
                    </label>
                    <button type="submit" className="pure-button pure-button-primary">Sign in</button>
                </fieldset>
            </form>
        </div>
        )
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}
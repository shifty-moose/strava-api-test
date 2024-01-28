import React, { useState } from "react";
import PropTypes from "prop-types";

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(data => data.json())
};

const Login = ( {setToken} ) => {

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
        console.log(token);
        setToken(token);
      }

    return (
        <>
            <h1>Login Page</h1>

            <form className="loginForm" onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="username" name="username" onChange={e => setUserName(e.target.value)} />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" onChange={e => setPassword(e.target.value)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </>
    );
};

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};

export default Login;
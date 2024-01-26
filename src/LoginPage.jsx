import React from "react";

const LoginPage = () => {

    return (
        <>
            <h1>Login Page</h1>

            <form className="loginForm">
                <label>
                    Email:
                    <input type="email" name="email" />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </>
    );

};

export default LoginPage;
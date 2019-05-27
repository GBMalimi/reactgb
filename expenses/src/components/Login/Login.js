import React from "react";
import "./Login.css"

export class Login extends React.Component {
    render() {
        return (
            <section>
                <div className="login">
                    <div>
                        <form className="header_login">
                            <label className="input_label">E-mail</label>
                            <input className="input_fields" type="email" />
                            <label className="input_label">Password</label>
                            <input className="input_fields" type="password" />
                            <button className="submit">SIGN IN</button>
                            <p className="p_register"> Or if you don't have an account,
                                    <a className="link" href="./register">Register</a>
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}
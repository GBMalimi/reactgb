import React from "react";
import "./Login.css"

export class Login extends React.Component {
    render() {
        return (
            <section>
                <div class="Login">
                    <div>
                        <form className="header_login">
                            <label className="input_label">E-mail</label>
                            <input className="input_fields" type="email" />
                            <label className="input_label">Password</label>
                            <input className="input_fields" type="password" />
                            <input className="submit" type="submit" value="SIGN IN" />
                        </form>
                        <p className="p_register"> Or if you don't have an account,
                                    <a className="link" href="./Register.html">Register</a>
                        </p>
                    </div>
                </div>
            </section>
        )
    }
}
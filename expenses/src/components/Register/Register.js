import React from "react";
import "./Register.css"

export class Register extends React.Component {
    render() {
        return (
            <section>
                <div id="login">
                    <form className="header_register">
                        <label className="input_label">First Name</label>
                        <input className="input_fields" type="text" />

                        <label className="input_label">Last Name</label>
                        <input className="input_fields" type="text" />

                        <label className="input_label">E-mail</label>
                        <input className="input_fields" type="email" />

                        <label className="input_label">Date of Birth</label>
                        <input className="input_fields" type="date" />

                        <label className="input_label">Telephone</label>
                        <input className="input_fields" type="number" />

                        <label className="input_label">Country</label>
                        <input className="input_fields" type="text" />

                        <label className="input_label">Password</label>
                        <input className="input_fields" type="password" />

                        <input className="submit" type="submit" value="REGISTER" />
                        <p className="p_signin">Or if you already have an account, <a className="link" href="./Login.html">Sing in</a></p>
                    </form>



                </div>
            </section>
        )
    }
}
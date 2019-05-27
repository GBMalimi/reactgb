import React from "react";
import { NavLink } from "react-router-dom"

import "./Register.css"
import Axios from "axios";

export class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      birthDate: "",
      telephone: "",
      country: "",
      password: "",
    }

    this.HandleFieldsChange = this.HandleFieldsChange.bind(this);
    this.RegisterUser = this.RegisterUser.bind(this);
  }

  RegisterUser() {
    let data = {
      "firstName": this.state.firstName,
      "lastName": this.state.lastName,
      "email": this.state.email,
      "birthDate": this.state.birthDate,
      "telephone": this.state.telephone,
      "country": this.state.country,
      "password": this.state.password,
    }

    var formData = new FormData();
    formData.append("firstName", this.state.firstName);
    formData.append("lastName", this.state.lastName);
    formData.append("email", this.state.email);
    formData.append("birthDate", this.state.birthDate);
    formData.append("telephone", this.state.telephone);
    formData.append("country", this.state.country);
    formData.append("password", this.state.password);


    Axios.post("http://localhost:3000/register", {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      birthDate: this.state.birthDate,
      telephone: this.state.telephone,
      country: this.state.country,
      password: this.state.password
    })

      //   fetch("http://localhost:8005/register", {
      //     mode: "cors",
      //     method: "POST",
      //     body: JSON.stringify({
      //       "firstName": "Mario",
      //       "lastName": "Petkovski",
      //       "email": "mario5etkovski@gmail.com",
      //       "birthDate": "18.07.1993",
      //       "telephone": "54654654",
      //       "country": "Macedonia",
      //       "password": "mario123",
      //     }),

      //   })
      .then((res) => console.log("REGISTER RESULT: ", res))
      .catch((err) => console.error(err));

  }

  HandleFieldsChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <section>
        <div id="login">
          <div className="header_register">
            <label className="input_label" htmlFor="firstName">First Name</label>
            <input onInput={this.HandleFieldsChange} name="firstName" className="input_fields" type="text" />
            <label className="input_label" htmlFor="lastName">Last Name</label>
            <input onInput={this.HandleFieldsChange} name="lastName" className="input_fields" type="text" />
            <label className="input_label" htmlFor="email" >E-mail</label>
            <input onInput={this.HandleFieldsChange} name="email" className="input_fields" type="text" />
            <label className="input_label" htmlFor="birthDate">Date of Birth</label>
            <input onInput={this.HandleFieldsChange} name="birthDate" className="input_fields" type="text" />
            <label className="input_label" htmlFor="telephone">Telephone</label>
            <input onInput={this.HandleFieldsChange} name="telephone" className="input_fields" type="text" />
            <label className="input_label" htmlFor="country">Country</label>
            <input onInput={this.HandleFieldsChange} name="country" className="input_fields" type="text" />
            <label className="input_label" htmlFor="password">Password</label>
            <input onInput={this.HandleFieldsChange} name="password" className="input_fields" type="text" />
            <button onClick={this.RegisterUser} className="submit" value="REGISTER">REGISTER</button>
            <p className="p_signin">Or if you already have an account,
                            <NavLink className="link" to="./">Sing in</NavLink></p>
          </div>
        </div>
      </section>
    )
  }
}
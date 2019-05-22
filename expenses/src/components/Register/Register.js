import React from "react";
import "./Register.css"

export class Register extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          firstname: "",
          lastname: "",
          email: "",
          birthdate: "",
          telephone: "",
          country: "",
          password: "",
        }
    
        this.HandleFieldsChange = this.HandleFieldsChange.bind(this);
        this.RegisterUser = this.RegisterUser.bind(this);
      }

      RegisterUser() {
        // let data = {
        //   "firstname": this.state.firstname,
        //   "lastname": this.state.lastname,
        //   "email": this.state.email,
        //   "birthdate": this.state.birthdate,
        //   "telephone": this.state.telephone,
        //   "country": this.state.country,
        //   "password": this.state.password,
        // }
    
        fetch("http://localhost:8005/register", {
          mode: "cors",
          method: "POST",
          body: JSON.stringify({
            "firstName": "Mario",
            "lastName": "Petkovski",
            "email": "mario5etkovski@gmail.com",
            "birthDate": "18.07.1993",
            "telephone": "54654654",
            "country": "Macedonia",
            "password": "mario123",
          }),
          
        })
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
                        <button onClick={this.RegisterUser} className="submit" value="REGISTER"></button>
                        <p className="p_signin">Or if you already have an account,
                            <a className="link" href="./">Sing in</a>
                        </p>
                    </div>
                </div>
            </section>
        )
    }
}
import React,
    {
    Component
}

from "react";
import "./SignIn.css";



class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state= {}

        ;
    }

    render() {
        function sendLoginRequest() {

        }

        return (<div> <input className="login-page__sign-in__text"
            type="text"
            placeholder="Почта, имя пользователя"
            /> <input className="login-page__sign-in__text"
            type="password"
            placeholder="Вводи пароль"
            />
            <button id="submit" className="login-page__sign-in__button" onClick={() => sendLoginRequest()}>Вхожу</button>
        </div>);
    }
}

export default SignIn;
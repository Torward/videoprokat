import React, { Component } from "react";
import Grid from "@mui/material/Grid";
import "./LoginPage.css";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: true,
    };
  }
  changeLoginState = () => {
    if (this.state.isLogin) this.setState({ isLogin: false });
    else this.setState({ isLogin: true });
  };

  render() {
    return (
      <Grid container>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <div className="login-page__main">
            <div>
              {/*<img src={inst_image} width="454px" alt="" />*/}
            </div>
            <div>
              <div className="login-page__right-component">
                <span className="login-page__logo">КИНОПРОКАТ</span>
                <div className="login-page__sign-in">
                  {this.state.isLogin ? <SignIn /> : <SignUp />}

                  <div className="login-page__ordiv">
                    <div className="login-page__divider"></div>
                    <div className="login-page__divider-text">ИЛИ</div>
                    <div className="login-page__divider"></div>
                  </div>
                  <div className="login-page__google">
                    {/*<button className="google__google-btn" type="button">*/}
                    {/*  <img src={go} alt="" /> Продолжить с Google*/}
                    {/*</button>*/}
                  </div>
                  <div className="login-page__forgot-password">
                    Забыл пароль?
                  </div>
                </div>
              </div>

              <div className="login-page__signup-option">
                {this.state.isLogin ? (
                  <div className="login-page__sign-in-prop">
                    <span>
                      Ты ещё не с нами?{" "}
                      <button onClick={this.changeLoginState}>
                        Регистрируйся!
                      </button>
                    </span>
                  </div>
                ) : (
                  <div className="login-page__sign-up-prop">
                    Есть регистрация?{" "}
                    <button onClick={this.changeLoginState}>Входи.</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    );
  }
}

export default LoginPage;

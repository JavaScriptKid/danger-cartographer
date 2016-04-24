import React from 'react'
import { connect } from 'react-redux'
import {setUserValue} from '../action-creators/action-creators'

@connect((state, props) => {
    return {
        firebaseUrl: state.user.firebaseUrl
    }
})

class LoginForm extends React.Component {

    constructor() {
        super();
        this.state = {
            hasError: false
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        var ref = new Firebase(this.props.firebaseUrl);
        ref.authWithPassword({
            email    : this.refs.email.value,
            password : this.refs.password.value
        }, (error, userData) => {

            if (error) {
                this.setState({
                    hasError: true
                })
            } else {
                //Success
                //console.log(userData)
                setUserValue({
                    isLoggedIn: true,
                    userEmail: userData.password.email /* firebase "password" type of User */
                })
            }

        });
    }

    renderError() {
        if (this.state.hasError) {
            return (
                <div className="login-form_error-text">Incorrect Email / Password combination</div>
            )
        }
        return null;
    }

    render() {
        return (
            <div className="login-form" onSubmit={::this.handleSubmit}>
                <div className="login-form_title">Log In</div>
                <form>
                    <div className="login-form_field">
                        <label>Email</label>
                        <input ref="email" type="email" placeholder="Your Email"/>
                    </div>
                    <div className="login-form_field">
                        <label>Password</label>
                        <input ref="password" type="password" placeholder="Your Password"/>
                    </div>
                    <div className="login-form_field">
                        <input type="submit" />
                    </div>
                </form>
                {this.renderError()}
            </div>
        );
    }
}

export default LoginForm;
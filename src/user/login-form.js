import React from 'react'
import { connect } from 'react-redux'

@connect((state, props) => {
    return {
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
        e.preventDefault()
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
                        <input type="email" placeholder="Your Email"/>
                    </div>
                    <div className="login-form_field">
                        <label>Password</label>
                        <input type="password" placeholder="Your Password"/>
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
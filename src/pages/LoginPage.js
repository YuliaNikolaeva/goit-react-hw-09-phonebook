import React, { Component } from 'react';
import { connect }  from 'react-redux';

import authOperations from '../redux/auth/auth-operations';

import { Button } from 'react-bootstrap';
import s from './LoginPage.module.css';
import Container from '../components/Container';


const {login} = authOperations;


class LoginPage extends Component {
    state = {
        email: '',
        password: '',
    };

    handleChange = ({target: {name, value}}) => {
        this.setState({[name]: value})
      };

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.onLogin(this.state);

        this.setState({name: '', email: '', password: ''})
    };

    render() {
        const {email, password} = this.state;

        return (
            <Container title="Authorization page">
                <form
                    autoComplete="off"
                    onSubmit={this.handleSubmit}
                    >
                    <label className={s.label}>
                        <div className={s.head__field}>E-mail</div>
                        <input
                            className={s.input} 
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                        />
                    </label>

                    <label>
                        <div className={s.head__field}>Pass</div>
                        <input
                            className={s.input} 
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                        />
                    </label>
                    <Button type="submit">Enter</Button>
                </form>
            </Container>
        );
    }
 }


 const mapDispatchToProps = dispatch => ({
     onLogin: (credentials) => dispatch(login(credentials)),
 });

 
export default connect(null, mapDispatchToProps)(LoginPage);
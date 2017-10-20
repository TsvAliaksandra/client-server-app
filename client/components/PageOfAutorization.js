import React from 'react';
import {Link} from 'react-router-dom';
import {signinUser, loginIn} from '../actions/authAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import validateInput from '../../server/validations/signinValidator';
import TextField from 'material-ui/TextField';
import RaisedButton from "material-ui/RaisedButton";


class PageOfAuth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
            errors: {},
            msg: null
        };
    }

    isValid() {
        const {errors, isValid} = validateInput(this.state);
        if (!isValid) {
            this.setState({errors});
            this.setState({msg: null});
        }
        if (isValid) {
            this.setState({errors: {}});
            this.props.loginIn(this.state.login, this.state.password);

            this.props.signinUser(this.state).then(
                () => {
                    this.props.history.push('/users');
                },
                () => {
                    this.setState({msg: 'Login or password is not valid'});
                }
            );
            this.setState({msg: null});
        }
        return isValid;
    }

    setUsers() {
        this.isValid();
    }

    startSearch(e) {
        e.preventDefault();
    }

    setLogin(e) {
        this.setState({login: e.target.value});
    }

    setPsw(e) {
        this.setState({password: e.target.value});
    }

    render() {
        return (
            <div className='main'>
                <form onSubmit={this.startSearch.bind(this)}>

                    <TextField
                        hintText='Login'
                        onChange={this.setLogin.bind(this)}
                        value={this.state.login}
                        errorText={this.state.errors.login}
                    /><br/>

                    <TextField
                        hintText='Password'
                        onChange={this.setPsw.bind(this)}
                        value={this.state.password}
                        type='password'
                        errorText={this.state.errors.password}
                    /><br/>


                    {(this.state.msg !== 'success' ) && <div style={{color: 'red'}}>{this.state.msg}</div>}

                    <Link to='/signup'>
                        <span className='signup'>Sign Up</span>
                    </Link>


                    {(!!this.state.login && !!this.state.password && this.state.msg === 'success') ?
                        <Link to="/users">
                            <RaisedButton label='Sign in'
                                          onClick={this.setUsers.bind(this)}
                                          className='btn'
                                          primary/>
                        </Link>
                        :
                        <Link to="/">
                            <RaisedButton label='Sign in'
                                          onClick={this.setUsers.bind(this)}
                                          className='btn'
                                          type='submit'
                                          primary/>
                        </Link>
                    }
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {testStore: state};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({signinUser, loginIn}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PageOfAuth);
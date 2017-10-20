import  React from 'react';
import {signupUser,signupAction} from '../actions/signupAction';
import {connect} from'react-redux';
import {bindActionCreators} from "redux";
import {Link} from 'react-router-dom';
import validateInput from '../../server/validations/signupValidator';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


class PageOfRegistration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
            name: '',
            age: '',
            errors: {}
        };
    }

    isValid() {
        const {errors, isValid} = validateInput(this.state);
        if (!isValid) {
            this.setState({errors});
        }
        if (isValid) {
            this.setState({errors: {}});
            if (!isNaN(this.state.age) && this.state.age) {
                this.props.signupUser(this.state);
                this.props.signupAction(this.state.login, this.state.password, this.state.name, this.state.age);
            }
        }
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

    setName(e) {
        this.setState({name: e.target.value});
    }

    setAge(e) {
        this.setState({age: e.target.value});
    }

    render() {
        return (
            <div className='main'>
                <div className='reg'>Registration</div>
                <form onSubmit={this.startSearch.bind(this)}>
                    <TextField
                        hintText='Login'
                        floatingLabelFixed={true}
                        onChange={this.setLogin.bind(this)}
                        value={this.state.login}
                        errorText={this.state.errors.login}
                    /><br />

                    <TextField
                        hintText='Password'
                        floatingLabelFixed={true}
                        onChange={this.setPsw.bind(this)}
                        value={this.state.password}
                        type='password'
                        errorText={ this.state.errors.password}
                    /><br />

                    <TextField
                        hintText='Name'
                        floatingLabelFixed={true}
                        onChange={this.setName.bind(this)}
                        value={this.state.name}
                        errorText={this.state.errors.name}
                    /><br />

                    <TextField
                        hintText='Age'
                        floatingLabelFixed={true}
                        onChange={this.setAge.bind(this)}
                        value={this.state.age}
                        errorText={this.state.errors.age}
                    /><br />

                    <Link to='/'>
                        <span className='signup'>Sign In</span>
                    </Link>

                    { (!!this.state.login && !!this.state.password && !!this.state.name && this.state.age && !isNaN(this.state.age)) ?
                        <Link to='/'>
                            <RaisedButton label='Sign up'
                                          onClick={this.setUsers.bind(this)}
                                          className='btn'
                                          primary/>
                        </Link>
                        :
                        <Link to='/signup'>
                            <RaisedButton label='Sign up'
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
    return bindActionCreators({signupUser, signupAction}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PageOfRegistration) ;
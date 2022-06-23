import { connect } from 'react-redux';
import { push } from "connected-react-router";
// import * as actions from "../store/actions";
import * as actions from './../../store/actions'
import './Login.scss';
// import { FormattedMessage } from 'react-intl';
import { useState } from 'react';
import * as userSevice from './../../services/userService'
function Login() {


    const [login, setLogin] = useState({ username: '', password: '' })

    function handleChange(e) {
        setLogin((prevstate) => {
            return { ...prevstate, [e.target.name]: e.target.value }
        })
    }
    console.log(login)

    async function handleLogin(e) {
        e.preventDefault()
        let apirest = null
        try {
            apirest = await userSevice.handleLoginservice(login.username, login.password)

        } catch (error) {
            console.log('chay vao day')
            console.log(error.response.data.message)
            apirest = error.response
        }
        finally {
            console.log(apirest)
            setLogin({ ...login, messagesuccessorError: apirest.data.message })
        }
    }
    return (
        <div className='login-background'>
            <div className="login-container">
                <div className="login-content">
                    <h2 className="heading">
                        Login
                    </h2>
                    <form action="">
                        <input type="text" placeholder='Enter your username'
                            value={login.username}
                            onChange={handleChange}
                            name='username'
                        />
                        <input type="password" placeholder='Enter your password'
                            value={login.password}
                            onChange={handleChange}
                            name="password"
                        />
                        <p style={{ color: 'red', fontSize: '25px' }}>{login.messagesuccessorError ? login.messagesuccessorError : ''}</p>
                        <button onClick={handleLogin} type='submit'>Login</button>
                        <p>Forgot your password?</p>

                        <div className="login-orther">
                            <a className="icon-gg" href='/#'>google</a>
                            <a className="icon-fb" href='/#'>facebook</a>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )

}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

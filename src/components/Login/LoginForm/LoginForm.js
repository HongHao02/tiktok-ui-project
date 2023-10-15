import classNames from 'classnames/bind';
import { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';

import styles from './LoginForm.module.scss';
import Button from '~/components/Button';
import * as authService from '~/services/authService';
import { UserContext } from '~/Context';

const cx = classNames.bind(styles);

const TEXT_TYPE = 'text';
const PASSWD_TYPE = 'password';
function LoginForm() {
    const userContext = useContext(UserContext);
    const [currentUser, setCurrentUser] = useState({});
    const [email, setEmail] = useState('');
    const [passwd, setPasswd] = useState('');
    const [passType, setPassType] = useState(PASSWD_TYPE);

    const [hidePasswd, setHidePasswd] = useState(false);
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [isLogin, setIsLogin] = useState(true);

    const handleChangeIcon = () => {
        setHidePasswd(!hidePasswd);
        if (passType === PASSWD_TYPE) {
            setPassType(TEXT_TYPE);
        } else {
            setPassType(PASSWD_TYPE);
        }
    };

    useEffect(() => {
        console.log(currentUser);
    }, [currentUser]);
    useEffect(() => {
        if (email && passwd) {
            setIsLogin(false);
            setLoginSuccess(false);
        } else {
            setIsLogin(true);
        }
    }, [email, passwd]);

    const handleLogin = (e) => {
        e.preventDefault();
        authService
            .login({ email: email, password: passwd })
            .then((res) => {
                if (res != null) {
                    setCurrentUser(res);
                    // Save user token
                    console.log('token ', res.meta.token);
                    localStorage.setItem('token', res.meta.token);
                    localStorage.setItem('nickname', res.data.nickname);
                    userContext.handleChangeNickName(res.data.nickname);
                    userContext.handleChangeToken(res.meta.token);
                    userContext.handleChangeCurrentUser(res.data);
                    setLoginSuccess(false);
                }
            })
            .catch((error) => {
                console.error('Error when login ', error);
                setLoginSuccess(true); // Set login success to true on error
            });
    };
    return (
        <div className={cx('item')}>
            <span className={cx('title')}>Log in by email/name/username</span>
            <form>
                <div className={cx('div-container')}>
                    <input
                        value={email}
                        className={cx('input-container')}
                        placeholder="Email or Username"
                        autoComplete="username"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    ></input>
                </div>
                <div className={cx('div-container', { errorBorder: loginSuccess })}>
                    <input
                        value={passwd}
                        //add dynamic class errorBorder if the login false
                        className={cx('input-container')}
                        type={passType}
                        autoComplete="current-password"
                        placeholder="Passwd"
                        onChange={(e) => setPasswd(e.target.value)}
                        required
                    ></input>
                    <span className={cx('icon-container')} onClick={handleChangeIcon}>
                        {hidePasswd ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
                    </span>
                </div>
                <div className={cx('error-container')}>{loginSuccess && <span>Account doesn't exist</span>}</div>
                <div className={cx('text-container')}>
                    <a href="/" className={cx('text')}>
                        Forgot password
                    </a>
                </div>
                <Button to="/" disable={isLogin} className={cx('btn-primary')} onClick={handleLogin}>
                    Log in
                </Button>
            </form>
        </div>
    );
}

export default LoginForm;

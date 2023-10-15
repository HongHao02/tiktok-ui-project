import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { useContext, useEffect, useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { Link } from 'react-router-dom';

import Button from '~/components/Button';
import styles from './Header.module.scss';
import image from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import { UploadIcon, MessageIcon, InboxIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '~/layouts/components/Search';
import config from '~/config';
import * as authService from '~/services/authService';
import { UserContext } from '~/Context';
import DefaultLogin from '~/components/Login/DefaultLogin';

const cx = classNames.bind(styles);

function Header() {
    const userContext = useContext(UserContext);
    const [isLogin, setIsLogin] = useState(false);

    const [currentUser, setCurrentUser] = useState(userContext.currentUser);

    console.log('currentUser in Header ', currentUser);

    useEffect(() => {
        if (userContext.nickname != null && userContext.token != null) {
            console.log('find currentUser');
            authService
                .getCurrentUser({ token: userContext.token })
                .then((res) => {
                    setCurrentUser(res);
                })
                .catch((e) => {
                    console.log('Error when set current user ', e);
                });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userContext.nickname, userContext.token]);
    const handleChangeMenu = (menuItem) => {
        // console.log(memuItem);
        switch (menuItem.title) {
            case 'language':
                console.log('MenuItem ', menuItem);
                break;
            case 'Log out':
                console.log('MenuItem ', menuItem);
                localStorage.removeItem('token');
                localStorage.removeItem('nickname');
                userContext.handleChangeNickName('');
                userContext.handleChangeToken('');
                userContext.handleChangeCurrentUser(null);
                userContext.handleChangeLogoutSuccess(true);
                handleLogout();
                break;
            default:
            //
        }
    };

    const handleLogin = () => {
        setIsLogin(true);
    };
    const handleLogout = () => {
        setIsLogin(false);
        setCurrentUser(null);
    };
    const hanlleHide = () => {
        setIsLogin(false);
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={image.logo} alt="Tiktok" />
                </Link>

                {/*IN PropTypes: if we use <Button>{()=>{}}</Button> the error will occur*/}
                {/* <Button>{[1,2,3]}</Button> */}
                {/* <Button></Button> the error will occur because we validated the prop children by PropTypes*/}
                <Search />
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 80]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 80]} content="Messages" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon width="2.6rem" height="2.6rem" />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 80]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            {/*for button with icon*/}
                            {/* <Button outline leftIcon={<FontAwesomeIcon icon={faSignIn} />}>Log in</Button> */}
                            <Button primary onClick={handleLogin}>
                                Log in
                            </Button>
                            {isLogin && <DefaultLogin onHide={hanlleHide} />}
                        </>
                    )}
                    <Menu items={userContext.currentMenu} onChange={handleChangeMenu}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src={currentUser.avatar}
                                alt="no-avatar"
                                fallback="https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7d95aabe6b6a3ca5fcc1980e34f3cd87~c5_100x100.jpeg?x-expires=1693256400&x-signature=HC%2BOMRqLcE9Fi6SquMtOtp7tt6U%3D"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;

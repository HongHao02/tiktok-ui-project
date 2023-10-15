import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './DefaultLogin.module.scss';
import {
    QRCode,
    UserIcon,
    FacebookIcon,
    GoogleIcon,
    TwitterIcon,
    LineIcon,
    KakaoTalkIcon,
    AppleIcon,
    InstagramIcon,
} from '~/components/Icons';
import Button from '~/components/Button';
import LoginForm from '../LoginForm';
import LoginQRCode from '../LoginQRCode';
import ModalWrapper from '~/components/ModalWrapper';

const cx = classNames.bind(styles);

const defaultMenu = [
    {
        leftIcon: <QRCode className={cx('icon')} />,
        title: 'Use QR Code',
        children: {
            title: 'Login with QR Code',
            data: [{ title: 'Login with QR Code', layout: LoginQRCode }],
        },
    },
    {
        leftIcon: <UserIcon className={cx('icon')} />,
        title: 'Phone/Email/Uername',
        children: {
            title: 'Login with Phone/Username/Fullname',
            data: [{ title: 'Login with Phone/Email/Username', layout: LoginForm }],
        },
    },
    {
        type: true,
        leftIcon: <FacebookIcon className={cx('icon')} />,
        title: 'Continue with Facebook',
    },
    {
        type: true,
        leftIcon: <GoogleIcon className={cx('icon')} />,
        title: 'Continue with Google',
    },
    {
        type: true,
        leftIcon: <TwitterIcon className={cx('icon')} />,
        title: 'Continue with Twitter',
    },
    {
        type: true,
        leftIcon: <LineIcon className={cx('icon')} />,
        title: 'Continue with LINE',
    },
    {
        type: true,
        leftIcon: <KakaoTalkIcon className={cx('icon')} />,
        title: 'Continue with KakaoTalk',
    },
    {
        type: true,
        leftIcon: <AppleIcon className={cx('icon')} />,
        title: 'Continue with Apple',
    },
    {
        type: true,
        leftIcon: <InstagramIcon className={cx('icon')} />,
        title: 'Continue with Instagram',
    },
];

function DefaultLogin({ onBack, onShowBack, onHide }) {
    const [history, setHistory] = useState([{ data: defaultMenu }]);
    const [isShowBack, setIsShowBack] = useState(false);

    const currentLogin = history[history.length - 1];

    const renderLoginContent = () => {
        return currentLogin.data.map((item, index) => {
            const isParent = !!item.children;
            const isLayout = !!item.layout;
            if (isLayout) {
                return < item.layout key={index}/>;
            } else {
                return (
                    <Button
                        key={index}
                        link
                        disable={item.type}
                        className={cx('item')}
                        leftIcon={item.leftIcon}
                        onClick={() => {
                            if (isParent) {
                                setHistory((prev) => [...prev, item.children]);
                                setIsShowBack(true);
                            }
                        }}
                    >
                        {item.title}
                    </Button>
                );
            }
        });
    };
    const handleBack = () => {
        if (history.length === 2) {
            setIsShowBack(false);
        }
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };
    const renderLoginMenu = () => {
        return (
            <ModalWrapper title="Log in to TikTok" onHide={onHide} isShowBack={isShowBack} onBack={handleBack}>
                {renderLoginContent()}
            </ModalWrapper>
        );
    };
    return <div>{renderLoginMenu()}</div>;
}

export default DefaultLogin;

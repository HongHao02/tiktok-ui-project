import classNames from 'classnames/bind';

import styles from './LoginQRCode.module.scss';
import images from '~/assets/images';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function LoginQRCode() {
    return (
        <div className={cx('item')}>
            <span className={cx('title')}>Log in with QR code</span>
            <div className={cx('content')}>
                <Image className={cx('img')} src={images.qrCode} />
            </div>
            <div className={cx('step')}>
                <p>1. Scan with your mobile device’s camera</p>
                <p>2. Confirm login or sign up</p>
            </div>
        </div>
    );
}

export default LoginQRCode;

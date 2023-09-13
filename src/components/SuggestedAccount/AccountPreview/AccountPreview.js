import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss';
import Image from '~/components/Image';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/eb9d19e5e528afc94f38caee951d61cd~c5_100x100.jpeg?x-expires=1694761200&x-signature=2pAfugQWER2T%2BZ7la6vIiprFnqs%3D"
                    alt="hoaa"
                />
                <div>
                    <Button primary className={cx('fololwing-btn')}>Follow</Button>
                </div>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <b>phuongthao23</b>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Tran Duong Phuong Thao</p>
            </div>
            <p className={cx('anaylitics')}>
                <b className={cx('value')}>8.2M </b>
                <span className={cx('label')}>Follower</span>
                <b className={cx('value')}>1.5M </b>
                <span className={cx('label')}>Likes</span>
            </p>
        </div>
    );
}

export default AccountPreview;

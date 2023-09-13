import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccount.module.scss';
import Image from '~/components/Image';
const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/eb9d19e5e528afc94f38caee951d61cd~c5_100x100.jpeg?x-expires=1694761200&x-signature=2pAfugQWER2T%2BZ7la6vIiprFnqs%3D"
                alt="hoaa"
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strrong>phuongthao23</strrong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Tran Duong Phuong Thao</p>
            </div>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;

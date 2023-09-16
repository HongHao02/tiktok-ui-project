import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss';
import Image from '~/components/Image';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function AccountPreview({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
                <div>
                    <Button primary className={cx('fololwing-btn')}>
                        Follow
                    </Button>
                </div>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <b>{data.nickname}</b>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </p>
                <p className={cx('name')}>{`${data.first_name ? data.first_name : data.nickname} ${data.last_name}`}</p>
            </div>
            <p className={cx('anaylitics')}>
                <b className={cx('value')}>{data.followers_count} </b>
                <span className={cx('label')}>Follower</span>
                <b className={cx('value')}>{data.likes_count} </b>
                <span className={cx('label')}>Likes</span>
            </p>
        </div>
    );
}

AccountPreview.propTypes = {
    data: PropTypes.object.isRequired,
};
export default AccountPreview;

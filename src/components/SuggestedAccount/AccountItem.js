import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './SuggestedAccount.module.scss';
import Image from '~/components/Image';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from '~/components/SuggestedAccount/AccountPreview';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    const renderPreview = (attrs) => {
        return (
            <Link to={`/tiktok-ui-project/:${data.nickname}`}>
                <div tabIndex="-1" {...attrs}>
                <PopperWrapper>
                    <div className={cx('preview')}>
                        <AccountPreview data={data} />
                    </div>
                </PopperWrapper>
            </div>
            </Link>
        );
    };
    return (
        <div>
            <Tippy interactive delay={[500, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
                <Link to={`/tiktok-ui-project/:${data.nickname}`} className={cx('account-item')}>
                    <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <b>{data.nickname}</b>
                            {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                        </p>
                        <p className={cx('name')}>{`${data.first_name ? data.first_name : data.nickname} ${
                            data.last_name
                        }`}</p>
                    </div>
                </Link>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;

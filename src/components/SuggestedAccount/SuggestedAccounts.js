import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './SuggestedAccount.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function SuggestedAccounts({ lable, data = [] }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('lable')}>{lable}</p>
            {data.map((account) => (
                <AccountItem key={account.id} data={account} />
            ))}
            <p className={cx('more-btn')}>See all</p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    lable: PropTypes.string.isRequired,
    data: PropTypes.array,
};
export default SuggestedAccounts;

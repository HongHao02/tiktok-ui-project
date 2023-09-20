import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './SuggestedAccount.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function SuggestedAccounts({ lable, data = [], onSeeAll, onSeeLess, isShowAll = false }) {
    return (
        <div className={cx('wrapper')}>
            {console.log('render')}
            <p className={cx('lable')}>{lable}</p>
            {data.map((account) => (
                <AccountItem key={account.id} data={account} />
            ))}
            <p className={cx('more-btn')} onClick={!isShowAll ? onSeeAll : onSeeLess}>
                {!isShowAll ? 'See all' : 'See less'}
            </p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    lable: PropTypes.string.isRequired,
    data: PropTypes.array,
};
export default SuggestedAccounts;

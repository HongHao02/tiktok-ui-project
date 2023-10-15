import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './SuggestedAccount.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function SuggestedAccounts({
    type,
    lable,
    data = [],
    onSeeAll,
    onSeeLess,
    isShowAll = false,
    onSeeMore,
    onSeeLessF,
    isShowAllF = false,
}) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('lable')}>{lable}</p>
            {data.length === 0 && type !== 'Suggested'
                ? <span className={cx('description')}>Account you following will be here</span>
                : data.map((account, index) => <AccountItem key={index} data={account} />)}
            {type === 'Suggested' ? (
                <p className={cx('more-btn')} onClick={!isShowAll ? onSeeAll : onSeeLess}>
                    {!isShowAll ? 'See all' : 'See less'}
                </p>
            ) : (
                <p className={cx('more-btn')} onClick={!isShowAllF ? onSeeMore : onSeeLessF}>
                    {!isShowAllF ? 'See more' : 'See less'}
                </p>
            )}
        </div>
    );
}

SuggestedAccounts.propTypes = {
    lable: PropTypes.string.isRequired,
    data: PropTypes.array,
};
export default SuggestedAccounts;

import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ title, icon, to, activeIcon }) {
    return (
        //add dynamic class `active` if the NavLink is active
        <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to}>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('active-icon')}>{activeIcon}</span>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    to: PropTypes.string.isRequired,
};
export default MenuItem;

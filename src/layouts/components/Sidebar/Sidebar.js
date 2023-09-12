import classNames from 'classnames/bind';

import Menu, { MenuItem } from './Menu';
import styles from './Sidebar.module.scss';
import {
    HomeIcon,
    HomeIconActive,
    UserGroupIcon,
    UserGroupIconActive,
    LiveIcon,
    LiveIconActive,
} from '~/components/Icons';

const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For you" to="/" icon={<HomeIcon />} activeIcon={<HomeIconActive />} />
                <MenuItem
                    title="Following"
                    to="/following"
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupIconActive />}
                />
                <MenuItem title="Live" to="/live" icon={<LiveIcon />} activeIcon={<LiveIconActive />} />
            </Menu>
        </aside>
    );
}

export default Sidebar;

import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import Menu, { MenuItem } from './Menu';
import styles from './Sidebar.module.scss';
import SuggestedAccount from '~/components/SuggestedAccount';
import {
    HomeIcon,
    HomeIconActive,
    UserGroupIcon,
    UserGroupIconActive,
    LiveIcon,
    LiveIconActive,
} from '~/components/Icons';
import * as userService from '~/services/userService';
import ReferenceArea from '~/components/ReferenceArea';

const cx = classNames.bind(styles);

const PER_PAGE = 5;
function Sidebar() {
    const [suggestedUsers, setSuggestedUsers] = useState([]);

    useEffect(() => {
        userService
            .getSuggested({ page: 1, perPage: PER_PAGE })
            .then((data) => {
                setSuggestedUsers((prev) => [...prev, ...data]);
            })
            .catch((error) => console.log(error));
    }, []);

    // const handleSeeAll= useCallback(()=>{
    //     //for optimize later
    // }, [])

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
            <SuggestedAccount lable="Sugggested accounts" data={suggestedUsers} />
            <SuggestedAccount lable="Following accounts" />
            <ReferenceArea />
        </aside>
    );
}

export default Sidebar;

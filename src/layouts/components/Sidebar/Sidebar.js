import classNames from 'classnames/bind';
import { useState, useEffect, useContext } from 'react';

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
import { UserContext } from '~/Context';
import config from '~/config';

const cx = classNames.bind(styles);

const INIT_PAGE = 1;
const PER_PAGE = 5;
const SEE_ALL_PER_PAGE = 20;
const MAX_INITIAL_FOLLOWING_USERS = 5;

function Sidebar() {
    const userContex= useContext(UserContext)
    const [pageSuggested, setPageSuggested] = useState(INIT_PAGE);
    const [perPage, setPerPage] = useState(PER_PAGE);
    const [showAll, setShowAll] = useState(false);
    const [apiCalled, setApiCalled] = useState(false);
    const [initialSuggestedUsers, setInitialSuggestedUsers] = useState([]);
    const [allSuggestedUsers, setAllInitialSuggestedUsers] = useState([]);
    const [suggestedUsers, setSuggestedUsers] = useState([]);

    const [followingPage, setFollowingPage] = useState(INIT_PAGE);
    const [showMore, setShowMore] = useState(false);
    const [apiFollCalled, setApiFollCalled] = useState(false);
    const [initialFollowingUsers, setInitialFollowingUsers] = useState([]);
    const [allFollowingUsers, setAllFollowingUsers] = useState([]);
    const [followingUsers, setFollowingUsers] = useState([]);

    useEffect(() => {
        if (initialSuggestedUsers.length === 0 ) {
            userService
                .getSuggested({ page: pageSuggested, perPage: perPage })
                .then((data) => {
                    setInitialSuggestedUsers(data);
                    setSuggestedUsers(data);
                })
                .catch((error) => console.log(error));
        } else if (!apiCalled && showAll) {
            userService
                .getSuggested({ page: pageSuggested, perPage: perPage })
                .then((data) => {
                    setAllInitialSuggestedUsers(data);
                    setSuggestedUsers(data);
                    setApiCalled(true);
                })
                .catch((error) => console.log(error));
        } else if (!showAll) {
            setSuggestedUsers(initialSuggestedUsers);
        } else if (showAll) {
            setSuggestedUsers(allSuggestedUsers);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ perPage, showAll]);

    useEffect(() => {
        if(userContex.token){
            if (!apiFollCalled && !showMore) {
                userService
                    .getFollowingList({ page: followingPage, token: userContex.token  })
                    .then((data) => {
                        if (data.length === 0) {
                            setAllFollowingUsers([...followingUsers]);
                            setApiFollCalled(true);
                            setShowMore(true);
                        } else {
                            if (initialFollowingUsers.length < MAX_INITIAL_FOLLOWING_USERS) {
                                setInitialFollowingUsers((prev) => [...prev, ...data]);
                                setFollowingUsers((prev) => [...prev, ...data]);
                            } else {
                                setFollowingUsers((prev) => [...prev, ...data]);
                            }
                        }
                    })
                    .catch((error) => console.log(error));
            } else if (showMore) {
                setFollowingUsers(initialFollowingUsers);
            } else if (!showMore) {
                setFollowingUsers(allFollowingUsers);
                setShowMore(true)
            }
        }else{
            setFollowingPage(INIT_PAGE)
            setFollowingUsers([])
            setInitialFollowingUsers([])
            setAllFollowingUsers([])
            setShowMore(false)
            setApiFollCalled(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [followingPage, userContex.token]);

    // const handleSeeAll= useCallback(()=>{
    //     //for optimize later
    // }, [])
    const handleSeeAll = () => {
        setPerPage(SEE_ALL_PER_PAGE);
        setShowAll(true);
    };
    const handleSeeLess = () => {
        setPerPage(PER_PAGE);
        setShowAll(false);
    };

    const handleSeeMore = () => {
        setFollowingPage(followingPage + 1);
    };
    const handleSeeLessF = () => {
        setShowMore(false);
        setFollowingUsers(initialFollowingUsers);
    };

    return (
        <div className={cx('sidebar-container')}>
            <aside className={cx('wrapper')}>
                <Menu>
                    <MenuItem title="For you" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeIconActive />} />
                    <MenuItem
                        title="Following"
                        to={config.routes.following}
                        icon={<UserGroupIcon />}
                        activeIcon={<UserGroupIconActive />}
                    />
                    <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveIconActive />} />
                </Menu>
                <SuggestedAccount
                    type="Suggested"
                    lable="Sugggested accounts"
                    data={suggestedUsers}
                    onSeeAll={handleSeeAll}
                    onSeeLess={handleSeeLess}
                    isShowAll={showAll}
                />
                <SuggestedAccount
                    type="Following"
                    lable="Following accounts"
                    data={followingUsers}
                    onSeeMore={handleSeeMore}
                    onSeeLessF={handleSeeLessF}
                    isShowAllF={showMore}
                />
                <ReferenceArea />
            </aside>
        </div>
    );
}

export default Sidebar;

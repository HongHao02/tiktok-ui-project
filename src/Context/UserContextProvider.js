import { useState, createContext, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faBookBookmark,
    faGear,
    faCoins,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import config from '~/config';

const UserContext = createContext();
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                    children: {
                        title: 'English 1',
                        data: [
                            {
                                type: 'language',
                                code: 'en1',
                                title: 'English 1',
                            },
                            {
                                type: 'language',
                                code: 'en2',
                                title: 'English 2',
                            },
                        ],
                    },
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'ko',
                    title: 'Korean',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard Shortcuts',
    },
];

const USER_MENU = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/hoaa',
    },
    {
        icon: <FontAwesomeIcon icon={faBookBookmark} />,
        title: 'Favorites',
        to: '/favorites',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get conins',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/setting',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        to: config.routes.home,
        separate: true,
    },
];
function UserContextProvider({ children }) {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [nickname, setNickName] = useState(localStorage.getItem('nickname'));
    const [currentUser, setCurrentUser] = useState(null);
    const [currentMenu, setCurrentMenu] = useState(MENU_ITEMS);

    useEffect(() => {
        if (!token) {
            setCurrentMenu(MENU_ITEMS);
        } else {
            setCurrentMenu(USER_MENU);
        }
    }, [nickname, token, currentUser, currentMenu]);
    const handleChangeToken = (token) => {
        setToken(token);
    };
    const handleChangeNickName = (nickname) => {
        setNickName(nickname);
    };
    const handleChangeCurrentUser = (currentUser) => {
        setCurrentUser(currentUser);
    };
    const handleChangeCurrentMenu = (currentMenu) => {
        setCurrentMenu(currentMenu);
    };
    const value = {
        MENU_ITEMS,
        USER_MENU,
        token,
        nickname,
        currentUser,
        currentMenu,
        handleChangeToken,
        handleChangeNickName,
        handleChangeCurrentUser,
        handleChangeCurrentMenu,
    };
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserContextProvider;
export { UserContext };

import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as userService from '~/services/userService';
import styles from './Profile.module.scss';

const cx = classNames.bind(styles);

function Profile() {
    const { nickname } = useParams();
    const formattedNickname = `@${nickname.substring(1)}`;
    const [userData, setUserData] = useState({});
    useEffect(() => {
        if (formattedNickname) {
            userService
                .getAnUser({ formattedNickname })
                .then((data) => {
                    setUserData(data);
                })
                .catch((error) => console.log(error));
        }
    }, [formattedNickname]);
    return <div className={cx('wrapper')}>{<h2>{userData ? userData.nickname : 'No information'}</h2>}</div>;
}

export default Profile;

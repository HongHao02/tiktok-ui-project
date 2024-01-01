import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './Home.module.scss';
import VideoWrapper from '~/components/VideoWrapper';

const cx = classNames.bind(styles);

function Home() {

    const [currentVideoList, setCurrentVideoList] = useState([{},{}]);
    const [page, setPage] = useState(1);


    return (
        <div className={cx('wrapper')}>
            {currentVideoList.map((video, index) => (
                <VideoWrapper data={video} key={index} />
            ))}
        </div>
    );
}

export default Home;

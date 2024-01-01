import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import styles from './VideoWrapper.module.scss';
import { PlayIcon, PauseIcon, SpeakerActiveIcon, SpeakerMuteIcon, MucsicIcon } from '~/components/Icons';
import Image from '~/components/Image';
import images from '~/assets/images';
import Button from '~/components/Button';
import Video from '~/components/Video';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBookmark,
    faCircleCheck,
    faCircleInfo,
    faCommentDots,
    faHeart,
    faShare,
} from '@fortawesome/free-solid-svg-icons';
import routes from '~/config/routes';
import video1 from '~/assets/videos/video1.mp4';
import { useContext } from 'react';
import { UserContext } from '~/Context';
const cx = classNames.bind(styles);

function VideoWrapper({ data = {} }) {
    const userContext = useContext(UserContext);
    const [isPlay, setIsPlay] = useState(true);
    const [isActive, setIsActive] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [isHideLoading, setIsHideLoading] = useState(true);
    const [isInViewport, setIsInViewport] = useState(false);
    const [isPlaying, setIsPlaying] = useState(true);

    const videoRef = useRef();
    useEffect(() => {
        videoRef.current.increaseVolume(userContext.volume);
        if (userContext.volume > 0) {
            setIsMuted(false);
        } else {
            setIsMuted(true);
        }
    }, [userContext.volume]);
    useEffect(() => {
        if (isPlaying) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    }, [isPlaying]);
    const handleVolume = (e) => {
        const newVolume = parseInt(e.target.value);
        console.log('Volume in range', newVolume);
        if (newVolume === 0) {
            setIsMuted(true);
        } else {
            setIsMuted(false);
        }
        userContext.handleChangeVolume(newVolume);
        videoRef.current.increaseVolume(newVolume);
    };
    const handlePlay = () => {
        if (isPlay) {
            videoRef.current.pause()
            setIsPlay(false);
        } else {
            videoRef.current.play()
            setIsPlay(true);
        }
    };
    const handleChangeSpeaker = () => {
        if (isMuted) {
            setIsMuted(false);
            videoRef.current.increaseVolume(50);
            userContext.handleChangeVolume(50);
        } else {
            setIsMuted(true);
            videoRef.current.increaseVolume(0);
            userContext.handleChangeVolume(0);
        }
    };
    const handleVideoEnd = () => {
        videoRef.current.handleSetDefaultVolume();
        videoRef.current.play();
    };
    const handleVideoError = () => {
        setIsHideLoading(true);
    };
    const onLoaded = () => {
        videoRef.current.play();
        setIsActive(false);
        setIsPlay(true);
    };
    const handleVideoVisibilityChange = (isVisible) => {
        setIsPlaying(isVisible);
    };

    return (
        <div className={cx('wrapper')}>
            <Link to={`/:${'honghaocp'}`}>
                <div className={cx('profileLink')}>
                    <Image src={images.noImage} className={cx('avatar')} />
                </div>
            </Link>
            <div className={cx('content')}>
                <div className={cx('info')}>
                    <div className={cx('owner')}>
                        <div className={cx('name')}>
                            <Link to={`/:${'honghaocp'}`}>
                                <strong className={cx('nickname')}>honghaockg</strong>
                                <span className={cx('check')}>
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                </span>
                                <span className={cx('fullname')}>Nguyen Phan Hong Hao</span>
                            </Link>
                        </div>
                        <div className={cx('description')}>This is my video</div>
                        <div className={cx('music')}>
                            <MucsicIcon className={cx('-icon')} />
                            <Link to={routes.music}>Nhac nen Onichan</Link>
                        </div>
                    </div>
                    <Button outline className={'follow-btn'}>
                        Follow
                    </Button>
                </div>
                <div className={cx('body')}>
                    <div className={cx('video-layer', 'vertical')}>
                        <i className={cx('loading', { hide: isHideLoading })}>
                            <div className={cx('loader', 'loading-medium')}></div>
                        </i>
                        <div className={cx('default-thump')}>
                            {isActive ? (
                                <Image
                                    className={cx('image')}
                                    src="https://files.fullstack.edu.vn/f8-tiktok/videos/3028-64e8bad4a45ac.jpg"
                                />
                            ) : (
                                <Video
                                    ref={videoRef}
                                    src={video1}
                                    onEnd={handleVideoEnd}
                                    onError={handleVideoError}
                                    onLoaded={onLoaded}
                                    onVisibilityChange={handleVideoVisibilityChange}
                                    className={cx('video')}
                                />
                            )}
                        </div>
                        <button className={cx('control-btn', 'report')}>
                            <FontAwesomeIcon icon={faCircleInfo} className={cx('icon')} />
                        </button>
                        <button className={cx('control-btn', 'play')} onClick={handlePlay}>
                            {isPlay ? <PauseIcon /> : <PlayIcon />}
                        </button>
                        <div className={cx('volume-container')}>
                            <div className={cx('control')}>
                                <div className={cx('background')}>
                                    <div className={cx('bar')}>
                                        <div className={cx('dot')}></div>
                                    </div>
                                </div>
                                <input
                                    className={cx('type-range')}
                                    type="range"
                                    value={userContext.volume}
                                    min="0"
                                    max="100"
                                    step="1"
                                    onChange={handleVolume}
                                />
                            </div>
                            <button
                                className={cx('control-btn', 'volume-btn', { isMuted: isMuted })}
                                onClick={handleChangeSpeaker}
                            >
                                {isMuted ? <SpeakerMuteIcon /> : <SpeakerActiveIcon />}
                            </button>
                        </div>
                    </div>
                    <div className={cx('features-layer')}>
                        <label className={cx('item')}>
                            <div className={cx('icon')}>
                                <FontAwesomeIcon icon={faHeart} className={cx('svg')} />
                            </div>
                            <strong className="count">1</strong>
                        </label>
                        <label className={cx('item')}>
                            <div className={cx('icon')}>
                                <FontAwesomeIcon icon={faCommentDots} className={cx('svg')} />
                            </div>
                            <strong className="count">1</strong>
                        </label>
                        <label className={cx('item')}>
                            <div className={cx('icon')}>
                                <FontAwesomeIcon icon={faBookmark} className={cx('svg')} />
                            </div>
                            <strong className="count">1</strong>
                        </label>
                        <label className={cx('item')}>
                            <div className={cx('icon')}>
                                <FontAwesomeIcon icon={faShare} className={cx('svg')} />
                            </div>
                            <strong className="count">Share</strong>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

VideoWrapper.propTypes = {
    data: PropTypes.object,
};
export default VideoWrapper;

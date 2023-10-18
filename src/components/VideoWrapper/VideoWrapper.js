import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';

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

const cx = classNames.bind(styles);

function VideoWrapper({ data = {} }) {
    const [isPlay, setIsPlay] = useState(false);
    const [isActive, setIsActive] = useState(true);
    const [isMuted, setIsMuted] = useState(true);

    const videoRef = useRef();
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
                        <i className={cx('loading')}>
                            <div className={cx('loader', 'loading-medium')}></div>
                        </i>
                        <div className={cx('default-thump')}>
                            {isActive ? (
                                <Image
                                    className={cx('image')}
                                    src="https://files.fullstack.edu.vn/f8-tiktok/videos/3028-64e8bad4a45ac.jpg"
                                />
                            ) : (
                                <Video ref={videoRef} className={cx('video')} />
                            )}
                        </div>
                        <button className={cx('control-btn', 'report')}>
                            <FontAwesomeIcon icon={faCircleInfo} className={cx('icon')} />
                        </button>
                        <button className={cx('control-btn', 'play')}>{isPlay ? <PauseIcon /> : <PlayIcon />}</button>
                        <div className={cx('volume-container')}>
                            <div className={cx('control')}>
                                <div className={cx('background')}>
                                    <div className={cx('bar')}>
                                        <div className={cx('dot')}></div>
                                    </div>
                                </div>
                                <input className={cx('type-range')} type="range" min="0" max="100" step="1" />
                            </div>
                            <button className={cx('control-btn', 'volume-btn', { isMuted: isMuted })}>
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

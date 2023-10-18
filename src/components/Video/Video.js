import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { forwardRef, useImperativeHandle, useRef } from 'react';

import video1 from '~/assets/videos/video1.mp4';
import styles from './Video.module.scss';
const cx = classNames.bind(styles);
function Video({ src, className, ...passProps }, ref) {
    const videoRef = useRef();

    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play();
        },
        pause() {
            videoRef.current.pause();
        },
        increaseVolume() {
            videoRef.current.volume += 0.01;
        },
        decreaseVolume() {
            videoRef.current.volume -= 0.01;
        },
    }));
    return <video ref={videoRef} src={video1} className={cx('wrapper', className)} {...passProps}></video>;
}

Video.propTypes = {
    src: PropTypes.string.isRequired,
    className: PropTypes.string,
    passProps: PropTypes.object,
};
export default forwardRef(Video);

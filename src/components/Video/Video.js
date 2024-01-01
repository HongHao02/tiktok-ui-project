import classNames from 'classnames/bind';
import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import { useContext } from 'react';
import { UserContext } from '~/Context';
import styles from './Video.module.scss';
const cx = classNames.bind(styles);

function Video({ src = '', className, onEnd, onError, onLoaded, onVisibilityChange, ...passProps }, ref) {
    const videoRef = useRef();
    // const userContext = useContext(UserContext);
    // const observer = useRef(null);
    useEffect(() => {
        const options = {
            root: null, // viewport
            rootMargin: '0px',
            threshold: 0.6, // Khi hơn 50% của video nằm trong tầm nhìn
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                onVisibilityChange(entry.isIntersecting);
            });
        }, options);

        observer.observe(videoRef.current);

        return () => {
            videoRef.current && observer.unobserve(videoRef.current);
        };
    }, [onVisibilityChange]);
    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play();
        },
        pause() {
            videoRef.current.pause();
        },
        increaseVolume(volume) {
            console.log('currentVolume ', videoRef.current.volume);
            const newVolume = volume / 100;
            console.log('newVolume ', newVolume);
            if (newVolume > 1) {
                videoRef.current.volume = 1;
            } else if (newVolume < 0) {
                videoRef.current.volume = 0;
            } else {
                videoRef.current.volume = newVolume;
            }
        },
        handleSetDefaultVolume() {
            videoRef.current.volume = 0;
        },
    }));
    return (
        <video
            ref={videoRef}
            src={src}
            className={cx('wrapper', className)}
            {...passProps}
            onEnded={onEnd}
            onError={onError}
            loop
            onLoadedData={onLoaded}
        ></video>
    );
}

export default forwardRef(Video);

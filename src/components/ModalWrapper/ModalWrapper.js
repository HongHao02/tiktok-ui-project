import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './ModalWrapper.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { BackIcon, CloseIcon } from '~/components/Icons';

const cx = classNames.bind(styles);
function ModalWrapper({ children, title = '', isShowBack = false, onHide = () => {}, onBack = () => {} }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('overlay')}></div>

            <PopperWrapper className={cx('content', 'modal-wrapper')}>
                {isShowBack && (
                    <button className={cx('back-btn')} onClick={onBack}>
                        <BackIcon />
                    </button>
                )}
                <button className={cx('close-btn')} onClick={onHide}>
                    <CloseIcon />
                </button>
                <section className={cx('body')}>
                    <h1 className={cx('title')}>{title}</h1>
                    {children}
                </section>
                <div className={cx('policy')}>
                    <p className={cx('content')}>
                        By continuing, you agree to TikTok’s Terms of Service and confirm that you have read TikTok’s
                        Privacy Policy.
                    </p>
                </div>
                <footer className={cx('footer')}>
                    Do you have an account?
                    <span className={cx('register')}>Register</span>
                </footer>
            </PopperWrapper>
        </div>
    );
}

ModalWrapper.propTypes = {
    children: PropTypes.any.isRequired,
    title: PropTypes.string,
    isShowBack: PropTypes.bool,
    onHide: PropTypes.func,
    onBack: PropTypes.func,
};

export default ModalWrapper;

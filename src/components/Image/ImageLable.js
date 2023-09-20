import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Image.module.scss';
import Image from './Image';
import image from '~/assets/images';


const cx = classNames.bind(styles);

function ImageLable({ icon, lable, href }) {
    return (
        <div className={cx('wrapper-lable')}>
            <a className={cx('link')} href={href} target="_blank" rel="noreferrer">
                <Image className={cx('image')} src={image.createEffectImage} alt="createEffect" />
                <div className={cx('content')}>
                    <span className={cx('icon')}>{icon}</span>
                    <h4 className={cx('lable')}>{lable}</h4>
                </div>
            </a>
        </div>
    );
}

ImageLable.propTypes = {
    icon: PropTypes.node.isRequired,
    label: PropTypes.string,
    href: PropTypes.string,
};
export default ImageLable;

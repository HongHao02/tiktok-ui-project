import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    text = false,
    rounded = false,
    link= false,
    disable,
    children,
    small = false,
    large = false,
    className,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    //Remove event listener when btn is disable
    if (disable) {
        Object.keys(props).forEach((propKey) => {
            if (propKey.startsWith('on') && typeof props[propKey] === 'function') {
                delete props[propKey];
            }
        });
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    let classes = cx('wrapper', {
        //Apply the custom className if it has a value, similar to 'primary'.
        // We will also apply the 'primary' class if 'primary' is true.
        // Here, we are using the shorthand notation of 'primary: primary'.
        // If the value of 'primary' (:primary) is true, then it will apply the className with the name 'primary'.
        [className]: className,
        primary,
        outline,
        text,
        rounded,
        link,
        small,
        large,
        disable,
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

//// (PropTypes.node)Anything that can be rendered: numbers, strings, elements or an array
// (or fragment) containing these types.
// see https://reactjs.org/docs/rendering-elements.html for more info
Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    text: PropTypes.bool,
    rounded: PropTypes.bool,
    link: PropTypes.bool,
    disable: PropTypes.bool,
    children: PropTypes.node.isRequired,
    small: PropTypes.bool,
    large: PropTypes.bool,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    onClick: PropTypes.func,
};
export default Button;

import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import Header from './Header';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
const cx = classNames.bind(styles);

//tip for fix the error when we dont pass prop
const defaultFn = () => {};

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    useEffect(() => {
        if (items.length !== history[0].length) {
            setHistory([{ data: items }]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [items]);
    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children; //if item doesn't have children isParent is `undifined`
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    //cut from element at index 0 to length - 1 (return new array does not containt the last element)
    const handleBack = () => setHistory((prev) => prev.slice(0, prev.length - 1));

    const renderResult = (attrs) => {
        return (
            <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                <PopperWrapper className={cx('menu-popper')}>
                    {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
                    <div className={cx('menu-body')}>{renderItems()}</div>
                </PopperWrapper>
            </div>
        );
    };

    //reset menu if we unhover the tippy anywhere
    const handleReset = () => {
        //return new arrry contain the first element
        setHistory((prev) => prev.slice(0, 1));
    };

    return (
        <Tippy
            offset={[12, 8]}
            interactive
            hideOnClick={hideOnClick}
            delay={[0, 500]}
            placement="bottom-end"
            render={renderResult}
            onHide={handleReset}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};
export default Menu;

import Button from "~/components/Button";

import styles from './Menu.module.scss';
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function MenuItems({data}) {
    return ( <Button className={cx('menu-item')} leftIcon={data.icon} to={data.to}>{data.title}</Button> );
}

export default MenuItems;
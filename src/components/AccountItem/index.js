import classNames from "classnames/bind"
import styles from "./AccountItem.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx= classNames.bind(styles)
function AccountItem() {
    return ( <div className={cx('wrapper')}>
        <img className={cx('image')} src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/751d9281c7f18830a694812b0643f720.jpeg?x-expires=1692716400&x-signature=SfHgPEokPY6iOhxh3J99R4lV88Y%3D" alt="Hoa"/>
        <div className={cx('info')}>
            <h4 className={cx('name')}>
                <span>Nguyen Van A</span>
                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
            </h4>
            <span className={cx('userName')}>nguyenvana</span>
        </div>
    </div> );
}

export default AccountItem;
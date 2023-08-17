import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faDownload } from '@fortawesome/free-solid-svg-icons'; 


import styles from './Header.module.scss';
import image from '~/assets/images';

const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div >
                    <img src={image.logo} alt="Tiktok" />
                </div>
                <div className={cx('search')}>
                        <input type="text" placeholder="Search accounts or videos" spellCheck={false} />
                        <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark}/>
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner}/>
                        
                        <button className={cx('search-btn')}><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
                    </div>
                <div className={cx('actions')}>

                </div>
            </div>
        </header>
    );
}

export default Header;

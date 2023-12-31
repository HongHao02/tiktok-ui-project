import classNames from 'classnames/bind';
import { useEffect, useState, useRef } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as searchService from '~/services/searchService';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import styles from './Search.module.scss';
import { useDebounced } from '~/components/hooks';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearcValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();

    const debounced = useDebounced(searchValue, 600);
    // console.log('DEBOUNCED ',debounced)

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }
        const fetchApi = async () => {
            setLoading(true);

            const result = await searchService.search(debounced);
            setSearchResult(result);

            setLoading(false);
        };

        fetchApi();
    }, [debounced]);

    const handleClear = () => {
        setSearcValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    // console.log(searchResult);
    //for optimize by useCallback
    const handleShowResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        if (!e.target.value.startsWith(' ')) {
            let searchValue = e.target.value;
            //if the lenght over 100 don't setState
            if (searchValue.length < 100) {
                setSearcValue(searchValue);
            }
        }
    };

    return (
        //Using a wrapper <div> tag around the reference element solves this by creating a new parentNode context.
        <div>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => {
                    return (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>ACCCOUNT</h4>
                                {searchResult.map((result) => (
                                    <AccountItem key={result.id} data={result} />
                                ))}
                            </PopperWrapper>
                        </div>
                    );
                }}
                onClickOutside={handleShowResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        type="text"
                        placeholder="Search accounts or videos"
                        spellCheck={false}
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}

                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                    <button className={cx('search-btn')}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;

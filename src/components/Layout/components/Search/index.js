import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import { useEffect, useRef, useState } from 'react';

import * as searchServices from '~/apiServices/searchServices';
import AccountItem from '~/components/AccountItems';
import { SearchIcon } from '~/components/Icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useDebounce } from '~/hooks';
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounce = useDebounce(searchValue, 500);

    //GET API
    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }
        //Call API
        const fetchAPI = async () => {
            setLoading(true);
            const result = await searchServices.Search(debounce);
            setSearchResult(result);
            setLoading(false);
        };
        fetchAPI();
    }, [debounce]);

    const inputRef = useRef();

    const handleOnchageValue = (e) => {
        const inputValue = e.target.value;
        if (inputValue.startsWith(' ')) {
            return;
        }
        setSearchValue(inputValue);
    };

    const handleRemove = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };
    const handleHideResult = () => {
        setShowResult(false);
    };
    return (
        <div>
            <HeadlessTippy
                visible={showResult && searchResult.length > 0}
                interactive={true}
                render={(attrs) => (
                    <div tabIndex={-1} {...attrs} className="w-[361px]">
                        <PopperWrapper>
                            <div className="searchAcount py-[5px] px-[12px] text-[14px] text-[#16182380] font-semibold">
                                Acount
                            </div>
                            {searchResult.map((result) => {
                                return <AccountItem key={result.id} data={result} />;
                            })}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className="search w-[361px] h-[46px] flex pl-[16px] rounded-[92px] bg-[#1618230f] border-[1px] border-solid border-transparent focus-within:border-[#16182333]">
                    <input
                        ref={inputRef}
                        value={searchValue}
                        className="peer text-black h-full text-[16px] bg-transparent outline-none flex-1 caret-[#ea284a]"
                        spellCheck={false}
                        placeholder="Search acounts and videos"
                        onChange={handleOnchageValue}
                        onFocus={() => setShowResult(true)}
                    />
                    <button className="search-icon flex items-center text-[#16182357]">
                        {!!searchValue && !loading && (
                            <div onClick={handleRemove}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </div>
                        )}
                        {loading && (
                            <div className="animate-spin">
                                <FontAwesomeIcon icon={faSpinner} />
                            </div>
                        )}
                    </button>

                    <div className="flex items-center">
                        <div className="line h-[28px] w-[1px] bg-[#1618231f] ml-[14px]"></div>
                    </div>

                    <button
                        className={`search-icon inline-flex justify-center items-center w-[56px] h-full rounded-tr-[92px] rounded-br-[92px] hover:bg-[#16182308] text-[#16182357] active:bg-[#1618230f] `}
                    >
                        <div className="" onMouseDown={(e) => e.preventDefault()}>
                            <SearchIcon
                                className={`${searchValue !== '' ? 'rgba(22,24,35,0.75)' : 'rgba(22,24,35,0.34)'}`}
                            />
                        </div>
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faEarthAsia,
    faEllipsisVertical,
    faKeyboard,
    faMagnifyingGlass,
    faSignIn,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { text } from '@fortawesome/fontawesome-svg-core';
import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react/headless';

import images from '~/asset/images';
import classNames from 'classnames/bind';
import './header.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItems';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

function Header() {
    const [valueInput, setValueInput] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 4]);
        }, 0);
    }, []);

    const MENU_ITEMS = [
        { icon: <FontAwesomeIcon icon={faEarthAsia} />, title: 'English' },
        { icon: <FontAwesomeIcon icon={faCircleQuestion} />, title: 'Feedback and help', to: '/feedback' },
        { icon: <FontAwesomeIcon icon={faKeyboard} />, title: 'Keyboard shortcuts' },
    ];

    const handleChange = (e) => {
        setValueInput(e.target.value);
    };
    return (
        <header className="wrapper h-[60px] shadow-[0px_1px_1px_rgb(0_0_0_/12%)] flex justify-center items-center">
            <div className="content w-[950px] h-full flex justify-between items-center">
                <div className="logo">
                    <img src={images.logo} alt="tiktok" />
                </div>
                <Tippy
                    visible
                    interactive={true}
                    render={(attrs) => (
                        <div tabIndex={-1} {...attrs} className="w-[361px]">
                            <PopperWrapper>
                                <div className="searchAcount py-[5px] px-[12px] text-[14px] text-[#16182380] font-semibold">
                                    Acount
                                </div>
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className="search w-[361px] h-[46px] flex pl-[16px] rounded-[92px] bg-[#1618230f] border-[1px] border-solid border-transparent focus-within:border-[#16182333]">
                        <input
                            value={valueInput}
                            className="peer text-black h-full text-[16px] bg-transparent outline-none flex-1 caret-[#ea284a]"
                            spellCheck={false}
                            placeholder="Search acounts and videos"
                            onChange={handleChange}
                        />
                        <button className="search-icon flex items-center text-[#16182357]">
                            <div className="">
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </div>
                            <div className="hidden">
                                <FontAwesomeIcon icon={faSpinner} />
                            </div>
                        </button>

                        <div className="flex items-center">
                            <div className="line h-[28px] w-[1px] bg-[#1618231f] ml-[14px]"></div>
                        </div>

                        <button
                            className={`search-icon w-[56px] h-full rounded-tr-[92px] rounded-br-[92px] hover:bg-[#16182308] text-[#16182357] active:bg-[#1618230f] ${
                                valueInput !== '' ? 'text-[#161823bf]' : ''
                            }`}
                        >
                            <div>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </div>
                        </button>
                    </div>
                </Tippy>
                <div className="action inline-flex space-x-8">
                    <Button text>Upload</Button>
                    <Button primary medium lefticon={<FontAwesomeIcon icon={faSignIn} />}>
                        Log in
                    </Button>
                    <Menu items={MENU_ITEMS}>
                        <button className="text-[20px] px-[5px]">
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;

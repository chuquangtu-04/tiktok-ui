import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCloudUpload,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faMagnifyingGlass,
    faMessage,
    faSignIn,
    faSignOut,
    faSpinner,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { text } from '@fortawesome/fontawesome-svg-core';
import { Children, useEffect, useState } from 'react';
import Tippy from '@tippyjs/react';
import headlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import images from '~/asset/images';
import './header.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItems';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

function Header() {
    const [valueInput, setValueInput] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    let currentUser = false;

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 4]);
        }, 0);
    }, []);

    //Handle logic
    const handleOnchage = (item) => {
        switch (item) {
            case 'language':
                //handle language
                break;

            default:
                break;
        }
    };

    const MENU_ITEMS = [
        {
            icon: <FontAwesomeIcon icon={faEarthAsia} />,
            title: 'English',
            children: {
                title: 'Language',
                data: [
                    {
                        type: 'language',
                        code: 'en',
                        title: 'Engish',
                    },
                    {
                        type: 'language',
                        code: 'vi',
                        title: 'Tiếng Việt',
                    },
                ],
            },
        },
        { icon: <FontAwesomeIcon icon={faCircleQuestion} />, title: 'Feedback and help', to: '/feedback' },
        { icon: <FontAwesomeIcon icon={faKeyboard} />, title: 'Keyboard shortcuts' },
    ];

    const handleChange = (e) => {
        setValueInput(e.target.value);
    };

    const MENU_USER = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];
    return (
        <header className="wrapper h-[60px] shadow-[0px_1px_1px_rgb(0_0_0_/12%)] flex justify-center items-center">
            <div className="content w-[950px] h-full flex justify-between items-center pr-[24px] pl-[20px]">
                <div className="logo">
                    <img src={images.logo} alt="tiktok" />
                </div>
                {/* Logo */}

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
                {/* Search */}

                <div className={`action inline-flex items-center ${currentUser ? '' : 'space-x-8'}`}>
                    {currentUser ? (
                        <>
                            <Tippy
                                delay={[0, 200]}
                                placement="bottom"
                                content="Upload Video"
                                className="text-[16px] font-semibold leading-[22px] bg-[#545454eb] rounded-[8px] py-[3px]"
                            >
                                <button className="icon text-[#161823] text-[22px] py-[4px] px-[12px]">
                                    <FontAwesomeIcon icon={faCloudUpload} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary medium leftIcon={<FontAwesomeIcon icon={faSignIn} />}>
                                Log in
                            </Button>
                        </>
                    )}
                    <Menu items={currentUser ? MENU_USER : MENU_ITEMS} onchange={handleOnchage}>
                        {currentUser ? (
                            <img
                                className="w-[32px] h-[32px] rounded-full object-cover ml-[12px]"
                                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/c14a92a8e2e23babececab98c0f67fac~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=95139afe&x-expires=1750392000&x-signature=NQPoA%2FMsanpECo0OSNA3pssM8Uo%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
                                alt="Chu Quang Tú"
                            ></img>
                        ) : (
                            <button className="text-[20px] px-[5px]">
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
                {/* Action */}
            </div>
        </header>
    );
}

export default Header;

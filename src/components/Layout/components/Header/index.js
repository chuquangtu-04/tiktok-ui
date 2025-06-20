import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignIn,
    faSignOut,
    faSpinner,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import images from '~/asset/images';
import './header.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItems';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { MessageIcon, SearchIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';

function Header() {
    const [valueInput, setValueInput] = useState('');
    let currentUser = true;

    const [searchResult, setSearchResult] = useState([]);
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

                <HeadlessTippy
                    visible={searchResult.length > 0}
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
                            className={`search-icon inline-flex justify-center items-center w-[56px] h-full rounded-tr-[92px] rounded-br-[92px] hover:bg-[#16182308] text-[#16182357] active:bg-[#1618230f] `}
                        >
                            <div className="">
                                <SearchIcon
                                    className={`${valueInput !== '' ? 'rgba(22,24,35,0.75)' : 'rgba(22,24,35,0.34)'}`}
                                />
                            </div>
                        </button>
                    </div>
                </HeadlessTippy>
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
                                    <UploadIcon className="" />
                                </button>
                            </Tippy>
                            <Tippy
                                delay={[0, 200]}
                                placement="bottom"
                                content="Message"
                                className="text-[16px] font-semibold leading-[22px] bg-[#545454eb] rounded-[8px] py-[3px]"
                            >
                                <button className="icon text-[#161823] text-[22px] py-[4px] px-[12px]">
                                    <MessageIcon className="" />
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
                            <Image
                                className="w-[32px] h-[32px] rounded-full object-cover ml-[12px]"
                                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/dcf29d2f566ce01d582b802a5632c363~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=78013aa5&x-expires=1750503600&x-signature=AtjD8aQWXNRSH5EywghNKHtgcds%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
                                alt="Chu Quang Tú"
                                fallBack=""
                            ></Image>
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

import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignIn,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';

import images from '~/asset/images';
import Button from '~/components/Button';
import Image from '~/components/Image';
import Menu from '~/components/Popper/Menu';
import Search from '../Search';
import './header.module.scss';
import routesConfig from '~/config/routes';

function Header() {
    let currentUser = true;

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
        <header className="wrapper h-[60px] shadow-[0px_1px_1px_rgb(0_0_0_/12%)] flex justify-center items-center fixed top-0 left-0 right-0 bg-white z-10">
            <div className="content w-[950px] h-full flex justify-between items-center pr-[24px] pl-[20px]">
                <Link to={routesConfig.home} className="logo block">
                    <img src={images.logo} alt="tiktok" />
                </Link>
                {/* Logo */}

                <Search />

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
                                <button className="icon text-[#161823] text-[22px] py-[4px] px-[10px]">
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
                            <Tippy
                                delay={[0, 200]}
                                placement="bottom"
                                content="Inbox"
                                className="text-[16px] font-semibold leading-[22px] bg-[#545454eb] rounded-[8px] py-[3px]"
                            >
                                <button className="icon flex text-[#161823] text-[22px] py-[4px] px-[10px] relative">
                                    <InboxIcon className="" />
                                    <span className="inbox bg-[#e10543] leading-[18px] text-center text-[12px] text-white w-[20px] h-[18px] rounded-full absolute top-0 right-[5px]">
                                        12
                                    </span>
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

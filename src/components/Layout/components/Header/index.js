import images from '~/asset/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMagnifyingGlass,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';

import classNames from 'classnames/bind';
import styles from './header.module.scss';
import { useState } from 'react';
import { text } from '@fortawesome/fontawesome-svg-core';
const cx = classNames.bind(styles);

function Header() {
    const [valueInput, setValueInput] = useState('');
    const handleChange = (e) => {
        setValueInput(e.target.value);
    };
    return (
        <header className="wrapper h-[60px] shadow-[0px_1px_1px_rgb(0_0_0_/12%)] flex justify-center items-center">
            <div className="content w-[950px] h-full flex justify-between items-center">
                <div className="logo">
                    <img src={images.logo} alt="tiktok" />
                </div>
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
                <div className="action">Actions</div>
            </div>
        </header>
    );
}

export default Header;

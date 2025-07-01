import { faBookmark, faComment, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

function SectionActionBar() {
    const [heart, setHeart] = useState(false);
    const [save, setSave] = useState(false);
    return (
        <div className="wrapper">
            <div className="heart mb-[6px]">
                <span
                    className="w-[48px] h-[48px] bg-[#1618230f] hover:bg-[#1618231a] cursor-pointer flex justify-center items-center rounded-full"
                    onClick={() => {
                        setHeart(!heart);
                    }}
                >
                    <FontAwesomeIcon icon={faHeart} size={'xl'} style={{ color: `${heart ? '#ff3b5c' : '#000'}` }} />
                </span>
                <p className="text-center text-[#161823bf] text-[12px] mt-[6px]">354</p>
            </div>
            <div className="comment">
                <div className="heart mb-[6px]">
                    <span className="w-[48px] h-[48px] bg-[#1618230f] hover:bg-[#1618231a] cursor-pointer flex justify-center items-center rounded-full">
                        <FontAwesomeIcon icon={faComment} size={'xl'} />
                    </span>
                    <p className="text-center text-[#161823bf] text-[12px] mt-[6px]">354</p>
                </div>
            </div>
            <div className="save">
                <div className="heart mb-[6px]">
                    <span
                        className="w-[48px] h-[48px] bg-[#1618230f] hover:bg-[#1618231a] cursor-pointer flex justify-center items-center rounded-full"
                        onClick={() => {
                            setSave(!save);
                        }}
                    >
                        <FontAwesomeIcon
                            icon={faBookmark}
                            size={'xl'}
                            style={{ color: `${save ? '#ffe85a' : '#000'}` }}
                        />
                    </span>
                    <p className="text-center text-[#161823bf] text-[12px] mt-[6px]">354</p>
                </div>
            </div>
            <div className="share">
                <div className="heart mb-[6px]">
                    <span className="w-[48px] h-[48px] bg-[#1618230f] hover:bg-[#1618231a] cursor-pointer flex justify-center items-center rounded-full">
                        <FontAwesomeIcon icon={faShare} size={'xl'} />
                    </span>
                    <p className="text-center text-[#161823bf] text-[12px] mt-[6px]">354</p>
                </div>
            </div>
        </div>
    );
}

export default SectionActionBar;

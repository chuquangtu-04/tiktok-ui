import { faCheck, faCheckCircle, faMusic, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useEffect, useState } from 'react';
import SectionActionBar from './SectionActionBar';
import { Link } from 'react-router-dom';

function ContentHome() {
    const [data, setData] = useState([]);
    const [follow, setFollow] = useState(false);

    useEffect(() => {
        axios
            .get('https://6862133c96f0cc4e34b83841.mockapi.io/videotiktok')
            .then(function (response) {
                // handle success
                setData(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
        console.log(data);
    }, []);
    console.log(data);
    return (
        <div>
            {data.map((data) => {
                return (
                    <div className="mt-8 ml-10">
                        <div className="header flex mb-3">
                            <div className="avatar relative">
                                <Link to={`/@:${data.nickname}`}>
                                    <img
                                        className="Avatar w-[48px] h-[48px] rounded-full object-cover cursor-pointer"
                                        src={data.avatar}
                                        alt={data.full_name}
                                    />
                                </Link>
                                <span
                                    className="w-[24px] h-[24px] bg-[#ff3b5c] flex justify-center items-center rounded-full text-center absolute left-3 top-[38px] cursor-pointer"
                                    onClick={() => {
                                        setFollow(!follow);
                                    }}
                                >
                                    {follow ? (
                                        <FontAwesomeIcon icon={faCheck} style={{ color: '#fff' }} />
                                    ) : (
                                        <FontAwesomeIcon icon={faPlus} style={{ color: '#fff' }} />
                                    )}
                                </span>
                            </div>
                            <div className="info ml-3">
                                <Link to={`/@:${data.nickname}`}>
                                    <span className="nickname font-semibold text-[16px] mr-2 hover:underline">
                                        {data.nickname}
                                    </span>
                                </Link>
                                {data.tick && <FontAwesomeIcon icon={faCheckCircle} className=" text-[#20d5ec]" />}
                                <span className="fullname text-[12px] ml-2">{data.fullName}</span>
                                <div className="flex">
                                    <p className="caption mr-2">{data.caption}</p>
                                    <span className="hashtag font-semibold">{data.hashtag}</span>
                                </div>
                                <div className="flex items-center">
                                    <FontAwesomeIcon icon={faMusic} />
                                    <p className="ml-2">Nhạc nền - </p>
                                    <p className="hashtag">{data.music}</p>
                                </div>
                            </div>
                        </div>
                        <div className="body ml-[52px] flex">
                            <div className="Video">
                                <video
                                    controls
                                    src={data.videoUrl}
                                    className="rounded-xl w-[348px] h-[400px] bg-green-300"
                                />
                            </div>
                            <div className="action mt-auto ml-3">
                                <SectionActionBar />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default ContentHome;

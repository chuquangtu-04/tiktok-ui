import Button from '../Button';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function AccountPreview({ data }) {
    return (
        <div className="Wrapper p-5">
            <div className="flex justify-between items-center">
                <img
                    className="Avatar w-[44px] h-[44px] rounded-full object-cover"
                    src={data.avatar}
                    alt={data.full_name}
                />
                <Button primary medium>
                    Follow
                </Button>
            </div>
            <div className="body mt-3">
                <p className="Nick-Name text-[18px]">
                    <strong className="text-[#161223]">{data.nickname}</strong>
                    {data.tick && <FontAwesomeIcon icon={faCheckCircle} className="ml-[6px] text-[#20d5ec]" />}
                </p>
                <p className="Name text-[14px] text-[#161823bf]">{data.full_name}</p>
                <p className="Analytics text-[16px] mt-[10px]">
                    <strong className="value">{data.followers_count} </strong>
                    <span className="label">Follows</span>
                    <strong className="value ml-5">{data.followings_count} </strong>
                    <span className="label">Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;

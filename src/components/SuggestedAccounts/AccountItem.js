import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function AccountItem({ data }) {
    return (
        <div className="Content flex items-center p-2">
            <img
                className="Avatar w-[32px] h-[32px] rounded-full object-cover"
                src="https://cdn-media.sforum.vn/storage/app/media/thanhhuyen/%E1%BA%A3nh%20s%C6%A1n%20t%C3%B9ng%20mtp/3/anh-son-tung-mtp-41.jpg"
                alt="nguyễn thanh tùng"
            />
            <div className="Info ml-[12px]">
                <p className="Nick-Name text-[16px]">
                    <strong className="text-[#161223]">Nguyễn Thanh Tùng</strong>
                    {true && <FontAwesomeIcon icon={faCheckCircle} className="ml-[6px] text-[#20d5ec]" />}
                </p>
                <p className="Name text-[12px] text-[#161823bf]">Nguyễn Thanh Tùng</p>
            </div>
        </div>
    );
}

export default AccountItem;

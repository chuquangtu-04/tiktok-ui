import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Image from '../Image';

function AccountItem({ data }) {
    return (
        <Link
            to={`/@${data.nickname}`}
            className="wrapperAcoutnItem flex items-center py-[6px] px-[16px] cursor-pointer hover:bg-[#16182308]"
        >
            <Image className="w-[40px] h-[40px] rounded-full object-cover" src={data.avatar} alt={data.full_name} />
            <div className="content ml-[12px]">
                <div className="nameID text-[16px] font-medium">
                    <span>{data.nickname}</span>
                    {data.tick && <FontAwesomeIcon icon={faCheckCircle} className="ml-[6px] text-[#20d5ec]" />}
                </div>
                <div className="username text-[14px] text-[#16182380]">{data.full_name}</div>
            </div>
        </Link>
    );
}

export default AccountItem;

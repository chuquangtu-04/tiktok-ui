import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function AccountItem() {
    return (
        <div className="wrapperAcoutnItem flex items-center py-[6px] px-[16px] cursor-pointer hover:bg-[#16182308]">
            <img
                className="w-[40px] h-[40px] rounded-full object-cover"
                src="https://p9-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/9d4b25227ef8bf3c3a438dec013230ef~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=ea3776ad&x-expires=1749754800&x-signature=O%2FJmPAVlKuLuV1fS0mTYOp8SPrE%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
                alt="Chu Tu"
            />
            <div className="content ml-[12px]">
                <div className="nameID text-[16px] font-medium">
                    <span>ChuQuangTu</span>
                    <FontAwesomeIcon icon={faCheckCircle} className="ml-[6px] text-[#20d5ec]" />
                </div>
                <div className="username text-[14px] text-[#16182380]">Chu Quang Tú</div>
            </div>
        </div>
    );
}

export default AccountItem;

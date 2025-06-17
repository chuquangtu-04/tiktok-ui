import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function AccountItem() {
    return (
        <div className="wrapperAcoutnItem flex items-center py-[6px] px-[16px] cursor-pointer hover:bg-[#16182308]">
            <img
                className="w-[40px] h-[40px] rounded-full object-cover"
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/4f3cd21a2473d496053f75d3c4ab43c1~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=ae33b88d&x-expires=1750212000&x-signature=lWG9RJIkZbZbe87Yo6oNEBInVQk%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
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

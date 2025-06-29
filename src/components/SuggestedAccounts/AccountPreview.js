import Button from '../Button';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function AccountPreview() {
    return (
        <div className="Wrapper p-5">
            <div className="flex justify-between items-center">
                <img
                    className="Avatar w-[44px] h-[44px] rounded-full object-cover"
                    src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/85e51b9b937495fd5d8bc24a655e01a2~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=e4c66750&x-expires=1751209200&x-signature=Vt7htQ%2FptWyGcQysJvtrsBpNSfY%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=c1333099&idc=my"
                    alt="Mono"
                />
                <Button primary medium>
                    Follow
                </Button>
            </div>
            <div className="body mt-3">
                <p className="Nick-Name text-[18px]">
                    <strong className="text-[#161223]">Nguyễn Thanh Tùng</strong>
                    {true && <FontAwesomeIcon icon={faCheckCircle} className="ml-[6px] text-[#20d5ec]" />}
                </p>
                <p className="Name text-[14px] text-[#161823bf]">Nguyễn Thanh Tùng</p>
                <p className="Analytics text-[16px] mt-[10px]">
                    <strong className="value">8.3M </strong>
                    <span className="label">Follows</span>
                    <strong className="value ml-5">8.3M </strong>
                    <span className="label">Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;

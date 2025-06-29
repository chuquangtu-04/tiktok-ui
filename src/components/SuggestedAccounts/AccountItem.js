import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless'; // different import path!
import { Wrapper } from '../Popper';
import AccountPreview from './AccountPreview';

function AccountItem({ data }) {
    const renderPreview = (attrs) => (
        <div className="box w-[320px] h-[30px]" tabIndex="-1" {...attrs}>
            <Wrapper>
                <AccountPreview />
            </Wrapper>
        </div>
    );

    return (
        <div>
            <Tippy interactive offset={[-20, 0]} delay={[800, 0]} placement="bottom-start" render={renderPreview}>
                <div className="Content flex items-center p-2 cursor-pointer">
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
            </Tippy>
        </div>
    );
}

export default AccountItem;

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless'; // different import path!
import { Wrapper } from '../Popper';
import AccountPreview from './AccountPreview';

function AccountItem({ data }) {
    const renderPreview = (attrs) => (
        <div className="box w-[320px] h-[30px]" tabIndex="-1" {...attrs}>
            <Wrapper>
                <AccountPreview data={data} />
            </Wrapper>
        </div>
    );

    return (
        <div>
            <Tippy interactive offset={[-20, 0]} delay={[800, 0]} placement="bottom-start" render={renderPreview}>
                <div className="Content flex items-center p-2 cursor-pointer">
                    <img
                        className="Avatar w-[32px] h-[32px] rounded-full object-cover"
                        src={data.avatar}
                        alt={data.full_name}
                    />
                    <div className="Info ml-[12px]">
                        <p className="Nick-Name text-[16px]">
                            <strong className="text-[#161223]">{data.nickname}</strong>
                            {data.tick && <FontAwesomeIcon icon={faCheckCircle} className="ml-[6px] text-[#20d5ec]" />}
                        </p>
                        <p className="Name text-[12px] text-[#161823bf]">{data.full_name}</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default AccountItem;

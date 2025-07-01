import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContentHome from './ContentHome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

function Home() {
    return (
        <div className="flex justify-between">
            <div className="Wrapper">
                <ContentHome />
            </div>
            <div className="mr-[-80px] fixed right-[160px] top-[280px]">
                <div className="Prev mb-4">
                    <button className="flex w-[50px] h-[50px] bg-[#0000000d] hover:bg-[#0000001f] justify-center items-center rounded-full">
                        <FontAwesomeIcon icon={faChevronUp} />
                    </button>
                </div>
                <div className="Prev">
                    <button className="flex w-[50px] h-[50px] bg-[#0000000d] hover:bg-[#0000001f] justify-center items-center rounded-full">
                        <FontAwesomeIcon icon={faChevronDown} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;

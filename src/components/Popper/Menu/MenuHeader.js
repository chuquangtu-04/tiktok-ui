import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header({ title, onBack }) {
    return (
        <header className="w-full mt-[-8px] flex h-[50px] items-center relative text-[16px] font-normal">
            <button className="w-[50px]" onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h4 className="absolute left-[35%]">{title}</h4>
        </header>
    );
}

export default Header;

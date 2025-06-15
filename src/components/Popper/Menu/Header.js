import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header({ title, onBack }) {
    return (
        <Header className="">
            <button className="" onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h4 className="">{title}</h4>
        </Header>
    );
}

export default Header;

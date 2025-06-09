import Header from '../components/Header';

function HeaderOnly({ children }) {
    return (
        <div className="Wrapper">
            <div className="header">
                <Header />
            </div>

            <div className="main">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default HeaderOnly;

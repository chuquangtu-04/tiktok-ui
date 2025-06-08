import Header from '../components/Header';

function DefaultLayout({ children }) {
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

export default DefaultLayout;

import Header from '../components/Header';
import SlideBar from './SlideBar';

function DefaultLayout({ children }) {
    return (
        <div className="Wrapper">
            <div className="header">
                <Header />
            </div>

            <div className="main">
                <div className="slidebar">
                    <SlideBar />
                </div>
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;

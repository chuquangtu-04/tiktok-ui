import Header from '../components/Header';
import SlideBar from './SlideBar';

function DefaultLayout({ children }) {
    return (
        <div className="Wrapper">
            <div className="header">
                <Header />
            </div>

            <div className="main flex justify-center items-center">
                <div className="content w-[950px] flex">
                    <div className="slidebar basis-2/6">
                        <SlideBar />
                    </div>

                    <div className="content basis-4/6">{children}</div>
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;

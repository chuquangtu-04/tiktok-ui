import Header from '../components/Header';
import SlideBar from './SlideBar';

function DefaultLayout({ children }) {
    return (
        <div className="Wrapper">
            <div className="header">
                <Header />
            </div>

            <div className="main flex justify-center items-center">
                <div className="content w-[950px] bg-pink-400 flex">
                    <div className="slidebar basis-2/6 bg-red-400">
                        <SlideBar />
                    </div>

                    <div className="content basis-4/6 bg-green-300">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;

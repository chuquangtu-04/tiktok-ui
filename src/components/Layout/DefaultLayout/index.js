import Header from '../components/Header';
import SlideBar from '../components/SlideBar';

function DefaultLayout({ children }) {
    return (
        <div className="Wrapper">
            <div className="header">
                <Header />
            </div>

            <div className="main flex justify-center items-center mt-[60px]">
                <div className="content w-[1024px] flex pr-[24px] pl-[20px]">
                    <div className="sliderBarr basis-2/6 pt-[20px] pb-[26px] pr-[8px] ml-[-14px]">
                        <SlideBar />
                    </div>

                    <div className="content basis-4/6 ml-[14px]">{children}</div>
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;

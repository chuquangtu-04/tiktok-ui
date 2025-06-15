function Wrapper({ children }) {
    return (
        <div className="block wrapper w-full pt-2 bg-white shadow-[rgb(0_0_0_/_12%)_0px_2px_12px] min-h-24 max-h-[min_(_(_100vh_-_96px_)_-_60px_,_734px)] rounded-lg">
            {children}
        </div>
    );
}

export default Wrapper;

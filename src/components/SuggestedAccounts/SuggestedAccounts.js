import AccountItem from './AccountItem';

function SuggestedAccounts({ data, label }) {
    return (
        <div className="WrapperSuggestedAccounts border-solid border-t-[1px] border-[#e3e3e4]">
            <p className="inline-block text-[14px] p-2 text-[#161823bf] font-semibold">{label}</p>
            <AccountItem data={data} />
            <AccountItem data={data} />
            <p className="More-button text-[#fe2c55] text-[14px] p-2 cursor-pointer font-bold">See all</p>
        </div>
    );
}

export default SuggestedAccounts;

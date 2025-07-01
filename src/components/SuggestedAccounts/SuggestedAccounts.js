import { useEffect, useState } from 'react';
import AccountItem from './AccountItem';

import * as SuggestedAccountServices from '~/services/SuggestedAccounts';
function SuggestedAccounts({ data, label }) {
    const [resultValue, setResultValue] = useState([]);
    const [handleClickSeeAll, setHandleClickSeeAll] = useState(false);
    useEffect(() => {
        const fetchAPI = async () => {
            const data = await SuggestedAccountServices.SuggestedAccounts('hoa', handleClickSeeAll ? 'more' : 'less');
            setResultValue(data);
        };
        fetchAPI();
    }, [handleClickSeeAll]);
    return (
        <div className="WrapperSuggestedAccounts border-solid border-t-[1px] border-[#e3e3e4]">
            <p className="inline-block text-[14px] p-2 text-[#161823bf] font-semibold">{label}</p>
            {resultValue.map((result) => {
                return <AccountItem key={result.id} data={result} />;
            })}
            {!handleClickSeeAll && (
                <p
                    className="More-button text-[#fe2c55] text-[14px] p-2 cursor-pointer font-bold"
                    onClick={() => setHandleClickSeeAll(true)}
                >
                    See all
                </p>
            )}
        </div>
    );
}

export default SuggestedAccounts;

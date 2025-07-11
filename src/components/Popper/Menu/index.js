import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './MenuHeader';
import { useState } from 'react';

const defaultffc = () => {};

function Menu({ children, items, onchange = defaultffc }) {
    const [History, setHistory] = useState([{ data: items }]);
    const current = History[History.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => {
                                return [...prev, item.children];
                            });
                        } else {
                            onchange(item);
                        }
                    }}
                />
            );
        });
    };

    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    const handleResetMenu = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    const renderResult = (attrs) => (
        <div tabIndex={-1} {...attrs} className="w-[224px] block">
            <PopperWrapper>
                <div className="pb-[8px]">
                    {History.length > 1 && <Header title={current.title} onBack={handleBack} />}
                    <div className="body overflow-y-auto min-h-[100px] max-h-[400px]">{renderItems()}</div>
                </div>
            </PopperWrapper>
        </div>
    );

    return (
        <Tippy
            offset={[16, 8]}
            delay={[0, 700]}
            placement="bottom-end"
            interactive={true}
            render={renderResult}
            onHidden={handleResetMenu}
            hideOnClick={false}
        >
            {children}
        </Tippy>
    );
}

export default Menu;

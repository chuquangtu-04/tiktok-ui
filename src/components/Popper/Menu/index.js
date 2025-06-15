import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
function Menu({ children, items }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItem key={index} data={item} />);
    };
    return (
        <Tippy
            delay={[0, 700]}
            placement="bottom-end"
            interactive={true}
            render={(attrs) => (
                <div tabIndex={-1} {...attrs} className="w-[224px] block">
                    <PopperWrapper>
                        <div className="pb-[8px]">{renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;

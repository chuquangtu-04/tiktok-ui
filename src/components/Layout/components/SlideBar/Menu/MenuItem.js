import { NavLink } from 'react-router-dom';

function MenuItem({ title, to, icon, iconActive }) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `flex items-center p-[8px] rounded-[4px] transition-colors ease-in-out delay-200 hover:bg-[#16182308] ${
                    isActive ? 'text-[#f0274d]' : ''
                }`
            }
        >
            {({ isActive }) => (
                <>
                    <div className="">
                        <span className="icon">{isActive ? iconActive : icon}</span>
                    </div>
                    <span className="text-[18px] font-bold ml-[10px]">{title}</span>
                </>
            )}
        </NavLink>
    );
}

export default MenuItem;

import config from '~/config';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    UserGroupIcon,
    Live,
    HomeActiveIcon,
    UserGroupActiveIcon,
    LiveActiveIcon,
} from '~/components/Icons/index';

function SlideBar() {
    return (
        <aside className="Wrapper">
            <Menu>
                <MenuItem
                    title="For You"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    iconActive={<HomeActiveIcon />}
                    className="transition-none"
                />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    iconActive={<UserGroupActiveIcon />}
                />
                <MenuItem title="Live" to={config.routes.live} icon={<Live />} iconActive={<LiveActiveIcon />} />
            </Menu>
        </aside>
    );
}

export default SlideBar;

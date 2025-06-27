import { HeaderOnly } from '~/components/Layout';
import config from '~/config';
import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Upload from '~/upload';
import Live from '~/pages/Live';

//không cần đăng nhập vẫn vào được
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.live, component: Live },
    { path: config.routes.search, component: Search, layout: null },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
];

//phải đăng nhập mới vào được
const privateRoutes = [];

export { privateRoutes, publicRoutes };

// Layout
import { HeaderOnly } from '~/components/Layout';
import routeConfig from '~/config/routes'
//Public Routes for not login
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

const publicRoutes = [
    { path: routeConfig.home, component: Home },
    { path: routeConfig.following, component: Following },
    { path: routeConfig.profile, component: Profile },
    { path: routeConfig.upload, component: Upload ,  layout: HeaderOnly},
    { path: routeConfig.search, component: Search ,  layout: null},
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

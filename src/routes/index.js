//Public Routes for not login
import Home from '~/pages/Home';
import Following from '~/pages/Following';

const publicRoutes = [
    { path: '/', componet: Home },
    { path: '/following', compoent: Following },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

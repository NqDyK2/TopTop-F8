//Layouts
import { HeaderOnly, HeaderOny } from '~/Components/Layout';

import HomePage from '~/Pages/Home';
import FollowingPage from '~/Pages/Following';
import Profile from '~/Pages/Profile';
import Upload from '~/Pages/Upload';
//Public Routes
export const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/following', component: FollowingPage },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
];

export const privateRoutes = [];

import App from './app/app';
import HomePage from './pages/home/HomePage';
import Podcasts from './pages/Podcasts/Podcasts';
import PostShow from './pages/PostShow/PostShow.jsx';


export const routes = {
  path: '/',
  component: App,
  childRoutes: [
    {
      indexRoute: {
        component: HomePage
      }
    },
    {
      path: '/podcasts',
      component: Podcasts
    },
    {
      path: '/post/:id',
      component: PostShow
    }
  ]
};
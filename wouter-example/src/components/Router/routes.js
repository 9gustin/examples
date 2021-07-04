import Login from '../../pages/Login'
import Home from '../../pages/Home'
import Profile from '../../pages/Profile'
import NotFound from '../../pages/NotFound'

import { PATHS } from './paths'

export const ROUTES = [
  {
    path: PATHS.home,
    component: Home,
    name: "Home",
    exact: true,
    isPrivate: true
  },
  {
    path: PATHS.profile,
    component: Profile,
    name: "Profile",
    exact: true,
    isPrivate: true
  },
  {
    path: PATHS.login,
    component: Login,
    name: "Login",
    exact: true,
    isPrivate: false
  },
  {
    component: NotFound,
    name: "Not Found",
    isPrivate: false
  }
]

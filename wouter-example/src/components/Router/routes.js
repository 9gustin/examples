import Login from '../../pages/Login'
import Home from '../../pages/Home'
import Profile from '../../pages/Profile'
import NotFound from '../../pages/NotFound'

import { PATHS } from './paths'

export const ROUTES = [
  {
    path: PATHS.home,
    component: Home,
    isPrivate: true
  },
  {
    path: PATHS.profile,
    component: Profile,
    isPrivate: true
  },
  {
    path: PATHS.login,
    component: Login,
    isPrivate: false
  },
  {
    component: NotFound,
    isPrivate: false
  }
]

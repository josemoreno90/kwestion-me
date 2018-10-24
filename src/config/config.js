import getMenuItems from './menuItems'
import locales from './locales'
import routes from './routes'
import themes from './themes'
import grants from './grants'

const config = {
  firebase_config: {
    apiKey: "AIzaSyBAq7IAFSebFq6LiOfT5RSBm-6kr0SG8y8",
    authDomain: "kwestion-me.firebaseapp.com",
    databaseURL: "https://kwestion-me.firebaseio.com",
    projectId: "kwestion-me",
    storageBucket: "kwestion-me.appspot.com",
    messagingSenderId: "1061143748902"
  },
  firebase_config_dev: {
     apiKey: "AIzaSyDjcF-YpbZKx_d6hyIX1rh6GvIR-xm3wYg",
     authDomain: "kwestion-me-dev.firebaseapp.com",
     databaseURL: "https://kwestion-me-dev.firebaseio.com",
     projectId: "kwestion-me-dev",
     storageBucket: "kwestion-me-dev.appspot.com",
     messagingSenderId: "984944696837"
  },
  firebase_providers: [
    'google.com',
    'facebook.com',
    'twitter.com',
    'github.com',
    'password',
    'phone'
  ],
  initial_state: {
    themeSource: {
      isNightModeOn: true,
      source: 'light'
    },
    locale: 'en'
  },
  drawer_width: 256,
  locales,
  themes,
  grants,
  routes,
  getMenuItems,
  firebaseLoad: () => import('./firebase'),
}

export default config

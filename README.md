# vue-routes-i18n-generator
Simple utility function that helps to handle multiple language routes through some aliases.

## Installation
`$ npm install vue-rotues-i18n-generator`

## Usage
```js
import Router from 'vue-router'
import { generateRoutes } from 'vue-rotues-i18n-generator'

import Homepage from '@/containers/Homepage
import Contacts from '@/containers/Contacts

const DEFAULT_LOCALE = 'en'

const routes = [
  {
    paths: ['/it', '/en', '/fr', '/de'],
    name: 'homepage',
    component: Homepage
  },
  {
    paths: ['/it/contatti', '/en/contacts', '/fr/contacts', '/de/kontakte'],
    name: 'contacts',
    component: Contacts
  }
]

export default new Router({
  mode: 'history',
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [
    ...generateRoutes(routes),
    {
      path: '/*',
      redirect: {
        path: `/${DEFAULT_LOCALE}`
      }
    },
  ]
});
```

## test
still missing for now
# vue-routes-i18n-generator
Simple utility function that helps to handle multiple language routes throught some aliases.

## Installation
`$ npm install @giovanniRodighiero/vue-rotues-i18n-generator`

## Usage
```js
const generateRoutes = require('@giovanniRodighiero/vue-rotues-i18n-generator');

const routes = [
  {
    paths: ['/it', '/en', '/fr', '/de'],
    name: 'faq',
    component: Faq
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
    ...generateRoutes(Array.from(routes)),
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
const Package = require('../src');

const routes = [
  {
    paths: ['/it', '/en', '/fr', '/de'],
    name: 'homepage',
    component: {}
  },
  {
    paths: ['/it/contatti', '/en/contacts', '/fr/contacts', '/de/kontakte'],
    name: 'contacts',
    component: {}
  }
]

const generatedRoutes = Package.generateRoutes(routes);

test('generatedRoutes can be imported correctly', () => {
  expect(Package).not.toBeNull();
  expect(typeof Package.generateRoutes).toMatch(/function/);
})

test('generatedRoutes returns an array with the correct length', () => {
  expect(typeof generatedRoutes).toMatch(/object/);
  expect(generatedRoutes.length).toEqual(2);
})

test('generatedRoutes returns an array of items with the correct properties', () => {
  expect(generatedRoutes[0].name).toBeDefined();
  expect(generatedRoutes[0].name).toMatch(/homepage/);

  expect(generatedRoutes[0].path).toBeDefined();
  expect(generatedRoutes[0].path).toMatch(/\/it/);

  expect(generatedRoutes[0].alias).toBeDefined();
  expect(typeof generatedRoutes[0].alias).toMatch(/object/);
  expect(generatedRoutes[0].alias.length).toEqual(3);

  expect(generatedRoutes[0].component).toBeDefined();
})
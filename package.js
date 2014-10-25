Package.describe({
  name: 'mirageglobe:snapsvgcdn',
  summary: 'CDN based Snapsvg for Meteor',
  version: '1.0.0',
  git: 'https://github.com/mirageglobe/meteorsnapsvgcdn'
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.0');
  api.addFiles('mirageglobe:snapsvgcdn.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('mirageglobe:snapsvgcdn');
  api.addFiles('mirageglobe:snapsvgcdn-tests.js');
});

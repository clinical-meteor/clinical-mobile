Package.describe({
  name: 'clinical:mobile',
  version: '0.0.1',
  summary: '',
  git: 'https://github.com/clinical-meteor/clinical-mobile',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');

  api.use('hammer:hammer')


  fastclick

  api.addFiles('mobile.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('clinical:mobile');
  api.addFiles('mobile-tests.js');
});

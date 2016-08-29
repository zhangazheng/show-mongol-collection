Package.describe({
  name: 'zhangzheng:show-mongol-collection',
  version: '0.0.1',
// Brief, one-line summary of the package.
  summary: 'show mongol collection in webpack env.',
// URL to the Git repository containing the source code for this package.
  git: 'https://github.com/zhangazheng/show-mongol-collection.git',
// By default, Meteor will default to using README.md for documentation.
// To avoid submitting documentation, set this field to null.
  documentation: 'README.md',
  debugOnly: true
});

Package.onUse(function (api) {
  api.versionsFrom('1.3.4.4');
  api.use([
    'ecmascript','mongo','msavin:mongol@2.0.1'
  ]);
  api.mainModule('show-mongol-collection.js', 'client');
  api.mainModule('show-mongol-collection.js', 'server');
});

Package.onTest(function (api) {
});
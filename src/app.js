requirejs.config({
  baseUrl: 'src',
  paths: {
    libs: '../node_modules',
    angular: '../node_modules/angular/angular.min',
    text: '../node_modules/text/text',
  },
  shim: {
    angular: {
      exports: 'angular',
    },
  },
});

requirejs(['customerForm']);

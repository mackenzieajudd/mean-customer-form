requirejs.config({
  baseUrl: 'src',
  paths: {
    libs: '../node_modules',
    angular: '../node_modules/angular/angular.min'
  },
  shim: {
    angular: {
      exports: 'angular',
    },
  },
});

requirejs(['customerForm']);

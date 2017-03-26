requirejs.config({
  baseUrl: 'src',
  paths: {
    libs: '../node_modules',
    angular: '../node_modules/angular/angular.min',
    text: '../node_modules/text/text',
    bootstrap: '../node_modules/bootstrap/dist'
  },
  shim: {
    angular: {
      exports: 'angular',
    },
  },
  map: {
  '*': {
      'css': '../node_modules/require-css/css.min'
    }
  }
});

requirejs(['customerForm']);

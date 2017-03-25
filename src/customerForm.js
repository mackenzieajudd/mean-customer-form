define(['angular'], function (angular) {
  angular
    .module('customerForm', [])
    .controller('customerFormController', ['$http', function ($http) {
      this.save = function () {
        $http.post('api/customers', {
          name: this.userForm.name,
          email: this.userForm.email,
          company: this.userForm.company,
        });
      };
    }])
    .directive('customerForm', function () {
      return {
        restrict: 'E',
        scope: {},
        bindToController: {},
        controller: 'customerFormController',
        controllerAs: 'formController',
        template: [
          '<div>',
          'HERE',
          '</div>',
        ].join(''),
      };
    });
});

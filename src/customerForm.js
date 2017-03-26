define(['angular', 'text!customerForm.html'], function (angular, customerFormHtml) {
  angular
    .module('customerForm', [])
    .controller('customerFormController', ['$http', function ($http) {
      this.save = function () {
        $http.post('api/customers', {
          name: this.name,
          email: this.email,
          company: this.company,
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
        template: customerFormHtml,
      };
    });

  angular.bootstrap(document, ['customerForm']);
});

define(['angular'], (angular) => {
  angular
    .module('customerForm', []);
    .controller('customerFormController', ['$http', ($http) => {
      this.save = () => $http.post('api/customers', {
        name: this.userForm.name,
        email: this.userForm.email,
        company: this.userForm.company,
      })
      .success(data => data)
      .failure((data) => {
        this.failureMessage = data;
      });
    }]);
});

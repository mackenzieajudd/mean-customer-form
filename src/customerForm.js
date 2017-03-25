define(['angular'], (angular) => {
  const customerForm = angular.module('customerForm', []);

  const customerFormController = ['$http', ($http) => {
    this.save = () => $http.post('api/customers', {
      name: this.userForm.name,
      email: this.userForm.email,
      company: this.userForm.company,
    })
    .success(data => data)
    .failure((data) => {
      this.failureMessage = data;
    });
  }];
});

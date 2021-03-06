// declare our intentions to use an Angular module app
// 'myApp' is in quotes because that is its name; it is not a variable
var myApp = angular.module('myApp', []);

// we get $http for free, but need to tell the Controller that we're using it
// inject it into function ------------------vvvvv
myApp.controller('GiphyController', function($http) {
  console.log('In controller in client.js');
  // variable vm is this controller
  var vm = this;
  vm.keyWordArray = [];

  // function to get random gifs
  vm.randomFunction = function() {
    console.log('I am here in randomFunction');
    // get call to get random gif
    $http({
      method: 'GET',
      url: 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC'
    }).then(function(response) {
      console.log('back with:', response);
      vm.random = response.data.data.image_url;
    });
  }; // end randomFunction

  // function to get gifs with key word
  vm.keyWordFunction = function(input) {
    console.log('I am here in keyWordFunction');
    // get call to search by key word
    $http({
      method: 'GET',
      url: 'http://api.giphy.com/v1/gifs/search?q=' + input + '&api_key=dc6zaTOxFJmzC'
    }).then(function(response) {
      console.log('back with:', response);
      for (var i = 0; i < 8; i++) {
        vm.keyWordArrayObjects = response.data.data[i].images.downsized.url;
        vm.keyWordArray.push(vm.keyWordArrayObjects);
      }
      return vm.keyWordArray;
    });
    vm.keyWord = '';
  }; // end keyWordFunction
}); // end controller

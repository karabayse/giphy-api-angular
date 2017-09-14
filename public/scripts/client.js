// declare our intentions to use an Angular module app
// 'myApp' is in quotes because that is its name; it is not a variable
var myApp = angular.module('myApp', []);

// we get $http for free, but need to tell the Controller that we're using it
// inject it into function ------------------vvvvv
myApp.controller('GiphyController', function($http) {
  console.log('In controller in client.js');
  // variable vm is this controller
  var vm = this;

  // function to get random gifs
  vm.randomFunction = function(){
    console.log('I am here in randomFunction');
    // get call to get random gif
    $http({
      method: 'GET',
      url: 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC'
    }).then(function(response){
      console.log('back with:', response);
      vm.random = response.data.data.image_url;
    });
  }; // end randomFunction

  // function to get gifs with key word
  vm.keyWordFunction = function(input){
    console.log('I am here in keyWordFunction');
    // get call to search by key word
    $http({
      method: 'GET',
      url: 'http://api.giphy.com/v1/gifs/search?q=' + input + '&api_key=dc6zaTOxFJmzC'
    }).then(function(response){
      console.log('back with:', response);
      // vm.keywordArray = [];
      // var keywordData = response.data;
      // for (var i = 0; i < response.data.data.length; i++) {
      //   vm.keywordArray.push(keywordData.data[i].url);

      vm.keyWordSearch = response.data.data.url;
      console.log(keyWordSearch);
      // } // end for loop
    // }); // end .then

  }); // end keyWordFunction
    vm.keyWord = '';
}; // end controller
});

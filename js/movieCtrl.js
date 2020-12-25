
var app = angular.module('movieList', []);
app.controller('movieCtrl',  ['$rootScope', '$scope',  '$http', '$timeout', '$window', function ($rootScope, $scope, $http, $timeout, $window) {
    $http({
        method: 'GET',
        url: 'http://starlord.hackerearth.com/movieslisting'
    })
        .then(function (response) {
            if (response.status == 200) {
                $scope.movieList = response.data;
                
                $scope.data_length = $scope.movieList.length;
                var currentPage = 0;
                $scope.pageSize = 9;

                if ($scope.data_length <=0){
                    $scope.noRecord = true;
                }
                else{
                    $scope.noRecord = false;
                }

                $scope.numberOfPages = function () {
                    return Math.ceil($scope.data_length / $scope.pageSize);
                }

                var limitStep = 9;
                $scope.limit = limitStep;
                $scope.currentPage = currentPage;

                $scope.incrementLimit = function () {
                    $scope.limit += limitStep;
                    $scope.currentPage += 1;
                };

                $scope.decrementLimit = function () {
                    $scope.limit -= limitStep;
                    $scope.currentPage -= 1;
                }

                $scope.search = function (item) {
                    if ($scope.searchText == undefined) {
                        return true;
                    } else {
                        if (
                            item.movie_title.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 || item.country.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 || item.language.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1
                            || item.title_year.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1
                        ) {
                            return true;
                        }
                    }
                    return false;
                }

                

            }
        })
        .catch(function (response) {
            
        });

  
}])
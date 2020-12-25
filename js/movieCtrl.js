
var app = angular.module('movieList', []);
app.controller('movieCtrl',  ['$scope', function ( $scope) {
   
                $scope.movieList = [
                    { 
                        "designation":"Senior System Engineer",
                        "company":"Infosys",
                        "period": "2020-present",
                        "technology":"ReactJS, React Native",
                        "project":[
                            {
                                "name": "Traceibility App",
                                "technology_used":"React Native"
                            }
                        ]
                    },
                    { 
                        "designation":"Software Engineer",
                        "company":"Iglulabs Pvt Ltd",
                        "period": "2019-2020",
                        "technology":"Angular , HTML5, CSS3, Bootstrap 4",
                        "project":[
                            {
                                "name": "Alum-n-i Web App",
                                "technology_used":"Angular, HTML5, CSS3, Bootstrap 4"
                            },
                            {
                                "name": "Alum-n-i Dashboard",
                                "technology_used":"Angular, HTML5, CSS3, Bootstrap 4"
                            }
                        ]
                    },
                    { 
                        "designation":"Software Engineer",
                        "company":"Sing Sys Software Pvt Ltd",
                        "period": "2017-2019",
                        "technology":"AngularJS , HTML, CSS, Bootstrap, jQuery",
                        "project":[
                            {
                                "name": "OAKS ERP",
                                "technology_used":"AngularJS , HTML, CSS, Bootstrap, jQuery"
                            },
                            {
                                "name": "Tapow",
                                "technology_used":"Angular, HTML5, CSS3, Bootstrap 4, Nodejs"
                            }
                        ]

                    }
                ]

                $scope.education= [
                    {
                        "name": "B.Tech (I.T)",
                        "institute":"Shri Ramswaroop Memorial Group of Professional Colleges",
                        "period": "2013-2017"
                    },
                    {
                        "name": "Intermediate",
                        "institute":"St. Anthony's Senior Secondary School",
                        "period": "2009-2013"
                    },
                    {
                        "name": "Student",
                        "institute":"Kendriya Vidyalaya",
                        "period": "As kid"
                    }
                ]

                $scope.aboutMe = " Hey there! 👋🏽 I am Abhiruchi. I come from Bangalore, India. I am an adept Web Developer and find myself crawling towards the beauties and aesthetics of the web. I also work extensively with iOS and Android using React Native. I feel like it's every         consumer's necessity to experience quality products, with a robust feature-set whilst enjoying a hassle-free User Experience ☄️ I strive to make that possible in every product I develop/design. Cheers! 🍻";
                
              
                $scope.year = (new Date()).getFullYear(); 
}])
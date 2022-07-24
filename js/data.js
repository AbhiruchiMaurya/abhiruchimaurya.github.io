var app = angular.module("myList", []);
app.controller("myCtrl", [
  "$scope",
  function ($scope) {
    $scope.experienceList = [
      {
        designation: "Technology Analyst",
        company: "Infosys Limited",
        period: "2020-Present",
        technology: "VueJS, ReactJS, React Native",
        project: [
          {
            name: "CircorSmart",
            technology_used: "React Native",
            link: "https://androidappsapk.co/detail-circorsmart/",
          },
          {
            name: "COVID Tools",
            technology_used: "VueJS, Jest, Web Accessibility",
          },
          {
            name: "CCC",
            technology_used: "VueJS, Jest, Web Accessibility",
          },
          {
            name: "WW",
            technology_used: "VueJS, Jest, Web Accessibility",
          },
          {
            name: "WWT",
            technology_used: "VueJS, Jest, Web Accessibility",
          }
        ],
      },
      {
        designation: "Software Engineer",
        company: "Iglulabs Pvt Ltd",
        period: "2019-2020",
        technology: "Angular , HTML5, CSS3, Bootstrap 4",
        project: [
          {
            name: "Alum-n-i Web App",
            technology_used: "Angular, HTML5, CSS3, Bootstrap 4",
            link: "https://staging.alum-n-i.com/",
          },
          {
            name: "Alum-n-i Dashboard",
            technology_used: "Angular, HTML5, CSS3, Bootstrap 4",
          },
        ],
      },
      {
        designation: "Software Engineer",
        company: "Sing Sys Software Pvt Ltd",
        period: "2017-2019",
        technology: "AngularJS , HTML, CSS, Bootstrap, jQuery",
        project: [
          {
            name: "OAKS ERP",
            technology_used: "AngularJS , HTML, CSS, Bootstrap, jQuery",
            link: "https://www.oaks.com.sg/",
          },
          {
            name: "Tapow",
            technology_used: "Angular, HTML5, CSS3, Bootstrap 4, Nodejs",
          },
        ],
      },
    ];

    $scope.volunteerList = [
      {
        designation: "Design Head",
        description: "Design Head for Gantavya Times ( College Tech Magazine )",
      },
      {
        designation: "Coordinator",
        description:
          "Worked as coordinator for Literati Cell ( College Literature Club ) in 3rd year of BTech.",
      },
      {
        designation: "Developer",
        description:
          "Worked as developer for Mix-Hub ( Startup ) in 3rd & 4rth year of BTech.",
      },
      {
        designation: "Blood Donor",
        description:
          "Blood donation camp organized by Dr.Ram Manohar Lohia Hospital.",
      },
      {
        designation: "Poster Designer",
        description:
          "Worked as poster designer for Literati Cell ( College Literature Club ), Euphony Club ( College Singing Club ), Informal Cell in 2nd & 3rd year of BTech.",
      },
      {
        designation: "Designer",
        description:
          "Volunteered as Designer for INDA – Indo Nepal Doctor’s Association for 2015 Nepal earthquake.",
      },
      {
        designation: "Assistant-Coordinator",
        description:
          "Worked as assistant coordinator for Literati Cell ( College Literature Club ) in 2nd year of BTech.",
      },
      {
        designation: "Volunteer",
        description:
          "Worked as assistant coordinator for Literati Cell ( College Literature Club )  in 1st year of BTech.",
      },
    ];

    $scope.education = [
      {
        name: "B.Tech (I.T)",
        institute: "Shri Ramswaroop Memorial Group of Professional Colleges",
        link: "http://srmcem.ac.in/",
        period: "2013-2017",
      },
      {
        name: "Intermediate",
        institute: "St. Anthony's Senior Secondary School",
        link: "http://www.stanthonyschools.org/",
        period: "2009-2013",
      },
      {
        name: "Student",
        institute: "Kendriya Vidyalaya, Army School",

        period: "As kid",
      },
    ];

    $scope.aboutMe =
      " Hey there! 👋🏽 I am Abhiruchi. I come from Bangalore, India. I am an adept Web Developer with more than 5 years of experience and find myself crawling towards the beauties and aesthetics of the web. I feel like it's every consumer's necessity to experience quality products, with a robust feature-set whilst enjoying a hassle-free User Experience ☄️ I strive to make that possible in every product I develop/design. Cheers! 🍻";

    $scope.year = new Date().getFullYear();
  },
]);

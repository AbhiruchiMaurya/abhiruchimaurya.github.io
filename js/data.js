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
          },
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

    $scope.alumna = [
      {
        name: "Ramswaroopian",
        institute:
          "Student of Shri Ramswaroop Memorial Group of Professional Colleges",
        link: "http://srmcem.ac.in/",
        src: "images/srmcem.png",
      },
      {
        name: "Anthonian",
        institute: "Student of St. Anthony's Senior Secondary School",
        link: "http://www.stanthonyschools.org/",
        src: "images/anthony.jpg",
      },
      {
        name: "Army School Alumna",
        institute: "Student of Army School Tenga Valley",
        link: "https://kvsangathan.nic.in/",
        src: "images/army-school.png",
      },
      {
        name: "KVian",
        institute: "Student of Kendriya Vidyalaya",
        link: "https://kvsangathan.nic.in/",
        src: "images/kvs.jpg",
      },
    ];

    $scope.hobbies = [
      {
        name: "Anime",
        list: [
          "Naruto",
          "A Silent Voice",
          "Your Name", 
          "Death Note",
          "Tokyo Ghoul",
          "Attack on Titans",
          "Noragami",
          "The Pet Girl of Sakurasou",
          "Run with the wind",
          "Chihayafuru",
          "Nisekoi",
          "Maid Sama",
          "Sword Art Online",
          "My Hero Academia",
          "Erased",
          "ReLife",
          "o Haru Ride",
          "Fruit Basket",
          "Kyoukai no Kanata",
          "Kokoro Connect",
          "Kimi ni todoke",
          "The Seven Deadly Sins",
          "Digimon",
          "You Lie in April",
          "Toradora",
          "Voilet Evergarden",
          "HOD",
          "Orange",
          "The Wolf Children",
          "Boruto",
          "A Whiskey Away",
          "Words Bubble Up Like Soda pop",
          "The Garden of words",
          "When Marnie was there",
          "5 Centimeter Per Second",
          "The Girl Who lept through time",
          "Howl's Moving Castle",
          "Spirited Away",
          "Only Yesterday",
          "My Neighbor Totoro",
          "Kiki's Delivery Service",
          "Ponyo",
          "Into the Forest of Fireflies’ Light",
          "The Tale of Princess Kaguya",
          "Whisper of the Heart",
          "Mirai",
          "Princess Mononoke",
          "Grave of the Fireflies",
          "The Quintessential Quintuplets"
        ],
      },
      {
        name: "Sitcoms/TV Shows",
        list: [
          "Takeshi's Castle",
          "F.R.I.E.N.D.S",
          "TVF Pitchers",
          "How I Met Your Mother",
          "Game of Thrones",
          "Hannah Montana",
          "Four More Shots",
          "Stranger Things",
          "TVF - Tripling",
          "TVF - Ye Meri Family",
          "Suits",
          "Big Bang Theory",
          "Sherlock",
          "Me Bean",
          "Money Heist",
          "Lucifer",
          "Sex Education",
          "The Originals",
          "Vampire Diaries",
          "Dexter",
          "13 Reasons Why",
          "The Family Man",
          "Permanent Roommates by TVF",         
          "Loki",          
          "Asur",          
          "Scam 1992",
          "Legacies",
          "Never Have I Ever",
          "Suits Life of Zack and Cody",
          "Shaktimaan",
          "Junior G",
          "Shakalaka Boom Boom",
          "Sonpari",
          "Aryaman",
          "Bongo",
          "Teen Titans",
          "Tom & Jerry",
          "Merlin",
          "24",
          "Arrow",
          "The Flash",
          "DC Legends of Tomorrow",
          "Gotham",
          "Supergirl",
          "Silicon Valley",
          "Mr Robot",
          "Young Sheldon",
          "Chernobyl",
          "TVF - Aspirants",
          "TVF- Kota Factory",          
          "Moms",
          "Power Rangers",
          "Rocket Boys"
        ],
      },
      {
        name: "Reading",
        list: [
          "The Lost Symbol (Dan Brown)",
          "The Almanack Of Naval Ravikant (Eric Jorgenson)",
          "Who will cry when you die (Robin Sharma)",
          "The Palace Of Illusion (Chitra Banerjee Divakaruni)",
          "The Immortals of Meluha (Amish Tripathi)",   
          "Rich Dad Poor Dad (Robert Kiyosaki)", 
          "Chanakya's Chant (Ashwin Sanghi)",
          "I Too Had a Love Story (Ravinder Singh)",      
          "Digital Fortress (Dan Brown)",
          "Deception Point (Dan Brown)",      
          "Five Points Someone (Chetan Bhagat)",
          "The 3 Mistakes of my life (Chetan Bhagat)",
          "2 States (Chetan Bhagat)",
          "Animorphs Series (Katherine Applegate)",          
          "The Secret of the Nagas (Amish Tripathi)",
          "The Oath of the Vayuputras (Amish Tripathi)",
          "The Diary of a Young Girl (Anne Frank)",
          "Twilight (Stephenie Meyer)"
        ],
      },
      {
        name: "Travel",
        list: [
          "Tenga Valley, Arunachal Pradesh",
          "Pathankot, Punjab",
          "Bangalore, Karnataka",
          "Bambolim Camp, Goa",          
          "Jaipur , Rajasthan",
          "Lucknow , Uttar Pradesh",
          "Dharmshala, Himachal Pradesh",
          "Yercaud, Tamil Nadu",
          "Dalhousie, Himachal Pradesh",
          "New Delhi",
          "McLeod Ganj, Himachal Pradesh ",         
          "Chandigarh, Punjab",
          "Panji, Goa",
          "Bijapur, Karnataka",
          "Kanpur , Uttar Pradesh",           
          "Ballia , Uttar Pradesh", 
          "Barabanki , Uttar Pradesh", 
          "Mathura , Uttar Pradesh", 
          "Agra , Uttar Pradesh", 
          "Noida , Uttar Pradesh", 
          "Gorakhpur , Uttar Pradesh"                
        ],
      },
      // {
      //   name: "Learning",
      //   list: [
      //     "Frontend Techs",
      //     "CSS Art",
      //     "Language"
      //   ],
      // },
      {
        name: "Sports Played",
        list: [
          "Cricket",
          "Badminton",
          "Handball",
          "Table Tennis",
          "Clash Of Clan",
          "NFS",
          "Chess",
          "Carrom",
          "Ludo"
        ],
      },
      {
        name: "Miscellaneous",
        list: [
          "Singing / Song Recording",
          "Dancing",
          "Making Videos",
          "Making Websites",
          "Poster Designing"
        ],
      },
    ];

    $scope.aboutMe =
      " Hey there! 👋🏽 I am Abhiruchi. I come from Bangalore, India. I am an adept Web Developer with more than 4 years of experience and find myself crawling towards the beauties and aesthetics of the web. I feel like it's every consumer's necessity to experience quality products, with a robust feature-set whilst enjoying a hassle-free User Experience ☄️ I strive to make that possible in every product I develop/design. Cheers! 🍻";

    $scope.year = new Date().getFullYear();
  },
]);

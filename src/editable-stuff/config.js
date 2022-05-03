// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Fatih Furkan",
  middleName: "",
  lastName: "Ersoy",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/fatihfurkanersoy",
    },

    {
      image: "fa-instagram",
      url: "https://www.instagram.com/fatihfurkanersoy/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/fatihfurkanersoy/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/fatihfurkaan0/",
    },
    {
      image: "fa-youtube",
      url: "https://www.youtube.com/fatihfurkan/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/fatih_2.png"),
  imageSize: 375,
  message:
    "I'm a final year undergraduate student in Electric Electronic Engineering at Konya Technical University. I'm Chairman of the Board of the Artificial Intelligence and Image Processing Community, known as YAZGİT at my university and has 250 members.    ",
  resume: "https://www.canva.com/design/DAEuaopT5QY/us8X03Z00sd54hBOSAhs5Q/view?utm_content=DAEuaopT5QY&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "fatihfurkanersoy", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Leadership",
  message:"I am a final year student of bachelor of science in electrical and electronics engineering student at Turkey. I am currently working as a Software Engineer in a company that carries out international projects. At the same time, since I am an Electrical and Electronics engineering student, I am also working on hardware. I learned Python in the Python course given by our Artificial Intelligence and Image Processing Community, of which I am the chairman of the board of directors, 3 years ago. My first project at that time was a License Plate Recognition system. I used OCR and OpenCV libraries. Later, I designed an autonomous vehicle that can follow the lane with my friend. I used Jetson Nano as the main processor and CNN as the artificial intelligence model. Currently, I am a consultant to 14 teams and a captain to 1 team in our YAZGİT Group. We are getting ready for TEKNOFEST, the most important competition in Turkey. We ranked 3rd in Turkey in the Reporting Stage. It has taught me the grow my skills in team collaboration and project leadership. I have been working as a full-time engineer in an international company for 1 year. I am working in the field of IoT. I develop Temperature Monitoring Systems and customer-based special projects. I develop these projects mainly in Python and C/C++.",
  
  images: [
    { 
      img: require("../editable-stuff/yazigt.png"), 
      label: "", 
      paragraph: "YAZGIT" 
    },
    { 
      img: require("../editable-stuff/elektrik.png"), 
      label: "", 
      paragraph: "FIRST PROJECT" 
    },
    { 
      img: require("../editable-stuff/benoda.png"), 
      label: "", 
      paragraph: "YAZGİT ROOM" 
    },
  ],
  imageSize: {
    width:"400",
    height:"750"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Altium Designer", value: 75 },
    { name: "Arduino", value: 95 },
    { name: "C/C++", value: 65 },
    { name: "Proteus", value: 80 },
    { name: "EAGLE", value: 50 },
    { name: "Keil uVision5", value: 65 },
    { name: "Office 365", value: 85 },
    { name: "MQTT Protocol", value: 90 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 70 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 95 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 95 },
    { name: "Creativity", value: 80 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "fatihfurkanersoy2@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Software and Hardware Engineer',// Here Add Company Name
      companylogo: require('../assets/img/kutarson.jpg'),
      date: 'October 2020 – Octorber 2021',
    },
    {
      role: 'Intern',
      companylogo: require('../assets/img/tcdd.png'),
      date: 'Agust 2020 – October 2020',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };

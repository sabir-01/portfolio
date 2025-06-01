// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import csharpLogo from "./assets/tech_logo/csharp.png";

// Experience Section Logo's
import webverseLogo from "./assets/download.png";
import newtonschoolLogo from "./assets/MUS TECHSOL LOGO low.webp";

// Education Section Logo's
import glaLogo from "./assets/bahria uni.jpg";
import bsaLogo from "./assets/bahria college.jpg";
import vpsLogo from "./assets/school majeed.jpg";

// Project Section Logo's
import githubdetLogo from "./assets/sabir.jpeg";
import movierecLogo from "./assets/work_logo/movie_rec.png";
import taskremLogo from "./assets/work_logo/task_rem.png";
import npmLogo from "./assets/work_logo/npm.png";
import webverLogo from "./assets/work_logo/web_dig.png";
import cmLogo from "./assets/work_logo/cm.png";
import imagesearchLogo from "./assets/work_logo/image_search.png";
import removebgLogo from "./assets/work_logo/remove_bg.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "SASS", logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Angular", logo: angularLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "GSAP", logo: gsapLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Springboot", logo: springbootLogo },
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "C-Sharp", logo: csharpLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: webverseLogo,
    role: ".Net Developer",
    company: "",
    date: "Jan 2025 - Present",
    desc: "Developed dynamic and scalable web applications using the .NET framework, managing both frontend and backend development. Collaborated with cross-functional teams to build responsive user interfaces, implement RESTful APIs with ASP.NET Core, and optimize application performance in an agile environment",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Redux",
      " Next Js",
    ],
  },

  {
    id: 1,
    img: newtonschoolLogo,
    role: "Frontend Intern",
    company: "MUS Tecsol Pvt. Ltd.",
    date: "Aug 2024 - Oct 2024",
    desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
    skills: ["HTML", "CSS", "Javascript", "Bootstrap", "Figma", "Material UI"],
  },
];

export const education = [
  {
    id: 0,
    img: glaLogo,
    school: "Bahria University, Karachi",
    date: "July 2021 - July 2025",
    grade: "3.1 CGPA",
    desc: "I have completed my bachelor's degree (BSE) in Softawre Engineering , Karachi. During my time at BUK, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at BUK University has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Bachelor's Of Software Engineering - BSE",
  },
  {
    id: 1,
    img: bsaLogo,
    school: "Bahria College Majeed SRE",
    date: "2019 - 2021",
    grade: "84.2%",
    desc: "I completed my FSc in Pre-Engineering from Bahria College between 2019 and 2021. During this time, I developed a strong foundation in core science and mathematics subjects such as Physics, Chemistry, and Mathematics. My education equipped me with analytical and problem-solving skills, preparing me for further studies in engineering and technology.",
    degree: "FSc Pre-Engineering",
  },
  {
    id: 2,
    img: vpsLogo,
    school: "Bahria School Majeed SRE",
    date: "2017 - 2019",
    grade: "A+",
    desc: "I completed my matriculation from Bahria School between 2017 and 2019 with a focus on Biology. My studies provided a strong academic foundation in science subjects, enhancing my analytical and critical thinking abilities.",
    degree: "Matriculation - Biology",
  },
];

export const projects = [
  {
    id: 0,
    title: "Image Hover Effect",
    description:"A simple and user-friendly web application built with HTML and CSS, designed to uncover and display detailed GitHub profile information. Users can enter a GitHub username to fetch data such as profile stats, repositories, and followers. The clean and responsive interface ensures a smooth experience, making it a handy tool for developers and recruiters alike.",
    image: githubdetLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github:"https://github.com/sabir-01/Responsive-website",
    webapp: "round-cake.surge.sh",
  },
  {
    id: 1,
    title: "Portfoilio ",
    description:
      "A full-stack Portfoilio developed using HTML, CSS, and JavaScript, designed specifically for GATE and UGC NET students to practice previous year questions and generate customized tests. The platform features interactive quizzes, personalized test creation, detailed results, and performance tracking, enabling students to monitor their progress and enhance their preparation effectively.",
    image: sassLogo,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "HTML",
     
    ],
    github: "https://github.com/sabir-01/Responsive-website",
    webapp: "http://subdued-mass.surge.sh/",
  },
  {
    id: 2,
    title: "Movie Recommendation App",
    description:
      "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
    image: movierecLogo,
    tags: ["Python", "API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/codingmastr/Movie-Recommendation-App",
    webapp: "https://movie-recommendation-app-jet.vercel.app/",
  },
  
];

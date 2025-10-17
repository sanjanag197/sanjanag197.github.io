/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Sanjana",
  logo_name: "sanjana.g()",
  full_name: "Sanjana Gangishetty",
  subTitle: "Backend Developer, Open Source Enthusiast 🔥. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1ThjCisD-FnEPQcYAYU2XBsulYWcyCGF2/view?usp=drivesdk",
  mail: "mailto:sanjana2003g@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/sanjanag197",
  linkedin: "https://www.linkedin.com/in/sanjana-gangishetty7",
  gmail: "sanjana2003g@gmail.com",
};

const skills = {
  data: [
    {
      title: "Software Engineering & Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Build full-stack applications with scalable microservices and REST APIs",
        "⚡ Develop interactive, responsive web/mobile frontends using React, React Native, and TypeScript",
        "⚡ Architect secure payment processing and enterprise-level platforms handling large-scale financial transactions",
        "⚡ Integrate automated pipelines and testing frameworks to improve accessibility and reliability",
        "⚡ Strong foundation in system design, performance optimization, and agile practices",
      ],
      softwareSkills: [
        { skillName: "Java", fontAwesomeClassname: "devicon-plain:java-wordmark", style: { color: "#f89820" } },
        { skillName: "C++", fontAwesomeClassname: "simple-icons:cplusplus", style: { color: "#00599C" } },
        { skillName: "Python", fontAwesomeClassname: "simple-icons:python", style: { color: "#3776AB" } },
        { skillName: "JavaScript", fontAwesomeClassname: "simple-icons:javascript", style: { color: "#F7DF1E" } },
        { skillName: "TypeScript", fontAwesomeClassname: "simple-icons:typescript", style: { color: "#3178C6" } },
        { skillName: "React", fontAwesomeClassname: "simple-icons:react", style: { color: "#61DAFB" } },
        { skillName: "SQL", fontAwesomeClassname: "simple-icons:mysql", style: { color: "#4479A1" } },
        { skillName: "PostgreSQL", fontAwesomeClassname: "simple-icons:postgresql", style: { color: "#336791" } },
        { skillName: "MongoDB", fontAwesomeClassname: "simple-icons:mongodb", style: { color: "#47A248" } },
        { skillName: "Git", fontAwesomeClassname: "simple-icons:git", style: { color: "#E94E32" } },
      ],
    },
    {
      title: "Cloud & Infrastructure",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Architect and deploy cloud-native solutions across AWS and Oracle Cloud",
        "⚡ Build and manage CI/CD pipelines with GitHub Actions, Docker, Kubernetes",
        "⚡ Deploy enterprise-scale conversational AI and scalable data infrastructure",
        "⚡ Experience in cloud hosting, monitoring, and system reliability engineering",
      ],
      softwareSkills: [
        { skillName: "AWS", fontAwesomeClassname: "simple-icons:amazonaws", style: { color: "#FF9900" } },
        { skillName: "Oracle Cloud", fontAwesomeClassname: "simple-icons:oracle", style: { color: "#F80000" } },
        { skillName: "Docker", fontAwesomeClassname: "simple-icons:docker", style: { color: "#1488C6" } },
        { skillName: "Kubernetes", fontAwesomeClassname: "simple-icons:kubernetes", style: { color: "#326CE5" } },
        { skillName: "GitHub Actions", fontAwesomeClassname: "simple-icons:githubactions", style: { color: "#5b77ef" } },
        { skillName: "Firebase", fontAwesomeClassname: "simple-icons:firebase", style: { color: "#FFCA28" } },
      ],
    },
    {
      title: "Data Science, AI & Analytics",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Apply ML/AI to improve NLP chatbots, anomaly detection, and predictive modeling",
        "⚡ Build advanced data pipelines and cloud-based reporting systems",
        "⚡ Optimize algorithms and distributed computing workflows for high-performance research",
        "⚡ Experience with statistical modeling, visualization, and actuarial mathematics",
        "⚡ Hands-on with genome computing and computational biology research",
      ],
      softwareSkills: [
        { skillName: "Python", fontAwesomeClassname: "simple-icons:python", style: { color: "#3776AB" } },
        { skillName: "R", fontAwesomeClassname: "simple-icons:r", style: { color: "#276DC3" } },
        { skillName: "Pandas", fontAwesomeClassname: "simple-icons:pandas", style: { color: "#150458" } },
        { skillName: "Jupyter", fontAwesomeClassname: "simple-icons:jupyter", style: { color: "#F37626" } },
        { skillName: "Power BI", fontAwesomeClassname: "simple-icons:powerbi", style: { color: "#F2C811" } },
        { skillName: "SAS", fontAwesomeClassname: "simple-icons:sas", style: { color: "#0066A1" } },
        { skillName: "Apache Spark", fontAwesomeClassname: "simple-icons:apachespark", style: { color: "#E25A1C" } },
      ],
    },
  ],
};


const degrees = {
  degrees: [
    {
      title: "University of Maryland, College Park",
      subtitle: "B.S. in Computer Science: Data Science, Minor in Statistics",
      logo_path: "umd.png", // replace with your logo file
      alt_name: "UMD",
      duration: "2021 - 2025",
      descriptions: [
        "⚡ GPA: 3.7 | Dean’s List | Apex Quant | College Park Scholars",
        "⚡ Coursework: Algorithms, Database Design, AI, Machine Learning, Compilers, Actuarial Mathematics",
        "⚡ Involved in AppDev Club, Girls Code It (Founder), Bitcamp, Maryland Dhoom",
        "⚡ AWS Certified Cloud Practitioner | Oracle Cloud Infrastructure Certified AI Foundations Associate",
      ],
      website_link: "https://www.umd.edu/",
    },
  ],
};


const certifications = {
  certifications: [
    {
      title: "AWS Certified Cloud Practitioner",
      subtitle: "Amazon Web Services",
      logo_path: "aws.png", // replace with the AWS logo file you have
      certificate_link: "https://www.your-certificate-link.com", // replace with your actual certificate link
      alt_name: "AWS",
      color_code: "#FF9900",
    },
    {
      title: "Oracle Cloud Infrastructure Certified AI Foundations Associate",
      subtitle: "Oracle Cloud",
      logo_path: "oracle.png", // replace with Oracle logo file
      certificate_link: "https://www.your-certificate-link.com", // replace with your actual certificate link
      alt_name: "Oracle Cloud",
      color_code: "#F80000",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have experience across software development, data science, AI, and volunteering initiatives. I enjoy building impactful projects and mentoring others in tech.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Software Development Engineer",
          company: "CVS Health",
          company_url: "https://www.cvshealth.com/",
          logo_path: "cvs.png",
          duration: "June 2025 - Present",
          location: "Remote / USA",
          description: `Built enterprise-scale anomaly detection system for financial data management achieving 95% accuracy and reducing monetary errors by 18%. 
          Architected and deployed a scalable AI-driven conversational platform serving 100K+ weekly users. 
          Deployed microservices via REST APIs, improving feature delivery by 25% through agile practices.`,
          color: "#0071C5",
        },
        {
          title: "Full Stack Developer",
          company: "NitesOut Entertainment",
          company_url: "http://nitesout.com/",
          logo_path: "nitesout.png",
          duration: "November 2023 - May 2025",
          location: "Remote / USA",
          description: `Led development of React Native mobile app and web platform. 
          Designed secure payment processing handling $50K+ monthly transactions. 
          Built automated notification infrastructure improving user engagement by 25%. 
          Developed ticketing ecosystem reducing customer costs by 27%.`,
          color: "#ee3c26",
        },
        {
          title: "Software Engineer Intern",
          company: "CVS Health",
          company_url: "https://www.cvshealth.com/",
          logo_path: "cvs.png",
          duration: "May 2024 - August 2024",
          location: "Remote / USA",
          description: `Transformed guided chatbot into intelligent free-form conversational system improving accuracy from 85% to 98%. 
          Integrated RESTful APIs with comprehensive testing frameworks. 
          Reduced user attrition by 20% through collaboration with product and design teams.`,
          color: "#0071C5",
        },
        {
          title: "Data Analyst Intern",
          company: "Softweb Solutions",
          company_url: "https://www.softwebsolutions.com/",
          logo_path: "softweb.png",
          duration: "May 2023 - August 2023",
          location: "Remote / USA",
          description: `Engineered automated reporting infrastructure, reducing analyst time by 30%. 
          Delivered actionable insights driving 12% improvement in client operational efficiency. 
          Architected cloud-based scalability solutions for future migrations.`,
          color: "#FBBD18",
        },
        {
          title: "Genome Computing Project Manager and Lead Researcher",
          company: "UMD FIRE",
          company_url: "https://fire.umd.edu/",
          logo_path: "umd.png",
          duration: "August 2022 - August 2023",
          location: "College Park, MD",
          description: `Led cross-functional team to develop high-performance computing solutions for biological data analysis. 
          Optimized distributed workflows using C++ and parallel processing, reducing execution time by 65%.`,
          color: "#4285F4",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Intern",
          company: "Leadership Initiatives: International Internship Program",
          company_url: "#",
          logo_path: "leadership.png",
          duration: "December 2020 - June 2022",
          location: "Remote / International",
          description: `Worked with Nigerian officials to execute a malnutrition awareness campaign, successfully increasing public awareness and securing funding to support prevention and treatment efforts.`,
          color: "#FF9900",
        },
        {
          title: "Co-Leader",
          company: "StemMillions",
          company_url: "https://www.stemmillions.org/",
          logo_path: "stem.png",
          duration: "September 2020 - June 2022",
          location: "Remote",
          description: `Implemented cohort programs and events to inspire young women to pursue STEM careers. Provided mentorship and support to empower students with knowledge, skills, and confidence.`,
          color: "#F80000",
        },
        {
          title: "Educator",
          company: "Best Brains Learning Center",
          company_url: "https://bestbrains.com/",
          logo_path: "bestbrains.png",
          duration: "November 2021 - June 2022",
          location: "Remote / USA",
          description: `Taught students (K-8) English and Math. Graded assignments, provided one-on-one support, and maintained a positive learning environment to enhance academic growth.`,
          color: "#61DAFB",
        },
        {
          title: "Founder",
          company: "Girls Code It",
          company_url: "https://girlscodeit.org/",
          logo_path: "girlscodeit.png",
          duration: "September 2020 - May 2024",
          location: "Remote / USA",
          description: `Founded and scaled a technology education non-profit serving 300+ participants. Designed curriculum leading 75% of participants to pursue advanced STEM projects. Built sustainable mentorship programs.`,
          color: "#4285F4",
        },
        {
          title: "Coding Mentor",
          company: "Best Brains Learning Center",
          company_url: "https://bestbrains.com/",
          logo_path: "bestbrains.png",
          duration: "November 2021 - Present",
          location: "Remote / USA",
          description: `Provide technical instruction and mentorship to students, focusing on coding, problem-solving, and collaborative skills.`,
          color: "#FBBD18",
        },
      ],
    },
  ],
};


// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, Python Scripts, and React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "hari-crop.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
    link: "https://twitter.com/Harikrushn9",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Keep Calm and Carry On",
      url: "https://github.com/harikanani/Keep-Calm-and-Carry-On.github.io",
      description:
        "This platform enables users to practice Augmented Reality meditation, play stress burster games, track task completion and engage in motivational exercises to cope with stress and anxiety at work.  ",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
        {
          name: "NodeJs",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "Augmented Reality",
          iconifyClass: "bi:badge-ar",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/harikanani/Keep-Calm-and-Carry-On.github.io",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Devpost",
          url: "https://devpost.com/software/keep-calm-and-carry-on",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
        {
          name: "Live Demo",
          url:
            "https://akshitagupta15june.github.io/Keep-Calm-and-Carry-On.github.io/",
          iconifyClass: "mdi:web",
        },
      ],
    },
    {
      id: "1",
      name: "YOG4LIFE SOCIAL APP",
      url: "https://github.com/kevalvavaliya/Yog4Life",
      description:
        "An app for helping people their healthy life. Yog4Life Has a feed feature which is help to get information from the folks, Yog4Life has an anonymous chat room to get connected with the world.",
      languages: [
        {
          name: "Flutter",
          iconifyClass: "logos-flutter",
        },
        {
          name: "NodeJs",
          iconifyClass: "logos-nodejs",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/kevalvavaliya/Yog4Life",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Devfolio",
          url: "https://devfolio.co/projects/yoglife-b20d",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
      ],
    },
    {
      id: "2",
      name: "Adoptisity",
      url: "https://github.com/kevalvavaliya/Adoptisity",
      description:
        "Our mission is to spread awareness about the benefits of adoption and to support LGBT families so that everyone has the chance to have a loving home environment.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Wix",
          iconifyClass: "bxl:wix",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/harikanani/Adoptisity",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Devpost",
          url: "https://devpost.com/software/adoptisity",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
        {
          name: "Live Demo",
          url: "https://rajmahadevwala1.wixsite.com/adoptisity",
          iconifyClass: "mdi:web",
        },
      ],
    },
    {
      id: "3",
      name: "FinSplit",
      url: "https://github.com/rajmahadev8/Fin-Split",
      description:
        "Split your bills with your friends without any hassle. Manage Group Expenses, Track your expenses, and much more.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "NodeJs",
          iconifyClass: "logos-nodejs",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/rajmahadev8/Fin-Split",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Devpost",
          url: "https://devpost.com/software/finsplit",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
      ],
    },
    {
      id: "4",
      name: "Emosic",
      url: "https://github.com/kevalvavaliya/Emosic",
      description:
        "An app that plays music according to your mood. Created a playlist management UI and used SpotifyAPI to control player client based on mood detection using ml model.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/kevalvavaliya/Emosic",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Devpost",
          url: "https://devpost.com/software/emosic",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
      ],
    },
    {
      id: "5",
      name: "Fileblok",
      url: "https://github.com/harikanani/Fileblok",
      description:
        "Keep your projects moving with seamless transfer experice. FileBlok is a file transfer app that allows you to transfer files from one device to another without any hassle. We built this app using Flutter, Node.js and StoryBlok.",
      languages: [
        {
          name: "Flutter",
          iconifyClass: "logos-flutter",
        },
        {
          name: "NodeJs",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "Storyblok",
          iconifyClass: "logos-storyblok-icon",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/harikanani/Fileblok",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Devpost",
          url: "https://devpost.com/software/fileblok",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
      ],
    },
    {
      id: "6",
      name: "BAUDDIK-GEEKS PORTFOLIO",
      url: "https://github.com/Bauddhik-Geeks/Bauddhik-Geeks.github.io",
      description:
        "Awesome Community Portfolio website for Bauddhik-Geeks community",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/Bauddhik-Geeks/Bauddhik-Geeks.github.io",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Live Demo",
          url: "https://bauddhikgeeks.co/",
          iconifyClass: "mdi:web",
        },
      ],
    },
    {
      id: "7",
      name: "Votechain",
      url: "https://github.com/abhigoyani/votechain",
      description:
        "Awesome Community Portfolio website for Bauddhik-Geeks community",
      languages: [
        {
          name: "Flask",
          iconifyClass: "logos-flask",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb-icon",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/abhigoyani/votechain",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "8",
      name: "Swag Store",
      url: "https://github.com/harikanani/e-commerce-frontend",
      description:
        "An E-commerce website built using MERN[Mongo, Express, React, Node] stack and we have also added stripe payment gateway integration [in test mode].",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "MedusaJS",
          iconifyClass: "logos-medusa-icon",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/harikanani/e-commerce-frontend",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "9",
      name: "node-blockchain",
      url: "https://github.com/harikanani/node-blockchain",
      description:
        "A simple blockchain and cryptocurrency wallet implemented in Node.js and TypeScript (for learning purposes).",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "TypeScript",
          iconifyClass: "skill-icons:typescript",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/harikanani/node-blockchain",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "10",
      name: "Know Me Well",
      url: "https://github.com/harikanani/personal-portfolio",
      description:
        "A simple command line interface based quiz app to know more about me :).",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "Repl.it",
          iconifyClass: "logos-replit-icon",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/harikanani/personal-portfolio",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "11",
      name: "Bloggify",
      url: "https://github.com/harikanani/Bloggify",
      description: "A Simple REST API for Blog Application.",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/harikanani/Bloggify",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "12",
      name: "Stargazzers",
      url: "https://github.com/harikanani/stargazers",
      description: "An Unofficial API for GitHub Repo Stars Count",
      languages: [
        {
          name: "NodeJs",
          iconifyClass: "logos-nodejs",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/harikanani/stargazers",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "13",
      name: "GitHub Theme Portfolio",
      url: "https://github.com/harikanani/harikanani.github.io",
      description:
        "A Personal Portfolio Website that showcases my work and experience. which is hosted on Github Pages.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "SCSS",
          iconifyClass: "vscode-icons:file-type-scss2",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/harikanani/harikanani.github.io",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Live Demo",
          url: "https://harikanani.github.io/",
          iconifyClass: "mdi:web",
        },
      ],
    },
    // {
    //   id: "6",
    //   name: "Automate Attendace",
    //   url: "https://github.com/harikanani/Node_Python",
    //   description: "Automation of Online Attendance using node js and python",
    //   languages: [
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Devfolio",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "7",
    //   name: "Automate Discord Bot",
    //   url: "https://github.com/harikanani/AutomateDiscordBot",
    //   description:
    //     "A Discord Bot to send Automatic messages to serer channel in regular time difference.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Python Selenium",
    //       iconifyClass: "logos-selenium",
    //     },
    //     {
    //       name: "Chromium Browser",
    //       iconifyClass: "openmoji-chromium",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Devfolio",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "8",
    //   name: "Flask Blog",
    //   url: "https://github.com/harikanani/flask_blog",
    //   description: "A Simple Blog Web Application made using Flask Framework",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Flask",
    //       iconifyClass: "cib-flask",
    //     },
    //     {
    //       name: "HTML5",
    //       iconifyClass: "vscode-icons:file-type-html",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "vscode-icons:file-type-css",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Devfolio",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "9",
    //   name: "Netflix top series",
    //   url: "https://github.com/harikanani/netflix-top-series",
    //   description: "List of Top Netflix Series which is deployed to vercel.",
    //   languages: [
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //     {
    //       name: "HTML5",
    //       iconifyClass: "logos-html-5",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "logos-css-3",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Devfolio",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    {
      id: "10",
      name: "COVID-19 Tracker",
      url: "https://github.com/harikanani/Covid19TrackerReact",
      description:
        "Simple Covid-19 Tracker made using React and deployed to Vercel.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/harikanani/Covid19TrackerReact",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    // {
    //   id: "11",
    //   name: "Food Order Static Website",
    //   url: "https://github.com/harikanani/food-order-website",
    //   description:
    //     "A simple static website related to food restaurants service. this is reasponsive as well.",
    //   languages: [
    //     {
    //       name: "HTML5",
    //       iconifyClass: "logos-html-5",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "logos-css-3",
    //     },
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "PHP",
    //       iconifyClass: "logos-php",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Devfolio",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "12",
    //   name: "NFT Launchpad",
    //   url: "https://deliquescent-cents.000webhostapp.com/",
    //   description: "NFT Launchpad crypto site portfolio",
    //   languages: [
    //     {
    //       name: "HTML5",
    //       iconifyClass: "logos-html-5",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "logos-css-3",
    //     },
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "https://github.com/harikanani/nft-launchpad",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};

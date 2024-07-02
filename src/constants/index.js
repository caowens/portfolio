import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  python,
  csharp,
  swift,
  java,
  bootstrap,
  firebase,
  postman,
  vite,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  sentijournal,
  politicallycorrect,
  booknook,
  threejs,
  elevateconsulting,
  microsoft,
  google,
  codepathintroios,
  foundationcsharp,
  codepathintermediateios,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Engineer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  // {
  //   title: "Backend Developer",
  //   icon: backend,
  // },
  {
    title: "iOS Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "csharp",
    icon: csharp,
  },
  {
    name: "swift",
    icon: swift,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "postman",
    icon: postman,
  },
  {
    name: "vite",
    icon: vite,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Elevate Consulting",
    icon: elevateconsulting,
    iconBg: "#383E56",
    date: "June 2023 - Present",
    points: [
      "Designing, developing and maintaining a web application using React.js and other related technologies.",
      "Collaborating with designers and managers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Consulting with clients for help with their websites or software-related problems for their small business.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Microsoft",
    icon: microsoft,
    iconBg: "#E6DEDD",
    date: "May 2023 - Aug 2023",
    points: [
      "Optimized the Signature Release pipeline to reduce certification time for malware signatures, increasing availability of updates for the Microsoft Defender for Endpoint antivirus.",
      "Implemented an intelligent virtual file system that applies caching logic, which projects and downloads files from a remote hierarchical backing store based on need of files, and doesn’t redownload files with new requests.",
      "Integrated virtual file system implementation into the signature release pipeline, improving signature certification for over 1 billion devices.",
    ],
  },
  {
    title: "Explore Intern (SWE + PM)",
    company_name: "Microsoft",
    icon: microsoft,
    iconBg: "#383E56",
    date: "May 2022 - Aug 2022",
    points: [
      "Collaborated with two other Explore interns to implement an automation pipeline tool for increasing anti-phishing security on Microsoft Edge.",
      "Implemented an application with .NET framework that transforms, authenticates, and uploads phishing data to a secure Azure service location.",
      "Led customer meetings to learn about customer needs and integrated findings into our final product as both a project managaer and software engineer.",
      "Wrote product and technical specification documents for planning out implementation and presented to upper-level software engineers, project managers, and management on the Web Defense team for approval.",
    ],
  },
  {
    title: "STEP Intern (SWE)",
    company_name: "Google",
    icon: google,
    iconBg: "#E6DEDD",
    date: "May 2021 - Aug 2021",
    points: [
      "Developed unit and integration testing infrastructure for Nest thermostat's sync path by designing test approach and creating all tests.",
      "Simplified test cases by refactoring to reduce code duplication, increasing maintainability and readability.",
      "Wrote design doc, underwent design reviews, and implemented the final testing infrastructure.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "SentiJournal",
    description:
      "Web-based journal that allows users to get a sentiment analysis emotion from their entries and view a graph to see how their mood has changed over time.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: sentijournal,
    source_code_link: "https://github.com/caowens/SentiJournalApp",
  },
  {
    name: "Politically Correct",
    description:
      "Web application that enables users to see which news sites have which political bias, and filter between left-leaning, right-leaning, and center.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
    ],
    image: politicallycorrect,
    source_code_link: "https://github.com/caowens/politically-correct",
  },
  {
    name: "Book Nook",
    description:
      "An iOS application that allows users to view and read available free books and manage thier own collections.",
    tags: [
      {
        name: "swift",
        color: "blue-text-gradient",
      },
      {
        name: "uikit",
        color: "green-text-gradient",
      },
      {
        name: "google books api",
        color: "pink-text-gradient",
      },
    ],
    image: booknook,
    source_code_link: "https://github.com/caowens/BookNook",
  },
];

const certificates = [
  {
    name: "CodePath Intermediate iOS Development",
    description:
      "Web-based journal that allows users to get a sentiment analysis emotion from their entries and view a graph to see how their mood has changed over time.",
    tags: [
      {
        name: "swift",
        color: "blue-text-gradient",
      },
      {
        name: "swiftui",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: codepathintroios,
    source_code_link: "https://drive.google.com/file/d/1bAc999q4_lD5Wj6V9c4tQjTvnHgsRMB3/view",
  },
  {
    name: "Foundational C# with Microsoft",
    description:
      "Web application that enables users to see which news sites have which political bias, and filter between left-leaning, right-leaning, and center.",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: ".NET",
        color: "green-text-gradient",
      },
    ],
    image: foundationcsharp,
    source_code_link: "https://www.freecodecamp.org/certification/caowens/foundational-c-sharp-with-microsoft",
  },
  {
    name: "CodePath Intro to iOS Development",
    description:
      "An iOS application that allows users to view and read available free books and manage thier own collections.",
    tags: [
      {
        name: "swift",
        color: "blue-text-gradient",
      },
      {
        name: "uikit",
        color: "green-text-gradient",
      },
    ],
    image: codepathintermediateios,
    source_code_link: "https://drive.google.com/file/d/1PiBcJ56kRIBl-eDo86EN-xpzpJBUhuSk/view",
  },
];

export { services, technologies, experiences, testimonials, projects, certificates };
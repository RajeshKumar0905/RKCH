import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    theraphy,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    cantsee,
    figma,
    docker,
    meta,
    starbucks,
    careerpedialogo,
    nirveshlogo,
    tesla,
    shopify,
    carrent,
    netflixrelica,
    jobit,
    tripguide,
    threejs,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "UI Developer",
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
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Junior Software Developer",
      company_name: "Nirvesh Enterprises Pvt Ltd",
      icon: nirveshlogo,
      iconBg: "#383E56",
      date: "March 2024 - july 2024",
      points: [
        "Role and Experience: Worked as a junior software developer and frontend developer intern at Nirvesh Enterprises Pvt Ltd for 5 months",
"Collaboration: Collaborated effectively with backend developers and UI/UX designers to deliver comprehensive project solutions",
"Project Completion: Successfully completed two frontend projects, integrating APIs to ensure seamless data interaction and user experience",
"Responsive Design: Enhanced responsive design, ensuring optimal performance and appearance across various devices and screen sizes",
"Technical Skills: Demonstrated strong skills in frontend development, including HTML, CSS, JavaScript, Api Integration , Tailwindcss, shadcn ,antdesign, mui and frameworks/libraries such as React"
      ],
    },
    {
      title: "Apprenticeship as frontend developer",
      company_name: "Careerpedia",
      icon: careerpedialogo,
      iconBg: "#E6DEDD",
      date: "sep 2023 - Feb 2024",
      points: [
        "As a Front-End Developer Apprentice at Careerpedia, I played a pivotal role in contributing to the development of various projects while working collaboratively with a dynamic and skilled team.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rajesh proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rajesh does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rajesh  optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Theraphy",
      description:
        "The Theraphy website allows users to browse through different types of therapy sessions, book appointments. The app also features a blog section where users can read articles on various topics related to mental health and wellness",
      tags: [
        {
          name: "React.Js",
          color: "blue-text-gradient",
        },
        {
          name: "Responsive-web-Design",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: theraphy,
      source_code_link: "https://github.com/RajeshKumar0905/Theraphy.git",
    },
    {
      name: "Netflix Replica",
      description:
        "Developed a Netfl ix clone website using React JS showcasing my front-end development skills and creativity.Implemented features such as user authentication, video streaming, search functionality.Utilized React Hooks for effi cient state management, ensuring a smooth and dynamic user experience",
      tags: [
        {
          name: "React.Js",
          color: "blue-text-gradient",
        },
        {
          name: "Responsive-web-Design",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: netflixrelica,
      source_code_link: "https://github.com/RajeshKumar0905/Netflix_clone.git",
    },
    {
      name: "Company-Side-Projecs ",
      description:
        "At Nirvesh, I completed two projects: one was a school management system built with React, focusing on responsive design and API integration, and the other was a dashboard application using React with conditional rendering and TailwindCSS, along with API integration.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "api-integration",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
        {
          name: "Responsive-web-Design",
          color: "green-text-gradient",
        },
      ],
      image: cantsee,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  
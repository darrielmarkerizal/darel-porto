import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Darriel Markerizal",
  initials: "DM",
  url: "https://darrielmarkerizal.nusaquanta.com",
  location: "Yogyakarta, Indonesia",
  locationLink: "https://www.google.com/maps/place/yogyakarta",
  description:
    "Full Stack Developer who bridges design and development. I craft end-to-end digital solutions that transform user experiences.",
  summary:
    "A dynamic Full Stack Developer who bridges the gap between design and development, crafting end-to-end digital solutions that transform user experiences. Currently pursuing my [Diploma in Software Engineering Technology at Universitas Gadjah Mada](/#education) with a GPA of 3.59/4.00, I specialize in building high-performance applications that solve complex business challenges. With proven experience at [detikcom](/#work) where I revolutionized content management systems and optimized processing times by up to 87%, I combine expertise in UI/UX design with robust backend architecture to deliver intuitive interfaces that drive user engagement and business growth.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Laravel",
    "React Native",
    "MySQL",
    "Express.js",
    "Figma",
    "Kotlin",
    "Solidity",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "darrielmarkerizal@mail.ugm.ac.id",
    tel: "+6285155222564",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/darrielmarkerizal",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/markerizal",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/darrielmarkeri",
        icon: Icons.x,
        navbar: true,
      },
      Portfolio: {
        name: "Portfolio",
        url: "https://darrielmarkerizal.nusaquanta.com",
        icon: Icons.globe,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:darrielmarkerizal@mail.ugm.ac.id",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "detikcom",
      href: "https://detik.com",
      badges: [],
      location: "Jakarta, Indonesia",
      title: "Fullstack Developer",
      logoUrl: "/detik.png",
      start: "2024",
      end: "Present",
      description:
        "Revolutionized content management efficiency by reducing processing time by 87% (from 5 days to 15 hours) for regional admins handling 10,000+ monthly articles from 150+ active contributors. Enhanced front-end performance with Next.js 14, cutting download processing times by 35.6% and optimized backend bulk upload in Laravel 8, reducing processing time by 53.8% through batch size tuning and parallel processing.",
    },
    {
      company: "detikcom",
      badges: [],
      href: "https://detik.com",
      location: "Jakarta, Indonesia",
      title: "UI/UX Designer",
      logoUrl: "/detik.png",
      start: "2024",
      end: "2024",
      description:
        "Led the end-to-end design process for a comprehensive ERP system tailored to 9 Detikcom regional branches, enhancing workflows for editors-in-chief, regional admins, and freelance contributors. Streamlined user experience across 35 high-fidelity screens and accelerated project timeline by 33%, completing the full design process in just 4 weeks instead of the projected 6 weeks.",
    },
    {
      company: "Nusa Quanta Indonesia",
      href: "https://nusaquanta.com",
      badges: [],
      location: "Yogyakarta, Indonesia",
      title: "Fullstack Developer",
      logoUrl: "/nusaquanta.png",
      start: "2023",
      end: "2024",
      description:
        "Specialized in backend development, focusing on API design, implementation, and efficient database optimization. Contributed to frontend tasks, crafting user interfaces using modern technologies including React Native for mobile applications and Laravel for robust backend systems. Worked with blockchain technology using Solidity for smart contract development.",
    },
    {
      company: "Rumah Korea Indonesia",
      href: "https://rumahkorea.id",
      badges: ["Freelance"],
      location: "Remote",
      title: "UI/UX Designer",
      logoUrl: "/rumahkorea.png",
      start: "2023",
      end: "2024",
      description:
        "Leveraged UI/UX design expertise to develop an intuitive Learning Management System (LMS) using Figma for migrant workers and civil servants. Streamlined the process of adding LMS participants by designing a user-friendly interface and contributed to the overall success of the LMS by enhancing functionality and usability for diverse user groups.",
    },
  ],

  education: [
    {
      school: "Universitas Gadjah Mada",
      href: "https://ugm.ac.id",
      degree: "Diploma in Software Engineering Technology",
      logoUrl: "/ugm.png",
      start: "2022",
      end: "Present",
    },
  ],

  projects: [
    {
      title: "detikcom ContriHub",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Spearheaded the development and design of ContriHub, a comprehensive ERP system serving 9 Detikcom regional branches. Revolutionized content management efficiency by reducing processing time by 87% and architected optimized backend processes resulting in a 53.8% reduction in bulk upload processing time. Designed and implemented 35 high-fidelity screens for a multi-role platform, completing the entire UX/UI process 33% ahead of schedule.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "Laravel",
        "MySQL",
        "Figma",
      ],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Lustrum KMTSL FT UGM Website",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Spearheaded the development of Lustrum KMTSL FT UGM website employing cutting-edge technologies. Streamlined user experience for 460 registered users and facilitated smooth team interactions for 139 teams. Leveraged REST API routes to ensure seamless data management and communication between frontend and backend.",
      technologies: ["Next.js", "TypeScript", "Node.js", "Express.js", "MySQL"],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Porsenigama 2023 Website",
      href: "#",
      dates: "2023",
      active: true,
      description:
        "Led UI/UX design with Figma creating visually stunning interfaces and seamlessly integrated frontend development using Next.js. Spearheaded backend development with Strapi, empowering the platform to deliver real-time updates for schedule and standings features, enhancing user engagement and interaction.",
      technologies: ["Figma", "Next.js", "Strapi"],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Pionir Gadjah Mada 2024 Website",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Drove the UI/UX design direction for the Pionir Gadjah Mada 2024 project, leveraging innovative design strategies to create captivating user interfaces. Employed user-centric design methodologies to ensure optimal usability and intuitive navigation, attracting over 10,000 new UGM 2024 students.",
      technologies: ["Figma"],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "PropertiO Android Application",
      href: "#",
      dates: "2023",
      active: true,
      description:
        "Managed PropertiO Android Project, leading a team of three for seamless progress and stakeholder communication. Designed intuitive UI/UX using Figma and contributed to frontend and backend development with Kotlin and Laravel, delivering a holistic Android app merging user-centric design with robust functionality.",
      technologies: ["Figma", "Kotlin", "Laravel"],
      links: [
        {
          type: "Source",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Finnovate Mobile Application",
      href: "#",
      dates: "2023",
      active: true,
      description:
        "Designed intuitive UI/UX with Figma, ensuring seamless interactions across devices. Developed dynamic React Native frontend for engaging mobile experiences and implemented Node.js backend with MySQL, integrating AI-driven features for personalized finance, enhancing user satisfaction.",
      technologies: ["Figma", "React Native", "Node.js", "MySQL"],
      links: [
        {
          type: "Source",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],

  hackathons: [
    {
      title: "Liga Komatik 2024 - Research & Software Development",
      dates: "2024",
      location: "Yogyakarta, Indonesia",
      description:
        "Winner of Research & Software Development category for the project 'GEMATI: Intelligent System for Food Security through Transparency, Integration, and Automation in Agriculture & Horticulture.'",
      image: "",
      win: "1st Place Winner",
      links: [],
    },
    {
      title: "Liga Komatik 2023 - User Experience Design",
      dates: "2023",
      location: "Yogyakarta, Indonesia",
      description:
        "Winner of User Experience Design category for the project 'PahamiUang: Bersama PahamiUang Gapai Masa Depan yang Cemerlang!'",
      image: "",
      win: "1st Place Winner",
      links: [],
    },
    {
      title: "PIONIR Gadjah Mada 2024",
      dates: "2024",
      location: "Yogyakarta, Indonesia",
      description:
        "Led the design of the PIONIR Gadjah Mada 2024 website, including the innovative GAMATOPIA game-based learning platform. Achieved over 58K users, 1.7 million event counts, and 1.2 million views, with a 73% engagement rate.",
      image: "",
      links: [],
    },
    {
      title: "PORSENIGAMA 2023",
      dates: "2023",
      location: "Yogyakarta, Indonesia",
      description:
        "Coordinated the implementation of real-time schedule and standings updates as Staff of Information Technology Division, enhancing accessibility for UGM students and providing ongoing technical support during the event.",
      image: "",
      links: [],
    },
    {
      title: "Tech Enthusiast Day 2022 & 2023",
      dates: "2022 - 2023",
      location: "Yogyakarta, Indonesia",
      description:
        "Volunteered in multiple tech events, contributing to the organization and technical aspects of the events, fostering knowledge sharing among participants and supporting the tech community at UGM.",
      image: "",
      links: [],
    },
  ],
} as const;

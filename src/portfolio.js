/* Change this file to get your personal Portfolio */

/* ---------------------------------------
   1) Website & Splash Screen Settings
----------------------------------------- */
const settings = {
  isSplash: true, // Set to false if you do NOT want the Splash screen.
};

/* ---------------------------------------
   2) SEO Related Settings
----------------------------------------- */
const seo = {
  title: "Neeti's Portfolio",
  description:
    "Business Analytics & Product professional with a passion for data-driven decision-making, product strategy, and creating impactful solutions. Skilled in SQL, Python, Tableau, Agile frameworks, and more.",
  og: {
    title: "Neeti's Portfolio",
    type: "website",
    url: "https://your-portfolio-url.com/", // Replace with your live portfolio URL if you have one
  },
};

/* ---------------------------------------
   3) Home Page
----------------------------------------- */
const greeting = {
  title: "Neeti Mishra",
  logo_name: "NeetiMishra",
  nickname: "Data / Product / Business",
  subTitle:
    "Strategic and data-driven professional specializing in Business Analytics and Product Management. Experienced in analyzing complex datasets, creating interactive dashboards, and delivering user-centric solutions that enhance efficiency and drive business results.",
  // Link to your most current résumé (Google Drive or PDF link):
  resumeLink:
    "https://drive.google.com/your-resume-file-link", 
  // The GitHub repo where your portfolio source code might live
  portfolio_repository: "https://github.com/your-username/portfolio",
  // Your GitHub profile link (if you have one)
  githubProfile: "https://github.com/your-username",
};

/* ---------------------------------------
   4) Social Media Links
----------------------------------------- */
const socialMediaLinks = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/neeti-mishra",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:neeti.mishra2011@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  // Add or remove any social media as needed
];

/* ---------------------------------------
   5) Skills Section
----------------------------------------- */
const skills = {
  data: [
    {
      title: "Data Analysis & Visualization",
      fileName: "DataScienceImg",
      skills: [
        "Transforming complex datasets into actionable insights using SQL and Python",
        "Developing interactive dashboards and visualizations with Tableau or Power BI",
        "Implementing advanced analytics (time-series forecasting, machine learning) to optimize business decisions",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:postgresql",
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "simple-icons:tableau",
        },
        {
          skillName: "Power BI",
          fontAwesomeClassname: "simple-icons:powerbi",
        },
        {
          skillName: "R",
          fontAwesomeClassname: "simple-icons:r",
        },
      ],
    },
    {
      title: "Business Intelligence & Strategy",
      fileName: "CloudInfraImg",
      skills: [
        "Identifying key business metrics to drive data-informed decisions and optimize operational efficiency",
        "Creating automated reporting structures to reduce manual work and improve data accuracy",
        "Conducting in-depth market and consumer analyses to guide product roadmaps and go-to-market strategies",
      ],
      softwareSkills: [
        {
          skillName: "Excel",
          fontAwesomeClassname: "simple-icons:microsoftexcel",
        },
        {
          skillName: "SAS",
          fontAwesomeClassname: "simple-icons:sas",
        },
        {
          skillName: "Google Analytics",
          fontAwesomeClassname: "simple-icons:googleanalytics",
        },
        {
          skillName: "Power Automate",
          fontAwesomeClassname: "simple-icons:microsoftpowerautomate",
        },
      ],
    },
    {
      title: "Product Management & Agile Execution",
      fileName: "FullStackImg",
      skills: [
        "Defining product vision, scope, and user stories for scalable solutions",
        "Managing cross-functional teams using Agile/Scrum frameworks, ensuring timely deliverables",
        "Conducting user research and usability testing to refine product features and drive adoption",
      ],
      softwareSkills: [
        {
          skillName: "JIRA",
          fontAwesomeClassname: "simple-icons:jira",
        },
        {
          skillName: "Confluence",
          fontAwesomeClassname: "simple-icons:confluence",
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
        },
        {
          skillName: "Canva",
          fontAwesomeClassname: "simple-icons:canva",
        },
      ],
    },
  ],
};

/* ---------------------------------------
   6) Competitive Programming Sites (Optional)
----------------------------------------- */
const competitiveSites = {
  competitiveSites: [
    // If you have profiles on coding challenge sites, add them here.
  ],
};

/* ---------------------------------------
   7) Education Section
----------------------------------------- */
const degrees = {
  degrees: [
    {
      title: "University of Texas at Dallas",
      subtitle: "M.S. in Business Analytics & AI",
      alt_name: "UT Dallas",
      duration: "January 2024 - May 2025",
      descriptions: [
        "⚡ Focused on advanced analytics, machine learning, and product management frameworks",
        "⚡ Graduate Teaching Assistant, leveraging data analysis to enhance student performance tracking",
      ],
      website_link: "https://www.utdallas.edu/",
    },
    {
      title: "Shri Vaishnav Vidyapeeth Vishwavidyalaya",
      subtitle: "B.Tech. in Information Technology",
      alt_name: "SVVV",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ Built foundational knowledge in software development, databases, and data structures",
        "⚡ Organized workshops emphasizing practical database management and agile methods",
      ],
      website_link: "https://svvv.edu.in/",
    },
  ],
};

/* ---------------------------------------
   8) Certifications (Optional)
----------------------------------------- */
const certifications = {
  certifications: [
    {
      title: "Certified Scrum Product Owner (CSPO)",
      subtitle: "- Scrum Alliance",
      certificate_link: "",
      alt_name: "CSPO",
      color_code: "#2A73CC",
    },
    {
      title: "Microsoft Azure Fundamentals",
      subtitle: "- Microsoft",
      certificate_link: "",
      alt_name: "Azure",
      color_code: "#7A3BE3",
    },
    {
      title: "Agile Software Development",
      subtitle: "- Various",
      certificate_link: "",
      alt_name: "Agile",
      color_code: "#47A048",
    },
  ],
};

/* ---------------------------------------
   9) Experience Page
----------------------------------------- */
const experience = {
  title: "Experience",
  subtitle: "Work, Internships, and Volunteering",
  description:
    "I have experience in data analytics, product vision, and building user-centric solutions. I've also helped teams improve efficiency through automation and BI reporting.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Graduate Teaching Assistant",
          company: "University of Texas at Dallas",
          company_url: "https://www.utdallas.edu/",
          duration: "Jan 2024 - Dec 2024",
          location: "Richardson, Texas",
          description:
            "Analyzed performance data of 130+ students, designed automated BI dashboards for attendance and engagement, and provided data-driven career coaching. Improved job placement rates by 20% through targeted skill-development initiatives.",
          color: "#0879bf",
        },
        {
          title: "Business Analyst / Product Analyst",
          company: "Capgemini India",
          company_url: "https://www.capgemini.com/",
          duration: "Nov 2020 - Jun 2023",
          location: "Pune, India",
          description:
            "Gathered requirements for global clients (e.g., automotive domain), optimized workflows by 25%, and created interactive Tableau dashboards that boosted real-time decision-making. Led Agile sprints to reduce time-to-market and improved user satisfaction by 30%.",
          color: "#0071C5",
        },
        {
          title: "Intern - Business Analyst",
          company: "Digital Projekt",
          company_url: "",
          duration: "Jan 2018 - Jun 2018",
          location: "Indore, India",
          description:
            "Automated data processing workflows and designed a robust database management system for Arochem. Reduced manual tasks by 55% and accelerated data-driven strategic decisions with SQL-based reporting.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Volunteerships & Leadership",
      experiences: [
        {
          title: "General Secretary",
          company: "The Product Base Club, UT Dallas",
          company_url: "",
          duration: "2024 - Present",
          location: "Richardson, Texas",
          description:
            "Led club operations, events, and communications. Mentored 100+ aspiring product managers and helped organize skill-building workshops and community events.",
          color: "#1da01f",
        },
      ],
    },
  ],
};

/* ---------------------------------------
   10) Projects Page
----------------------------------------- */
const projectsHeader = {
  title: "Projects",
  description:
    "A selection of my work in data analytics, business intelligence, and product development. These projects showcase how I drive insights from large datasets, streamline processes, and build user-focused solutions.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some articles, blogs, or research I've authored or contributed to.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

/* Example highlight of major projects (Optional) */
const highlightedProjects = [
  {
    name: "Instacart Reorder Prediction (Applied ML)",
    description:
      "Analyzed 3M+ transactions to predict reorder behavior. Achieved 86% accuracy with Gradient Boosting, boosting cart completion rates and potentially increasing revenue by 10%.",
  },
  {
    name: "Conagra Dataset Analysis (Predictive Analytics)",
    description:
      "Processed 500K+ records for time-series forecasting. Improved demand accuracy by 20%, reducing inventory costs by 15%.",
  },
  {
    name: "WhatsApp Feature Enhancement (Agile Project Mgmt)",
    description:
      "Prototyped a message scheduling feature for WhatsApp, addressing time-zone coordination issues. Improved engagement by 20% through user-centric design and testing.",
  },
  {
    name: "VibeTribe (AI-Powered Travel Platform)",
    description:
      "Led new product development, achieving 100+ early adopters. Implemented AI matchmaking to improve personalization by 40%.",
  },
  {
    name: "SkillX (AI-Powered Skill Development Platform)",
    description:
      "Defined product vision and roadmap. Drove a 30% increase in user adoption by leveraging AI-based personalized learning paths in a rapidly growing e-learning market.",
  },
];

/* ---------------------------------------
   12) Contact Page
----------------------------------------- */
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "neeti_profile.png", // Replace with your own image in /assets
    description:
      "Open to roles in Business Analytics, Product Management, and Data Analysis. Let’s collaborate and make an impact!",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I love sharing thoughts on product strategy, data analytics, and business insights.",
    link: "https://medium.com/@your-blog-link",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Richardson, Texas, USA",
    locality: "Richardson",
    country: "USA",
    region: "TX",
    postalCode: "75080",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.google.com/",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+1 (203) 751-5570",
  },
};

/* ---------------------------------------
   13) Final Export
----------------------------------------- */
export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  highlightedProjects,
  contactPageData,
};

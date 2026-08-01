import type {
  ContactMethod,
  EducationMilestone,
  JourneyNode,
  LearningItem,
  NavLink,
  Project,
  RecruiterHighlight,
  Skill,
  Stat,
  WhyHireCard,
} from "@/types";

export const profile = {
  name: "Ziya Ur Rahman",
  role: "Aspiring SAP S/4HANA ABAP Developer",
  status: "Currently Learning SAP S/4HANA ABAP",
  location: "Amravati, Maharashtra, India",
  email: "Ziyaurrahman39797@gmail.com",
  phone: "+91 7397979564",
  github: "https://github.com/ziyaurrahman739797",
  githubUsername: "ziyaurrahman739797",
  languages: ["Hindi", "English", "Marathi"],
  heroSubtitle:
    "Currently learning SAP S/4HANA ABAP while building practical software projects and continuously improving my programming skills. Open to internship and entry-level opportunities.",
  aboutParagraphs: [
    "Hi, I'm Ziya Ur Rahman, an Electronics Engineering graduate with a Diploma in Computer Science from Amravati, Maharashtra. I am currently pursuing SAP S/4HANA ABAP training and continuously strengthening my programming skills through hands-on learning and personal projects. Alongside SAP, I have experience with HTML, CSS, basic Python, and C programming. I enjoy solving problems, learning modern technologies, and building software that creates real value.",
    "As a fresher, I believe every project is an opportunity to improve. My goal is to become a skilled SAP S/4HANA ABAP Developer by combining technical knowledge with continuous learning and practical implementation.",
  ],
  aboutHeading: "Turning Curiosity into Enterprise Solutions.",
};

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const stats: Stat[] = [
  { label: "Education", value: "2 Degrees", numeric: 2 },
  { label: "Learning", value: "SAP S/4HANA ABAP" },
  { label: "Projects", value: "1 Featured Project", numeric: 1 },
  { label: "Status", value: "Open to Work" },
];

export const education: EducationMilestone[] = [
  {
    id: "diploma",
    title: "Diploma",
    institution: "Panjabrao Deshmukh Polytechnic",
    field: "Computer Science",
    status: "completed",
  },
  {
    id: "be",
    title: "Bachelor of Engineering",
    institution: "Takshashila Institute of Engineering and Technology (TIET)",
    field: "Electronics Engineering",
    status: "completed",
  },
  {
    id: "sap",
    title: "SAP Learning Journey",
    institution: "Self-directed training",
    field: "SAP S/4HANA ABAP",
    status: "in-progress",
    badge: "In Progress",
  },
];

export const skills: Skill[] = [
  // SAP
  { name: "SAP S/4HANA ABAP", category: "SAP", learning: true },
  { name: "DDIC", category: "SAP", learning: true },
  { name: "Internal Tables", category: "SAP", learning: true },
  { name: "Open SQL", category: "SAP", learning: true },
  { name: "Modularization", category: "SAP", learning: true },
  { name: "ALV", category: "SAP", learning: true },
  { name: "SmartForms", category: "SAP", learning: true },
  { name: "Debugging", category: "SAP", learning: true },
  // Programming
  { name: "HTML", category: "Programming", learning: false },
  { name: "CSS", category: "Programming", learning: false },
  { name: "Python (Basic)", category: "Programming", learning: true },
  { name: "C Programming", category: "Programming", learning: false },
  // Tools
  { name: "Git", category: "Tools", learning: false },
  { name: "GitHub", category: "Tools", learning: false },
  { name: "VS Code", category: "Tools", learning: false },
  { name: "SAP GUI", category: "Tools", learning: false },
];

export const learningJourney: JourneyNode[] = [
  { id: "diploma", label: "Computer Science Diploma", description: "Foundations in programming and computing." },
  { id: "engineering", label: "Engineering", description: "B.E. in Electronics Engineering." },
  { id: "sap", label: "Learning SAP S/4HANA ABAP", description: "Building core ABAP knowledge from the ground up." },
  { id: "projects", label: "Building Projects", description: "Applying skills through practical software projects." },
  { id: "prep", label: "Preparing for SAP Career", description: "Strengthening fundamentals for an entry-level role." },
  { id: "open", label: "Open to Opportunities", description: "Ready for internships and entry-level positions." },
];

export const whyHireCards: WhyHireCard[] = [
  {
    id: "learner",
    title: "Continuous Learner",
    description: "I enjoy learning new technologies and continuously improving my technical skills.",
  },
  {
    id: "solver",
    title: "Problem Solver",
    description: "I enjoy understanding problems and building clean solutions.",
  },
  {
    id: "practical",
    title: "Practical Learning",
    description: "I prefer building projects instead of only studying theory.",
  },
  {
    id: "growth",
    title: "Growth Mindset",
    description: "I believe consistency and curiosity are the foundation of long-term success.",
  },
];

export const recruiterHighlights: RecruiterHighlight[] = [
  { icon: "user", label: "Fresher" },
  { icon: "target", label: "Aspiring SAP S/4HANA ABAP Developer" },
  { icon: "map-pin", label: "Amravati, Maharashtra" },
  { icon: "graduation-cap", label: "B.E Electronics Engineering" },
  { icon: "laptop", label: "AI Excel Chatbot" },
  { icon: "mail", label: "Available for Opportunities" },
];

export const featuredProject: Project = {
  name: "AI Excel Chatbot",
  badge: "Featured Project",
  description:
    "AI-powered chatbot that answers Excel questions, analyzes spreadsheets, explains formulas, and helps users interact with Excel using natural language. Designed to simplify spreadsheet tasks through an intuitive conversational interface.",
  techStack: ["HTML", "CSS", "JavaScript", "AI Integration", "Responsive Design", "GitHub"],
  features: [
    { label: "Natural language interaction" },
    { label: "Spreadsheet analysis" },
    { label: "Formula explanations" },
    { label: "User-friendly interface" },
    { label: "Responsive layout" },
    { label: "Modern UI" },
  ],
  githubUrl: "https://github.com/ziyaurrahman739797",
  liveUrl: "https://excel-formula-ai-2dtz.vercel.app/",
};

export const currentlyLearning: LearningItem[] = [
  { name: "SAP S/4HANA ABAP", status: "learning" },
  { name: "ALV Reports", status: "learning" },
  { name: "SmartForms", status: "learning" },
  { name: "Open SQL", status: "learning" },
  { name: "Data Dictionary", status: "learning" },
  { name: "Internal Tables", status: "learning" },
  { name: "Debugging", status: "learning" },
  { name: "CDS Views", status: "upcoming" },
  { name: "OData", status: "upcoming" },
  { name: "SAP Fiori", status: "upcoming" },
  { name: "RAP", status: "upcoming" },
  { name: "AMDP", status: "upcoming" },
];

export const contactMethods: ContactMethod[] = [
  { type: "email", label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { type: "phone", label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { type: "location", label: "Location", value: profile.location },
  { type: "github", label: "GitHub", value: `github.com/${profile.githubUsername}`, href: profile.github },
];

export const footerLinks: NavLink[] = navLinks;

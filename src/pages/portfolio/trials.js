import reactPortfolioImage from '../src/assets/images/react-porfolio.png';
import emailMarketingImage from '../src/assets/images/emailmarketing.jpg'; 
import projectManagementImage from '../src/assets/images/Projectmanagement.jpg';
import executiveAssistantImage from '../src/assets/images/virtualassitant.jpg';
import Copywriting from '../src/assets/images/copywriting.jpg';

const logotext = "Bivone Rapolo";
const meta = {
    title: "Bivone Rapolo",
    description: "I’m Bivone Rapolo, a dedicated virtual assistant passionate about helping individuals and businesses thrive. With expertise in email marketing and copywriting, I craft messages that captivate and convert, ensuring your brand resonates with your audience.",
};

const introdata = {
    title: "I’m Bivone Rapolo",
    animated: {
        first: "I love Marketing",
        second: "I Love Project management",
        third: "I love Creating slides/presentations, meeting agendas, travel itineraries",
    },
    description: "Hi, I’m Bivone Rapolo, a dedicated virtual assistant passionate about helping individuals and businesses thrive. By working with me, you’ll gain a reliable partner committed to your success.",
    your_img_url: reactPortfolioImage, // Use the imported image
};

const dataabout = {
    title: "About Me",
    aboutme: "Hi, I’m Bivone Rapolo, a dedicated virtual assistant passionate about helping individuals and businesses thrive. I specialize in email marketing and project management, ensuring that your brand's voice resonates with your audience.",
};

const worktimeline = [
    {
        jobtitle: "Email Marketing Specialist",
        where: "SmartMavuno Limited",
        date: "2023 - Present",
    },
    {
        jobtitle: "Virtual Assistant",
        where: "Freelance",
        date: "2021 - 2022",
    },
    {
        jobtitle: "Project Coordinator",
        where: "KilonzoCorp",
        date: "2020 - 2021",
    },
];

const skills = [
    {
        name: "Email Marketing",
        value: 90,
    },
    {
        name: "Project Management",
        value: 85,
    },
    {
        name: "Copywriting",
        value: 80,
    },
    {
        name: "Google Suite",
        value: 75,
    },
    {
        name: "Microsoft Office",
        value: 80,
    },
    {
        name: "Scheduling",
        value: 90,
    },
];

const services = [
    {
        title: "Email Marketing",
        description: "Crafting captivating emails that engage and convert your audience.",
    },
    {
        title: "Project Management",
        description: "Ensuring smooth project execution from planning to completion.",
    },
    {
        title: "Presentation Design",
        description: "Creating impactful slides and meeting agendas to enhance your communication.",
    },
];

const dataportfolio = [
    {
        img: emailMarketingImage,
        description: "Developed and executed an email marketing campaign for SmartMavuno that increased customer engagement by 30%.",
        link: "https://docs.google.com/document/d/1GWdEcuEXZuLpR-F3q4Qp4WEMHrt5EUEIotTUa1qBz9c/edit?usp=sharing",
    },
    {
        img: Copywriting,
        description: "Crafted compelling email copy for Mebiut, resulting in improved open and click-through rates.",
        link: "https://dummy-link2.com",
    },
    {
        img: projectManagementImage,
        description: "Managed multiple projects at KilonzoCorp simultaneously, ensuring timely delivery and coordination among team members.",
        link: "https://dummy-link3.com",
    },
    {
        img: executiveAssistantImage,
        description: "Performed general executive assistant duties for various clients, including scheduling, organizing meetings, and managing communications.",
        link: "https://dummy-link4.com",
    },
];

const contactConfig = {
    YOUR_EMAIL: "rapolobivone124@gmail.com",
    YOUR_FONE: "+254 759 658692",
    description: "I am dedicated to providing support and ensuring your success. Feel free to reach out for assistance with email marketing, project management, or executive support.",
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    instagram: "https://www.instagram.com/bivonerapollo?igsh=cHF6MTA2eTV5emM3",
    facebook: "https://www.facebook.com/bivone.apollo",
    linkedin: "https://www.linkedin.com/in/bivonerapolo59/",
    twitter: "https://x.com/BivoneR?t=Rb2LZNgDJOWcsxHICLJ9yw&s=08",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};

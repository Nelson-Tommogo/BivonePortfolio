import React, { useState } from 'react';
import reactPortfolioImage from '../src/assets/images/react-porfolio.png';
import emailMarketingImage from '../src/assets/images/emailmarketing.jpg'; 
import projectManagementImage from '../src/assets/images/Projectmanagement.jpg';
import executiveAssistantImage from '../src/assets/images/virtualassitant.jpg';
import Copywriting from '../src/assets/images/copywriting.jpg'; 
import testimonialImage1 from '../src/assets/images/virtualassitant.jpg';
import testimonialImage2 from '../src/assets/images/virtualassitant.jpg';
import testimonialImage3 from '../src/assets/images/virtualassitant.jpg';

console.log("Image Path:", reactPortfolioImage);

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
    description: "Hi, I’m Bivone Rapolo, a dedicated virtual assistant passionate about helping individuals and businesses thrive. With expertise in email marketing and copywriting, I craft messages that captivate and convert, ensuring your brand resonates with your audience. By working with me, you’ll gain a reliable partner committed to your success, giving you more time to focus on growing your business and achieving your goals. Let’s turn your workload into opportunities for growth and efficiency.",
    your_img_url: (
        <div
            style={{
                width: "300px",
                height: "300px",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f0f0f0",
            }}
        >
            {reactPortfolioImage ? (
                <img
                    src={reactPortfolioImage}
                    alt="Bivone Rapolo"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                />
            ) : (
                <p style={{ color: "red", textAlign: "center" }}>
                    Image not found! Please check the path.
                </p>
            )}
        </div>
    ),
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
        description: "Managed multiple projects at Kilonzocorp simultaneously, ensuring timely delivery and coordination among team members.",
        link: "https://dummy-link3.com",
    },
    {
        img: executiveAssistantImage,
        description: "Performed general executive assistant duties for various clients, including scheduling, organizing meetings, and managing communications.",
        link: "https://dummy-link4.com",
    },
];

const testimonials = [
    {
        img: testimonialImage1,
        icon: '⭐',
        text: "Bivone's email marketing strategies transformed our engagement rates!",
        author: "John Doe, CEO of Company A"
    },
    {
        img: testimonialImage2,
        icon: '👍',
        text: "Highly organized and efficient. A true asset to our team.",
        author: "Jane Smith, Project Manager at Company B"
    },
    {
        img: testimonialImage3,
        icon: '🌟',
        text: "Bivone delivered exceptional results in project management.",
        author: "Michael Brown, Director at Company C"
    },
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px' }}>
            <h2>Testimonials</h2>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
                <button onClick={prevTestimonial} style={{ marginRight: '10px' }}>❮</button>
                <div style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#fff' }}>
                    <img src={testimonials[currentIndex].img} alt="Testimonial" style={{ borderRadius: '50%', width: '60px', height: '60px' }} />
                    <div style={{ fontSize: '24px', margin: '10px 0' }}>{testimonials[currentIndex].icon}</div>
                    <p style={{ fontStyle: 'italic' }}>"{testimonials[currentIndex].text}"</p>
                    <p style={{ fontWeight: 'bold' }}>- {testimonials[currentIndex].author}</p>
                </div>
                <button onClick={nextTestimonial} style={{ marginLeft: '10px' }}>❯</button>
            </div>
        </div>
    );
};

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

const App = () => {
    return (
        <div>
            {/* Other components */}
            <Testimonials />
        </div>
    );
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
    App,
};

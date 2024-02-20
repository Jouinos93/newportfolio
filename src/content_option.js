const logotext = "My Portfolio";
const meta = {
    title: "Portfolio",
    description: "I'm Jouini Mariem, a full stack web developer.",
};

const introdata = {
    title: "Hi, I'm Jouini Mariem",
    animated: {
        first: "Passionate Software Developer",
        second: "Committed to excellence",
        third: "Loving every line of code",
        fourth: "Master problem solver",
        fifth: "Trustworthy and committed",
        sixth: "Always embracing innovation",
        seven: "Crafting the future of web",
        // add more if you'd like but make sure to update /src/pages/home/index.js Line 29
    },
    description: "Empowering the digital world with boundless passion as a full-stack  web developer on a mission to innovate and create.",
    your_img_url: process.env.PUBLIC_URL + '/assets/me.jpg',

};

const dataabout = {
    title: "Who am I?",
    aboutme: "As a junior full-stack web developer, my passion for technology fuels my journey in crafting seamless digital experiences. Beyond the realm of coding, my love for decoration and painting imparts a keen eye for aesthetics. This unique blend of technical expertise and artistic sensibility empowers me to create web applications that not only meet the client's expectations but also captivate and delight users. I am dedicated to bringing a perfect blend of functionality and visual appeal to every project, ensuring a satisfying and impressive experience for all.",
    
};
const worktimeline = [{
        jobtitle: "Full stack web developer",
        where: "Coding Dojo Africa",
        date: "2023",
    },
    {
        jobtitle: "Laboratory Technicien",
        where: "Private lab",
        date: "2021-2022",
    },
    {
        jobtitle: "Laboratory Technician",
        where: "Private Lab",
        date: "2016-2019",
    },
];

const skills = [

    {
        name: "Html",
    },
    {
        name: "CSS",
    },

    {
        name: "Python",
    },
    
    {
        name: "React",
    },
    
    {
        name: "Angular",
    },
    
    {
        name: "Java",
    },

    {
        name: "Node.js",
    },
    {
        name: "MySQL",
    },

    {
        name: "Spring Boot",
    },

    {
        name: "MongoDB",
    },

    {
        name: "Bootstrap",
    },
    {
        name: "Tailwind",
    },
    {
        name: "Balsamiq",
    },
    {
        name: "Trello",
    },
    {
        name: "Stripe",
    },
    {
        name: "GitHub",
    },
];

const dataportfolio = [
    
    {
        img: `${process.env.PUBLIC_URL}/assets/familiacare.png`,
        description: "FamiliaCare",
        link1: "https://youtu.be/VnXqPoD9ooM",
        link: "https://github.com/Jouinos93/Java_Project-FamiliaCare-",
        
    },
    
    {
        img: `${process.env.PUBLIC_URL}/assets/lab.webp`,
        description: "PandaLab",
        link1: "https://www.youtube.com/watch?v=maVRjrM8KxM",
       link: "https://github.com/Jouinos93/Python-Project--Pandalab-",
    },

    {
        img: `${process.env.PUBLIC_URL}/assets/feedh.png`,
        description: "FeedHope",
        link1: "https://www.youtube.com/watch?v=4-_GMgWmrY8",
        link: "https://github.com/Jouinos93/React-Project-FeedHope-",
    },

 
    // {
    //     img: "https://picsum.photos/400/600/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/300/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/700/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },

    // {
    //     img: "https://picsum.photos/400/600/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/300/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/550/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/700/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
];

const contactConfig = {
    YOUR_EMAIL: "jouinimariem05@gmail.com",
    description: "Looking forward to hearing from you!",
    phone: "28 506 111",
    cvLink: "./Jouini-Mariem-CV(1).pdf",
    YOUR_SERVICE_ID: "service_05jo7pe",
    YOUR_TEMPLATE_ID: "template_dsljq89",
    YOUR_USER_ID: "v6UcKU8fnmHXAqSwN",
};

const socialprofils = {
    github: "https://github.com/Jouinos93",
    linkedin: "https://linkedin.com/in/mariem-jouini-411948267",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
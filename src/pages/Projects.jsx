import ProjectCard from '../components/ProjectCard';
import colors from '../constants/styles';
import blog from '../assets/blog.png';
import collegegram from '../assets/collegegram.png';
import subscription from '../assets/subscription.png';
import siksha from '../assets/shikha.png';

const projectData = [
    {
        title: "BloggersZone",
        desc: "A blog Website",
        link: "https://bloggerszone.vercel.app/",
        src: blog,
        solo: "solo",
        github: "https://github.com/pratikkumar399/bloggerszone",
        skills: "React, NodeJs, Express, MongoDB",
    },
    {
        title: "CollegeGram",
        desc: "A social media website for college students",
        link: "https://github.com/pratikkumar399/collegegram",
        solo: "solo",
        src: collegegram,
        github: "https://github.com/pratikkumar399/collegegram",
        skills: "React, NodeJs, MongoDB",
    },
    {
        title: "Subscription Website",
        desc: "A website where users can subscribe to a plan and pay for it",
        link: "https://subscription-app-7yvq.vercel.app/",
        solo: "solo",
        src: subscription,
        github: "https://github.com/pratikkumar399/SubscriptionApp",
        skills: "React, Firebase, Stripe, NodeJs ",
    },
    {
        title: "Shiksha Miraz",
        desc: "A flutter based website for education purpose",
        link: "https://yourname.dev/",
        solo: "group",
        src: siksha,
        github: "https://github.com/yourusername/portfolio",
        skills: "HTML, CSS, JavaScript",
    },
    {
        title: "Portfolio Website",
        desc: "My personal portfolio showcasing my work",
        link: "https://yourname.dev/",
        src: subscription,
        github: "https://github.com/yourusername/portfolio",
        skills: "HTML, CSS, JavaScript",
    },
    {
        title: "Portfolio Website",
        desc: "My personal portfolio showcasing my work",
        link: "https://yourname.dev/",
        src: subscription,
        github: "https://github.com/yourusername/portfolio",
        skills: "HTML, CSS, JavaScript",
    },
    // Add more project objects here...
];

const Projects = () => {
    return (
        <div className="p-8">
            <h1 style={{ color: colors.primary }} className="text-6xl text-center font-bold mb-6">
                Checkout My Projects
            </h1>

            <div className="xl:w-2/3 flex flex-wrap justify-center items-center gap-y-5 gap-x-5 mb-4 mx-auto">
                {projectData.map((project, index) => (
                    <ProjectCard
                        key={index}
                        solo={project.solo}
                        title={project.title}
                        src={project.src} // You might want to use a specific image for each project
                        desc={project.desc}
                        link={project.link}
                        github={project.github}
                        skills={project.skills}
                    />
                ))}
            </div>
        </div>
    );
}

export default Projects;

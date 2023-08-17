import ProjectCard from "../components/ProjectCard"

const Projects = () => {
    return (
        <div>
            This is projects page.

            <div className="flex justify-center">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </div>

    )
}

export default Projects

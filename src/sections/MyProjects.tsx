import {useState} from "react";
import {Fade} from "react-awesome-reveal";

export default function MyProjects() {
    const [currentIndex,setCurrentIndex] = useState(0)
// Define an array of project objects
    const projects = [
        {
            title: "Conversation Coach",
            description: "Train social skills with AI.",
            link: "https://example.com/conversation-coach",
            tags: ["AI", "Social Skills"]
        },
        {
            title: "Purple Bird",
            description: "Specialized Code Editor.",
            link: "https://example.com/purple-bird",
            tags: ["Code Editor", "Development"]
        },
        {
            title: "EsoCareer",
            description: "Job posting site.",
            link: "https://example.com/esocareer",
            tags: ["Jobs", "Career"]
        }
    ];

    return (
        <div className={"flex flex-row justify-between px-4 w-full items-center"}>
        <span className={"cursor-pointer"}
            onClick={()=>setCurrentIndex(currentIndex == 0 ? projects.length - 1 :currentIndex - 1)}>
            <img src={"/arrow-left.svg"} />
        </span>
            <Fade
                className={'w-full'}
                triggerOnce key={currentIndex}>
                <section id={"projects"} className={"flex flex-col w-full p-2"}>
                    <div className={"flex flex-col text-xs items-center"}>
                        <span className={"pb-2 text-sm font-bold"}>{projects[currentIndex].title}</span>
                        <p className={"pb-2"}>{projects[currentIndex].description}</p>
                        <a href={projects[currentIndex].link} target="_blank" rel="noopener noreferrer" className={"text-blue-500 underline"}>
                            Visit Project
                        </a>
                        <div className={"flex space-x-2 pt-2"}>
                            {projects[currentIndex].tags.map(tag => (
                                <span key={tag} className={"bg-gray-200 rounded-full px-2 py-1 text-xs"}>{tag}</span>
                            ))}
                        </div>
                    </div>
                </section>

            </Fade>

        <span className={"cursor-pointer"}
            onClick={()=>setCurrentIndex((currentIndex + 1) % projects.length)}>
            <img src={"/arrow-right.svg"} />
        </span>
        </div>
    );
}

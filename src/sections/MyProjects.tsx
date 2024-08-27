import {useState} from "react";
import {Fade} from "react-awesome-reveal";

export default function MyProjects() {
    const [currentIndex,setCurrentIndex] = useState(0)
// Define an array of project objects
    const projects = [
        {
            title: "ComfyUI Serving Toolkit",
            description: "Serve your ComfyUI workflows to other people.",
            link: "https://github.com/matan1905/ComfyUI-Serving-Toolkit",
            tags: ["AI", "Image generation"]
        },
        {
            title: "WithUI",
            description: "Create Mini-Apps with a drag & drop UI builder and a powerful workflow editor.",
            link: "https://withui.com",
            tags: ["No code", "UI Builder", "AI"]
        },
        {
            title: "OneClickBlog",
            description: "Create a fleet of blogs with automated article generation with top-notch SEO optimizations.",
            link: "https://oneclickblog.com",
            tags: ["SEO", "AI", "Blogging"]
        }
    ];

    return (
        <div className={"flex flex-row justify-between px-4 max-w-4xl w-full items-center"}>
        <span className={"cursor-pointer"}
            onClick={()=>setCurrentIndex(currentIndex === 0 ? projects.length - 1 :currentIndex - 1)}>
            <img src={"/arrow-left.svg"} />
        </span>
            <Fade
                className={'w-full'}
                triggerOnce key={currentIndex}>
                <section id={"projects"} className={"flex flex-col w-full p-2"}>
                    <div className={"flex flex-col text-xs items-center"}>
                        <span className={"pb-2 text-sm font-bold"}>{projects[currentIndex].title}</span>
                        <p className={"pb-2"}>{projects[currentIndex].description}</p>
                        <a href={projects[currentIndex].link} target="_blank" rel="noopener noreferrer"
                           className={"text-xl hover:opacity-75 font-bold underline"}>
                            Visit Project
                        </a>
                        <div className={"flex space-x-2 pt-2"}>
                            {projects[currentIndex].tags.map(tag => (
                                <span key={tag} className={"bg-pink-400 rounded-full px-2 py-1 text-xs"}>{tag}</span>
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

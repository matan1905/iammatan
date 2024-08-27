import {useState} from "react";
import {Fade} from "react-awesome-reveal";
import ImageZoom from "../ImageZoom.tsx";

export default function MyProjects() {
    const [currentIndex,setCurrentIndex] = useState(0)
// Define an array of project objects
    const projects = [
        {
            title: "Conversation Coach - Train social skills with AI",
            img: './conv-coach.png'
        },
        {
            title: "Purple Bird - Specialized Code Editor",
            img: './purple-bird.png'
        },
        {
            title: "EsoCareer - Job posting site",
            img: './esocareer2.png'

        }
    ];

    return (
        <div className={"flex flex-row justify-between px-4 w-full items-center"}>
        <span className={"cursor-pointer"}
            onClick={()=>setCurrentIndex(currentIndex == 0 ? projects.length - 1 :currentIndex - 1)}>
            <img src={"./arrow-left.svg"} />
        </span>
            <Fade
                className={'w-full'}
                triggerOnce key={currentIndex}>
                <section  id={"projects"} className={"flex flex-col w-full p-2"}>
                    <div
                        className={"flex flex-col text-xs items-center"}
                    >
                        <span className={"pb-2 text-sm"}>{projects[currentIndex].title}</span>
                        <ImageZoom className={"h-96"}
                                   src={projects[currentIndex].img}/>
                        <span className={"pt-2"}>click image to view full size</span>
                    </div>
                </section>

            </Fade>

        <span className={"cursor-pointer"}
            onClick={()=>setCurrentIndex((currentIndex + 1) % projects.length)}>
            <img src={"./arrow-right.svg"} />
        </span>
        </div>
    );
}
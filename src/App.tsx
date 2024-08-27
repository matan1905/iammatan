import Hello from "./sections/Hello.tsx";
import SectionName from "./SectionName.tsx";
import Services from "./sections/Services.tsx";
import AboutMe from "./sections/AboutMe.tsx";
import MyProcess from "./sections/MyProcess.tsx";
import ContactMe from "./sections/ContactMe.tsx";
import MyProjects from "./sections/MyProjects.tsx";


export default function App() {
    return (
        <div className={"flex flex-col w-screen min-h-screen items-center p-4 text-white text-center space-y-8"}>
            <Hello/>
            <SectionName name={"Services"}/>
            <Services/>
            <SectionName name={"Projects Showcase"}/>
            <MyProjects />
            <SectionName name={"Contact Me"}/>
            <ContactMe/>
            <SectionName name={"About me"}/>
            <AboutMe/>
            {/*<hr className="w-64 h-px border-0 bg-white"/>*/}
            <a href={"https://github.com/matan1905"} target="_blank" className={"text-xs underline"}>Follow me on GitHub</a>
        </div>
    )
}
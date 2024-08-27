import {Fade} from "react-awesome-reveal";

export default function Services() {
    return (
        <section id={"services"} className={"flex flex-col items-center w-3/4  text-2xl font-semibold space-y-8 text-center"}>
            <div className={"flex flex-col lg:flex-row w-full lg:space-x-4 items-center justify-around"}>
                <Fade triggerOnce direction={"left"} cascade damping={0.5} delay={900}>
                    <ul className={"flex flex-col space-y-4 p-2 items-center"}>
                        <li>Web development</li>
                        <li>Prototyping & MVP</li>
                        <li>Technical consulting</li>

                    </ul>
                </Fade>
                <Fade triggerOnce direction={"right"} cascade damping={0.5} delay={900}>
                    <ul className={"flex flex-col space-y-4 p-2 items-center"}>
                        <li>App development</li>
                        <li>Bots & Automation</li>
                        <li>Game Development</li>

                    </ul>
                </Fade>
            </div>
            <Fade triggerOnce delay={900+0.5*3*1000}>
                <span>And much more...</span>

            </Fade>
        </section>

    );
}
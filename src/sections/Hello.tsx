import {Fade} from "react-awesome-reveal";

export default function Hello() {
    return (
        <section id={"hello"} className={"flex flex-col items-center space-y-4 grayscale brightness-125"}>
            <img className={"rounded-full rounded-tr-xl  w-72 border-white border-2"} src={"/me_irl.jpg"}/>
            <Fade triggerOnce direction={"up"} cascade damping={0.3}>
            <h1 className={"text-8xl"}>Hello</h1>
            <h2 className={"text-5xl"}>I am Matan</h2>
            <h3 className={"text-3xl"}>Code Artisan Turning Ideas into <span className={"font-bold"}>Reality</span>.</h3>
                <a onClick={()=>{
                    document.getElementById('contact').scrollIntoView({
                        behavior: 'smooth'
                    });
                }} className={"text-sm underline cursor-pointer"}>Click Here to Contact Me</a>
            </Fade>
        </section>
    );
}
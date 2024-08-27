import {Fade} from "react-awesome-reveal";

export default function MyProcess() {
    const steps:any[] =[
        {
            title:"We Dive In.",
            desc:"Our journey begins with a conversation. I'm here to dive deep into your vision, understand your goals, and unravel the potential of your idea. Whether it's a single meeting or a series of discussions, I'm committed to comprehending your concept inside and out."
        },
        {
            title:"I Craft Clarity.",
            desc:"Once I've grasped the essence of your idea and your budget, I meticulously research and analyze. This enables me to provide you with a crystal-clear estimate, outlining the time and resources required to bring your project to life. My goal is to empower you with knowledge and transparency."
        },
        {
            title:"We Seal the Deal.",
            desc:"Together, we finalize the project's scope, payment terms, and timelines. It's a collaborative effort where we align expectations and set the stage for success. Depending on the project's complexity, we may also establish milestones to ensure a smooth journey."
        },
        {
            title:"I Transform Vision into Reality.",
            desc:"Once our agreement is inked, I roll up my sleeves and get to work. Throughout the development process, I maintain constant communication to share progress updates, address your questions, and ensure everything aligns with your vision. Your project is my passion."
        },
        {
            title:"You Unveil Success.",
            desc:"The moment arrives when your product is complete, and it's everything you envisioned. Now, it's your time to shine. You hold the keys to your new reality, and I'm here to celebrate your success. Whether you launch to the world or embark on the next phase, I'm your partner in this transformative journey."
        }
    ]
    return (
        <section id={"process"} className={"w-full flex flex-col space-y-8 items-center p-4 px-8 xl:px-4"}>
        <Fade triggerOnce  direction={"up"}>
            {steps.map((step,i)=>{
                return  <div key={step.title} className="flex flex-row w-full xl:justify-around">
                    {(i%2==1 && (i!=steps.length-1)) && <div></div>}
                    <div className={`flex flex-col w-full xl:w-1/4 space-y-2  border rounded-lg p-2 py-4 ${(i==steps.length-1) ? 'xl:my-4':''}`}>
                        <span className={"font-semibold"}>{i+1}. {step.title}</span>
                        <span>{step.desc}</span>
                    </div>
                    {(i%2==0 && (i!=steps.length-1))&& <div></div>}
                </div>
            })}
        </Fade>
        </section>

    );
}
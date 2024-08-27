import React,{ useEffect, useState } from "react";
import SectionName from "../SectionName.tsx";

function gtag_report_conversion(url?) {
    const callback = function () {
    if (typeof(url) != 'undefined') {
    window.location = url;
}
};
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    gtag('event', 'conversion', {
    'send_to': 'AW-926988124/5af2CMKggeQYENzugroD',
    'event_callback': callback
});
    return false;
}


export default function ContactMe() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [antibot,setAntibot] = useState('null')
    useEffect(()=>{
        setTimeout(()=>{
            setAntibot('not')
        },1000)
    },[])

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        try {
            const response = await fetch("send.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, message,lastName:antibot }),
            });

            if (response.ok) {
                gtag_report_conversion()
                setSuccessMessage("Message sent successfully!");
            } else {
                setErrorMessage("Failed to send message. Please try again later.");
            }
        } catch (error) {
            console.error("Error sending message:", error);
            setErrorMessage("An error occurred. Please try again later.");
        }
    };

    useEffect(() => {
        setTimeout(() => {
            setSuccessMessage('');
            setErrorMessage('');
        }, 5000); // Clear success/error messages after 5 seconds
    }, [successMessage, errorMessage]);

    return (
        <section className={"flex flex-col space-y-4 w-full items-center"} id={"contact"}>
            <div className={"w-full md:w-3/4 lg:w-1/2 flex flex-col items-center p-2 bg-white  rounded-xl text-black shadow-2xl"}>

                {successMessage && (
                    <div className={"w-full md:w-1/2 p-4 text-green-600"}>
                        {successMessage}
                    </div>
                )}

                {errorMessage && (
                    <div className={"w-full md:w-1/2 p-4 text-red-600"}>{errorMessage}</div>
                )}

                {!successMessage && !errorMessage && (
                    <div className={"w-full md:w-1/2 p-4 "}>
                        <form onSubmit={handleSubmit}>
                            <div className={"mb-4"}>
                                <label htmlFor="name" className={"block mb-2 text-left"}>
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className={"w-full  text-black outline-none ring-0 p-2 border rounded-lg bg-gray-100"}
                                    required
                                />
                            </div>

                            <div className={"mb-4"}>
                                <label htmlFor="email" className={"block font-medium mb-2 text-left"}>
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={"w-full  text-black outline-none ring-0 p-2 border rounded-lg bg-gray-100"}
                                    required
                                />
                            </div>

                            <div className={"mb-4"}>
                                <label htmlFor="message" className={"block  font-medium mb-2 text-left"}>
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className={"w-full  text-black outline-none ring-0 p-2 border rounded-lg bg-gray-100"}
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className={
                                    "bg-purple-700 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-full cursor-pointer transition duration-300 ease-in-out"
                                }
                            >
                                Send Me A Message
                            </button>
                        </form>
                    </div>
                )}
            </div>
            <SectionName name={"Or"} short/>
            <div className={"flex flex-col space-y-2 font-semibold"}>
                <span>Phone / WhatsApp: <a className={"underline"} href={"https://wa.me/972527067744"}>+972 52 706 7744 </a></span>
                <span>Email: <a className={"underline"} href="mailto:contact@iammatan.com">contact@iammatan.com</a> </span>
            </div>
        </section>

    );
}

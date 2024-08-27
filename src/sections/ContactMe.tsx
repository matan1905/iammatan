import React,{ useEffect, useState } from "react";
import SectionName from "../SectionName.tsx";



export default function ContactMe() {
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");


    useEffect(() => {
        setTimeout(() => {
            setSuccessMessage('');
            setErrorMessage('');
        }, 5000); // Clear success/error messages after 5 seconds
    }, [successMessage, errorMessage]);

    return (
        <section className={"flex flex-col space-y-4 w-full items-center"} id={"contact"}>
            <div className={"flex flex-col space-y-2 font-semibold"}>
                <span>Phone / WhatsApp: <a className={"underline"} href={"https://wa.me/972527067744"}>+972 52 706 7744 </a></span>
                <span>Email: <a className={"underline"} href="mailto:contact@iammatan.com">contact@iammatan.com</a> </span>
            </div>
        </section>

    );
}

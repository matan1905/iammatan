export default function SectionName({name, short=false}: { name:string, short?:boolean }) {
    return (
        <div className="flex flex-row items-center justify-center w-full space-x-4 p-4">
            <hr className={`${short?'w-32':'w-64'} h-px border-0 bg-white`}/>
            <span className={""}>{name}</span>
            <hr className={`${short ? 'w-32' : 'w-64'} h-px border-0 bg-white`}/>
        </div>
    );
}
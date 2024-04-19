import { useOutletContext } from "react-router-dom";

const SectionContainer = ({className, children}) => {
    const isSmall = useOutletContext()

    return(
        <div className={"h-full flex flex-col items-start py-10 px-8 " + (className === undefined ? "" : className) + (isSmall ? " w-full mt-14" : " absolute left-1/3 w-2/3")}>
            {children}
        </div>
    )
}

export default SectionContainer
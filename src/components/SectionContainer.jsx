import { useOutletContext } from "react-router-dom";

const SectionContainer = ({className, children}) => {
    const isSmall = useOutletContext()

    return(
        <div className={"h-full flex flex-col items-start py-10 px-8 " + (className === undefined ? "" : className) + (isSmall ? " w-full mt-[80px]" : " absolute left-[33vw] w-[67vw]")}>
            {children}
        </div>
    )
}

export default SectionContainer
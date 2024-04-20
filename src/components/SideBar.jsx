import { Button } from "@/components/ui/button"
import ButtonGroup from "./ButtonGroup"
import sections from "../data/sections.json"
import { Link } from "react-router-dom"

const SideBar = (props) => {
    return (
        <div className="flex justify-end h-full px-8 w-[33vw] min-w-48 fixed left-0 border-r-2">
            <div className="pr-[3rem] items-start flex flex-col py-10">
                <p className="font-bold text-xl">Don Foh</p>
                <ol className="my-4">
                    {
                        sections.map(section => (
                            <li key={section.name}>
                                <Link to={section.link}>
                                    <Button variant="link" className="pl-0 text-foreground duration-500">
                                        {section.name}
                                    </Button>
                                </Link>
                            </li>
                        ))
                    }
                </ol>
                <ButtonGroup className={"my-8"} />
            </div>
        </div>

    )
}

export default SideBar
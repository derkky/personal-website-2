import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { useCallback, useState } from "react"
import ButtonGroup from "./ButtonGroup"
import sections from "../data/sections.json"


const TopBar = (props) => {

    const [selectedSection, setSelectedSection] = useState("About")

    return (
        <div className="flex flex-col items-fill w-full fixed bg-background border-b-2">
            <div className="h-14 flex items-center justify-between px-5">
                <div className="flex gap-2">
                    {/* <DropdownMenu >
                        <DropdownMenuTrigger>
                            <a href="#">
                                <div className="rounded-full hover:bg-muted">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>

                                </div>
                            </a>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="ml-2">
                            {
                                sections.map(
                                    section =>
                                        <Link to={section.link} key={section.name}>
                                            <DropdownMenuItem >
                                                {section.name}
                                            </DropdownMenuItem>
                                        </Link>

                                )
                            }
                        </DropdownMenuContent>
                    </DropdownMenu> */}
                    <p className="font-bold text-lg">
                        Don Foh
                    </p>
                </div>
                <ButtonGroup />
            </div>
            <div className="flex justify-center gap-1">
                {
                    sections.map(
                        section =>
                            <Link to={section.link} key={section.name}>
                                <Button 
                                    variant="link" 
                                    className={"duration-500 text-foreground " + (selectedSection == section.name ? "underline" : "")}
                                    onClick={() => setSelectedSection(section.name)}
                                >
                                    {section.name}
                                </Button>
                            </Link>

                    )
                }
            </div>
        </div>


    )
}

export default TopBar
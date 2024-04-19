import { useState } from "react"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import ThemeToggle from "./ThemeToggle"
import ButtonGroup from "./ButtonGroup"



const TopBar = (props) => {

    return (
        <div className="w-full h-14 flex items-center justify-between px-5 fixed bg-background border-b-2">
            <DropdownMenu >
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
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            {/* <p className="font-bold text-lg">
                Don Foh
            </p> */}
            <ButtonGroup />
        </div>

    )
}

export default TopBar
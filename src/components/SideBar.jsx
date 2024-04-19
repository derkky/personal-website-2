import { Button } from "@/components/ui/button"
import ButtonGroup from "./ButtonGroup"

const SideBar = (props) => {
    const sections = [
        {
            name: "About"
        },
        {
            name: "Experience"
        },
        {
            name: "Contact"
        }
    ]
    return (
        <div className="flex justify-end h-full px-8 w-2/6 min-w-48 fixed left-0">
            <div className="pr-[3rem] items-start flex flex-col py-10 border-r-2">
                <p className="font-bold text-lg">Don Foh</p>
                <ol className="my-4">
                    {
                        sections.map(section => (
                            <li key={section.name}>
                                <Button variant="link" className="pl-0">{section.name}</Button>
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
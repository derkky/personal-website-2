import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"

import { Button } from "./ui/button"
import { CaretSortIcon } from "@radix-ui/react-icons"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const ExperienceCard = ({ company, title, duration, description, tech, techDetails }) => {
    return (
        <Card className="w-full max-w-[800px]">
            <CardHeader>
                <CardTitle className="font-bold text-xl">
                    {company}
                </CardTitle>
                <CardDescription>
                    {title} | {duration}
                </CardDescription>
            </CardHeader>
            <CardContent>
                {description}
                <Accordion type="single" collapsible className="w-full mt-4">
                    {
                        techDetails.map((td, idx) => 
                            <AccordionItem value={td.detailTitle} key={idx}>
                                <AccordionTrigger>{td.detailTitle}</AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-2">
                                    {td.detailDescription.map((dd, idx) => <p key={idx}>{dd}</p>)}
                                </AccordionContent>
                            </AccordionItem>
                        )
                    }

                </Accordion>
                {/* <Collapsible className="mt-8">
                    <CollapsibleTrigger>
                        <Button variant="ghost" size="sm">
                            <CaretSortIcon className="h-4 w-4" />
                            <strong>
                                Technical Details (Click to toggle)
                            </strong>
                        </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                        {techDetails}
                    </CollapsibleContent>
                </Collapsible> */}
            </CardContent>
            <CardFooter>
                <span className="font-semibold">Technologies:</span>
                <span className="ml-2">
                    {tech}
                </span>
            </CardFooter>
        </Card>
    )
}

export default ExperienceCard
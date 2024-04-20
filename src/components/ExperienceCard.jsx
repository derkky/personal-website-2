import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const ExperienceCard = ({ company, title, duration, description, tech }) => {
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
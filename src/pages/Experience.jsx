import ExperienceCard from "@/components/ExperienceCard"
import SectionContainer from "../components/SectionContainer"
import experience from "../data/experience"

const Experience = () => {
    return (
        <SectionContainer>
            <p className="font-bold text-3xl">Experience</p>
            <div className="flex flex-col gap-3 mt-10 w-full max-w-[800px] pb-[80px]">
                {experience.map((experience, i) =>
                    <ExperienceCard
                        key={i}
                        {...experience}
                    />
                )}
            </div>
        </SectionContainer>
    )
}

export default Experience
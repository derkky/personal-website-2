import SectionContainer from "@/components/SectionContainer"

const Contact = () => {
    return(
        <SectionContainer>
            <p className="font-bold text-3xl">
                Contact
            </p>
            <div className="flex flex-col gap-6 mt-10 max-w-[800px]">
                <p>
                    I'm always looking to meet new people.
                </p>
                <p>
                    If you're down to discuss emerging tech or you're looking for a Kaggle teammate, you can find me at:
                </p>
                <ol className="list-disc list-inside">
                    <li>
                        <a href="mailto:don.foh@u.nus.edu" className="underline" target="_blank">don.foh@u.nus.edu</a>
                    </li>
                    <li>
                        <a href="https://linkedin.com/in/don-foh" className="underline" target="_blank">
                            linkedin.com/in/don-foh
                        </a>
                    </li>
                </ol>
            </div>
        </SectionContainer>
    )
}

export default Contact
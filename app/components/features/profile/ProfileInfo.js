import Image from "next/image"
import Typewriter from "../../effects/TypeWriter/Typewriter"
import Socials from "../../core/Socials"


export default function ProfileInfo() {


    const SCHOOL_LINK = 'https://dz.linkedin.com/school/ensia-school/'
    return (
        <>
            <div className="w-full flex  flex-col items-center p-4 gap-4">
                {/*NES.css is overrriding the top margin*/}
                <h2 className="text-lg text-center font-bold" style={
                    { marginTop: '2.5rem' }
                }>Memmou <br /> Abderrahmane</h2>
                <span className="text-[14px]  text-center font-bold">
                    {">"}
                    <Typewriter texts={[" Software Engineer ", " Digital Designer ", " Calligraphist "]} speed={100} delay={1500} />
                </span>
                {/* Contact Icons */}
                <div className="flex gap-4 mt-2 mb-2">

                    <Socials />

                </div>
                <span className="text-sm text-center">
                    <Image src="/icons/controller-bk.png" width={12} height={12} alt="black controller icon" className="inline mx-1"></Image>
                    <span className="font-bold">
                        Joined the Server on:
                    </span>
                    <br /> <span className="text-gray-800 font-bold">28 March 2005</span> at <span className="text-gray-800 font-bold">10:15 PM</span>
                </span>
                <h2 className="text-md text-center font-bold"> - - Bio - - </h2>
                <p className="text-center text-[12px]">
                    Calligraphist and designer by day (undercover <a href={SCHOOL_LINK} target="_blank" rel="noopener noreferrer" className="underline !decoration-dashed">NHSAI</a> student), software engineer by night. I build systems from scratch, fix problems that shouldn’t have existed, and redesign old systems just to prove the client wrong. I also craft letters into art —nothing too complicated, just effortless beauty. <br /> Don’t waste my time, don’t waste yours.
                </p>

            </div>
        </>
    )
}

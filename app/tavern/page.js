
import GoBack from "../components/core/buttons/GoBack"
import Socials from "../components/core/Socials"
import Donate from "../components/features/tavern/Donate"

export default function Tavern() {
    return <>
        <div className="relative">

            <GoBack />

            <span className="text-3xl font-bold absolute top-7 left-1/2 transform -translate-x-1/2">Tavern</span>
            <span className="text-sm absolute top-16 left-1/2 transform -translate-x-1/2">
                No Alcohol is served here :D
            </span>

        </div>
        <div className="h-[70px]">

        </div>

        <div className="flex flex-col items-center">

            <div className="w-[90%]">

                <Donate />

                <div className="w-full items-center justify-center mt-7 flex flex-col gap-7">

                    <h2 className="font-bold m-0">-- Contact Me --</h2>

                    <input type="email" className="nes-input" placeholder="Enter your E-Mail">
                    </input>

                    <textarea className="nes-textarea min-h-[250px]" placeholder="Enter your Message (I'm too lazy to implement a backend for this, so basically, your message is not even leaving the browser (●'◡'●) )" ></textarea>

                    <div className="flex items-center justify-center gap-4">

                        <Socials />

                    </div>


                </div>

            </div>

        </div>
    </>
}

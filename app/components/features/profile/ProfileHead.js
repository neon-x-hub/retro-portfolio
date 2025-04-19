import CoverBg from "../../backgrounds/CoverBg";
import PfpInteractive from "../../ui/pfp/PfpIneractive";
import calculateAgeAndXP from "@/app/lib/utils/calculateAgeandXP";


export default function ProfileHead() {

    const BIRTH_DATE = '2005-03-28T22:15:00+01:00'
    const { lvl, xp } = calculateAgeAndXP(BIRTH_DATE)

    return (
        <>
            {/* Cover BG + PFP + Stats */}
            <div className=" h-[300px] w-full flex flex-col relative">
                {/*Cover Image + PFP*/}
                <div className="relative w-full h-[220px]">
                    <div className="relative w-full h-full">
                        <CoverBg />
                        <PfpInteractive />
                    </div>
                </div>

                <span className="text-md font-bold text-center absolute right-[10%] bottom-[5%]">
                    LVL
                    <br />
                    <span className="text-5xl text-amber-950">
                        {lvl}
                    </span>
                </span>

                <span className="text-md font-bold text-center absolute left-[10%] bottom-[5%]">
                    XP
                    <br />
                    <span className="text-5xl text-amber-950">
                        {xp < 10 ? `0${xp}` : xp}
                    </span>
                </span>
            </div>

        </>
    )
}

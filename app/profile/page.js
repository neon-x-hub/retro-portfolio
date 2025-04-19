import StochasticShadow from "../components/effects/StochasticShadow"
import ProfileHead from "../components/features/profile/ProfileHead";
import ProfileInfo from "../components/features/profile/ProfileInfo";
import GuessingGame from "../components/features/profile/GuessingGame";
import GoBack from "../components/core/buttons/GoBack";


export default function Profile() {

    return <>
        <GoBack />
        {/* Cover BG + PFP + Stats */}
        <ProfileHead />
        {/* Info */}
        <ProfileInfo />
        {/* Separator */}
        <div className="w-full h-[100px] rotate-180">
            <StochasticShadow
                width={"100%"}
                meanHeight={0.8}
                variability={0.4}
                pixelArtWidth={16}
                pixelArtHeight={3}
                blur={10}
                shadowColor="rgba(0, 0, 0, 0.15)"
                svgFill="#f0f0f0"
                className=""
            >
            </StochasticShadow>
        </div>
        {/* Game Section */}
        <GuessingGame />

    </>
}

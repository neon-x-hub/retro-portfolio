import NavigateButton from "../../core/buttons/NavigateButton";
import Image from "next/image";

export default function MainMenuControls({ moveUp, moveDown, navigateTo, prompt = "Navigate !", showLoadingAnimation = true, autoDisable = true }) {
    return (
        <div className="absolute inset-x-0 bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] flex justify-between gap-2 p-2">
            <button type="button" className="nes-btn w-16 h-16" onClick={moveUp}>
                <Image alt="up arrow" src="/icons/interactions/up-arrow.png" width={32} height={32} />
            </button>

            <NavigateButton
                onNavigate={navigateTo}
                disabled={false}
                showLoadingAnimation={showLoadingAnimation}
                autoDisable={autoDisable}
            >
                {prompt}
            </NavigateButton>

            <button type="button" className="nes-btn w-16 h-16" onClick={moveDown}>
                <Image alt="down arrow" src="/icons/interactions/up-arrow.png" width={32} height={32} className=" rotate-z-180" />
            </button>
        </div>
    );
}

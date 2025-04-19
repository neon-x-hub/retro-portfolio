"use client";

import NavigateButton from "../../core/buttons/NavigateButton";
import Image from "next/image";

const CardSceneControls = ({ onNavigate, onMovePrevious, onMoveNext }) => {
    return (
        <div className="absolute inset-x-0 bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] flex justify-between gap-2 p-2">
            {/* Previous Button */}
            <button
                type="button"
                className="nes-btn w-16 h-16 flex items-center justify-center"
                onClick={onMovePrevious}
                aria-label="Previous card"
            >
                <Image
                    alt="Previous"
                    src="/icons/interactions/up-arrow.png"
                    width={32}
                    height={32}
                    className="-rotate-90"
                />
            </button>

            {/* Center Navigation Button */}
            <NavigateButton
                onNavigate={onNavigate}
                disabled={false}
                className="flex-1 mx-2"
            >
                Explore →
            </NavigateButton>

            {/* Next Button */}
            <button
                type="button"
                className="nes-btn w-16 h-16 flex items-center justify-center"
                onClick={onMoveNext}
                aria-label="Next card"
            >
                <Image
                    alt="Next"
                    src="/icons/interactions/up-arrow.png"
                    width={32}
                    height={32}
                    className="rotate-90"
                />
            </button>
        </div>
    );
};

export default CardSceneControls;

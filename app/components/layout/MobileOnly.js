"use client";

import { useEffect, useState, useMemo } from "react";
import { Howl } from "howler";

const MOBILE_BREAKPOINT = 462;
const SHITTY_UI_URL = "https://www.spacejam.com/1996/";
const COMPLAIN_URL = "https://www.mdn.dz/";


export default function MobileOnly({ children }) {

    const sound = useMemo(() => new Howl({
        src: "/sounds/pop_up.ogg",
    }), []);


    const [isMobile, setIsMobile] = useState(true);

    function handleProceedClick() {
        // play sound here
        sound.play();
        window.open(SHITTY_UI_URL, "_blank");
    }

    function handleComplainClick() {
        // play sound here
        sound.play();
        window.open(COMPLAIN_URL, "_blank");
    }

    function handleGameBoyClick() {
        // play click sound, then:
        sound.play();
        alert("We're out of stock. Try eBay or a time machine.");
    }

    useEffect(() => {
        const update = () => {
            setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
        };
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    if (!isMobile) {
        return (
            <div className="w-full h-[100dvh] flex flex-col items-center justify-center text-center font-bold">

                <div className="p-2 py-4 w-[80%] max-w-4xl nes-container is-rounded">
                    <h1>Access Denied!</h1>
                    <p>This site is optimized for tiny 8-bit dreams only. <br /> Use a phone instead.</p>
                    <span className="block mt-4 text-sm">Or flip your phone screen. Who da heck uses a phone horizontally?!</span>
                    <div className="mt-4 flex items-center justify-around gap-4 text-sm w-full ">
                        <button className="nes-btn" onClick={handleProceedClick}>
                            Proceed to Shitty UI
                        </button>

                        <button className="nes-btn" onClick={handleComplainClick}>
                            Complain about it
                        </button>

                        <button className="nes-btn" onClick={handleGameBoyClick}>
                            Buy a GameBoy
                        </button>
                    </div>
                </div>

            </div>
        );
    }

    return <>{children}</>;
}

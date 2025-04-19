"use client";

import { useState, useEffect } from "react";
import Pfp from "./Pfp";
import './Pfp.css';
import * as Popover from '@radix-ui/react-popover';
import { Howl } from "howler";
export default function PfpInteractive() {
    const pfpSize = 25 * 6;
    const WAKEUP_PHRASES = [
        "Shhh... dreaming of fish.",
        "Five more minutes...",
        "Meow, snack time later.",
        "Nap mode: On 💤",
        "Pounce later.",
        "Zzz... cool cat vibes."
    ];

    const tick_002 = new Howl({
        src: ["/sounds/tick_002.ogg"],
    });

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            tick_002.play();
            const timeout = setTimeout(() => {
                setIsOpen(false);
            }, 3000);
            return () => clearTimeout(timeout);
        }
    }, [isOpen]);

    return (
        <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
            <Popover.Trigger asChild>
                <div
                    className="cursor-pointer" // Make sure it's clickable
                >
                    <Pfp
                        pfpSize={pfpSize}
                        pfpUrl="/gifs/sleeping-car.gif"
                    />
                </div>
            </Popover.Trigger>
            <Popover.Portal>
                <Popover.Content
                    className=" max-w-[200px] transform -translate-y-[80px] translate-x-[40px] flex items-center justify-center p-4 px-6 text-wrap pixel-corners--wrapper bg-gray-100 font-bold"
                    side="top"
                    sideOffset={15}
                    onPointerDownOutside={(e) => e.preventDefault()} // Prevent immediate close on click
                >
                    <span className="text-sm pixel-corners text-wrap text-center">
                        {WAKEUP_PHRASES[Math.floor(Math.random() * WAKEUP_PHRASES.length)]}
                    </span>
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    );
}

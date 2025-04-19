"use client";

import { useState } from "react";
import ChapterMenu from "./ChapterMenu"
import MainMenuControls from "../main_menu/MainMenuControls";
import ChapterDetails from "./ChapterDetails";
import { Howl } from "howler";
import CHAPTERS from "@/app/lib/data/chapters";


export default function ControlledChapterMenu() {

    const [cursorIndex, setCursorIndex] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(null);

    // Sound effects
    const pluck_001 = new Howl({
        src: ["/sounds/pluck_001.ogg"],
    });
    const pluck_002 = new Howl({
        src: ["/sounds/pluck_002.ogg"],
    });
    const pickup_10 = new Howl({
        src: ["/sounds/pickup_10.wav"],
    });

    const moveUp = () => {
        // move the cursor up, and wrap around if necessary
        setCursorIndex(prev => (prev > 0 ? prev - 1 : CHAPTERS.length - 1));

        if (Math.random() > 0.5) {
            pluck_001.play();
        }
        else {
            pluck_002.play();
        }

    };

    const moveDown = () => {
        setCursorIndex(prev => (prev < CHAPTERS.length - 1 ? prev + 1 : 0));

        if (Math.random() > 0.5) {
            pluck_001.play();

        }
        else {
            pluck_002.play();

        }
    };

    const selectItem = () => {
        setSelectedIndex(cursorIndex);

        pickup_10.play();
    };


    return (
        <div className="h-[100dvh]">

            <div className="h-[90dvh] flex flex-col justify-center items-center">

                <div className="h-[10dvh]"
                />
                <ChapterDetails item={CHAPTERS[selectedIndex]} />

                <ChapterMenu items={CHAPTERS.map(chapter => chapter.name)} selectedIndex={cursorIndex} />


            </div>


            <MainMenuControls moveUp={moveUp} moveDown={moveDown} navigateTo={selectItem} prompt="Select Chapter" showLoadingAnimation={false} autoDisable={false} />

        </div>
    )
}

'use client';

import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import MainMenuItems from './MainMenuItems';
import MainMenuControls from './MainMenuControls';
import { Howl } from "howler";



const MainMenu = () => {
    const menuItems = ['Profile', 'Skills', 'Quests', 'Storyline', 'Tavern'];
    const [selectedIndex, setSelectedIndex] = useState(0);
    const router = useRouter();

    // Sound effects
    const pluck_001 = useMemo(() => new Howl({ src: ["/sounds/pluck_001.ogg"] }), []);
    const pluck_002 = useMemo(() => new Howl({ src: ["/sounds/pluck_002.ogg"] }), []);
    const pickup_10 = useMemo(() => new Howl({ src: ["/sounds/pickup_10.wav"] }), []);
    const moveUp = () => {
        setSelectedIndex(prev => (prev > 0 ? prev - 1 : menuItems.length - 1));
        if (Math.random() > 0.5) {
            pluck_001.play();

        }
        else {
            pluck_002.play();

        }
    };

    const moveDown = () => {
        setSelectedIndex(prev => (prev < menuItems.length - 1 ? prev + 1 : 0));
        if (Math.random() > 0.5) {
            pluck_001.play();

        }
        else {
            pluck_002.play();

        }
    };

    const navigateTo = () => {
        const selectedItem = menuItems[selectedIndex].toLowerCase();
        pickup_10.play();
        // Navigate to the selected item
        router.push(`/${selectedItem}`);

    };

    return (
        <div className="h-dvh w-screen flex flex-col items-center justify-center">
            <MainMenuItems
                items={menuItems}
                selectedIndex={selectedIndex}
            />
            <MainMenuControls
                moveUp={moveUp}
                moveDown={moveDown}
                navigateTo={navigateTo}
            />
        </div>
    );
};

export default MainMenu;

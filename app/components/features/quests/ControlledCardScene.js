"use client";

import React, { useState } from 'react';
import CardScene from '../../r3f/main';
import CardSceneControls from './CardSceneControls';

export default function ControlledCardScene({ quests }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleMovePrevious = () => {
        setCurrentImageIndex(prev =>
            (prev - 1 + quests.length) % quests.length
        );
    };

    const handleMoveNext = () => {
        setCurrentImageIndex(prev =>
            (prev + 1) % quests.length
        );
    };

    return (
        <>
            <CardScene
                quests={quests}
                currentImageIndex={currentImageIndex}
                numofquests={quests.length}
            />
            <CardSceneControls
                onNavigate={() => console.log('Navigate')}
                onMovePrevious={handleMovePrevious}
                onMoveNext={handleMoveNext}
            />
            <span className='absolute top-8 right-[3%] font-bold text-2xl text-black'>
                {currentImageIndex + 1}<span className=' text-xl font-normal'>/{quests.length}</span>
            </span>
            <span className='absolute bottom-[90px] right-[5%] font-bold text-2xl text-black'>
                {quests[(currentImageIndex + 1) % quests.length].title} ▶
            </span>
        </>
    );
}

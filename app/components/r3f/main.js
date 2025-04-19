"use client";

import { useState, useMemo, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Image as ImageDrei, Float, Preload, useTexture } from '@react-three/drei';
import { EffectComposer, Glitch } from '@react-three/postprocessing';
import { GlitchMode } from 'postprocessing';
import CoverBg from '../backgrounds/CoverBg';
import { Howl } from 'howler';
import { TextureLoader, Texture } from 'three';
import  Image from 'next/image';


const textureCache = {};

// Preload all textures on component mount
const preloadTextures = (numofquests) => {
    const loader = new TextureLoader();
    for (let i = 0; i < numofquests; i++) {
        const path = `/images/cards/${i + 1}.png`;
        loader.load(path, (texture) => {
            textureCache[path] = texture;
        });
    }
    // Load also d.png, ip.png and f.png
    loader.load('/images/cards/d.png', (texture) => {
        textureCache['/images/cards/d.png'] = texture;
    });
    loader.load('/images/cards/ip.png', (texture) => {
        textureCache['/images/cards/ip.png'] = texture;
    });
    loader.load('/images/cards/f.png', (texture) => {
        textureCache['/images/cards/f.png'] = texture;
    });
};

const QuestCard = ({ index, status }) => {
    const path = `/images/cards/${index + 1}.png`;
    const texture = textureCache[path] || new Texture();

    const statusPath = `/images/cards/${status}.png`;
    const statusTexture = textureCache[statusPath] || new Texture();

    return (
        <>
            <ImageDrei
                texture={texture}
                position={[0, 1, 0]}
                scale={[5, 8]}
                opacity={1}
                alphaTest={0.1}
                premultiply
            />
            <ImageDrei
                texture={statusTexture}
                position={[2, 4.75, 0.5]}
                scale={[2, 0.5]} // Width, Height (aspect ratio maintained)
                opacity={1} // Control opacity if needed
                alphaTest={0.1} // Important for transparent pixels
                premultiply // Helps with transparency blending
            />
        </>
    );
};
const CardScene = ({ quests, currentImageIndex, callback, numofquests }) => {
    const [glitchActive, setGlitchActive] = useState(false);
    const [localIndex, setLocalIndex] = useState(currentImageIndex);
    const [isPreloaded, setIsPreloaded] = useState(false)

    // Preload all textures when component mounts
    useEffect(() => {
        preloadTextures(numofquests);
        const checkInterval = setInterval(() => {
            if (Object.keys(textureCache).length >= numofquests) {
                setIsPreloaded(true);
                clearInterval(checkInterval);
            }
        }, 100);
        return () => clearInterval(checkInterval);
    }, [numofquests]);

    const glitchSounds = useMemo(() => [
        new Howl({ src: ['/sounds/glitch_sfx-127.ogg'], volume: 0.25 }),
        new Howl({ src: ['/sounds/fast_glitch_3.ogg'], volume: 0.25 }),
        new Howl({ src: ['/sounds/fast_glitch_1.ogg'], volume: 0.25 })
    ], []);

    useEffect(() => {
        const triggerGlitch = async () => {
            const duration = 700;
            setGlitchActive(false);

            await new Promise(resolve => requestAnimationFrame(resolve));

            setGlitchActive(true);
            glitchSounds[Math.floor(Math.random() * 3)].play();

            setTimeout(() => {
                setGlitchActive(false);
            }, duration);
        };

        if (currentImageIndex !== localIndex) {
            triggerGlitch();
            setLocalIndex(currentImageIndex);
        }
    }, [currentImageIndex, localIndex, glitchSounds]);

    if (!isPreloaded) {
        return <div className="h-[100dvh] flex items-center justify-center flex-col gap-4">
            <Image
                src={'/gifs/space-invader-.gif'}
                width={150}
                height={100}
                alt='space invader loader'
                className='h-auto'
                unoptimized
            />
            Loading...
        </div>;
    }

    return (
        <div className="h-[100dvh] overflow-clip relative">
            <div className='brightness-[75%] absolute opacity-80 bottom-0 scale-200 w-full rotate-180'>
                <CoverBg />
            </div>
            <Canvas
                camera={{ position: [0, 0, 10] }}
                style={{ width: '100%', height: '100%' }}
                gl={{ preserveDrawingBuffer: true, alpha: true }}
            >

                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />

                <Suspense fallback={null}>

                    <Float
                        speed={1}
                        rotationIntensity={0.3}
                        floatIntensity={0.1}
                        floatingRange={[0, 10]}
                    >
                        <QuestCard
                            index={currentImageIndex}
                            status={quests[currentImageIndex].status}
                        />


                    </Float>
                </Suspense>

                <EffectComposer>
                    <Glitch
                        delay={[0, 0]}
                        duration={[0.7, 0.7]}
                        strength={[0.7, 0.9]}
                        mode={GlitchMode.SPORADIC}
                        active={glitchActive}
                        ratio={0.85}
                    />
                </EffectComposer>
            </Canvas>
        </div>
    );
};

export default CardScene;

"use client"

// components/CustomNode.jsx
import React, { useMemo } from 'react';
import Image from 'next/image';
import { Handle, Position, useReactFlow } from '@xyflow/react';
import '../ui/pfp/Pfp.css';
import { Howl } from 'howler';
import { Dialog, VisuallyHidden } from "radix-ui"


const CustomNode = ({ id, data, selected }) => {
    const { getNode } = useReactFlow();
    const node = getNode(id);

    // Memoised sounde
    const click_001 = useMemo(() => new Howl({ src: ["/sounds/click_001.ogg"] }), []);

    // Handle positions relative to triangle center
    const handlePositions = {
        topLeft: { x: 0, y: 0 },
        topRight: { x: '100%', y: 0 },
        bottomLeft: { x: 0, y: '100%' },
        bottomRight: { x: '100%', y: '100%' },
        Top: { x: '50%', y: 0 },
        Left: { x: 0, y: '50%' },
        Right: { x: '100%', y: '50%' },
        Bottom: { x: '50%', y: '100%' },
    };

    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>

                <div className="pixel-corners--wrapper" onClick={() => {
                    click_001.play()
                }}>
                    {/*             <div className="absolute bottom-1 left-1/2 text-xs bg-yellow-100 px-1 z-20">
                {node.position.x.toFixed(0)},{node.position.y.toFixed(0)}
            </div> */}
                    <div className="pixel-corners px-5 py-4 shadow-md w-[180px] bg-white">
                        {/* Dynamically generate corner handles */}
                        {Object.keys(handlePositions).map((positionKey) => {
                            let positionSide = positionKey.includes('Left')
                                ? Position.Left
                                : Position.Right;

                            if (positionKey === 'Top') {
                                positionSide = Position.Top
                            }
                            if (positionKey === 'Bottom') {
                                positionSide = Position.Bottom
                            }

                            return (
                                <React.Fragment key={positionKey}>
                                    <Handle
                                        id={`${positionKey.toLowerCase()}-target`}
                                        type="target"
                                        position={positionSide}
                                        className="!w-2 !h-2 -translate-x-1/2 -translate-y-1/2"
                                        style={{
                                            left: handlePositions[positionKey].x,
                                            top: handlePositions[positionKey].y,
                                        }}
                                    />
                                    <Handle
                                        id={`${positionKey.toLowerCase()}-source`}
                                        type="source"
                                        position={positionSide}
                                        className="!w-2 !h-2 !opacity-0"
                                        style={{
                                            left: handlePositions[positionKey].x,
                                            top: handlePositions[positionKey].y,
                                        }}
                                    />
                                </React.Fragment>
                            );
                        })}

                        <div
                            className="text-center"
                            style={{ fontWeight: 'bold', marginBottom: '8px' }}
                        >
                            {data.label}
                        </div>

                        {data.description && (
                            <div style={{ fontSize: '0.8em', opacity: 0.8 }}>
                                {data.description}
                            </div>
                        )}

                    </div>
                </div>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className='fixed inset-0 opacity-70 bg-black'>
                </Dialog.Overlay>
                {/* Dialog content */}
                <Dialog.Content
                    className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex items-center justify-center grayscale text-3xl text-white flex-col gap-6"
                >

                    <VisuallyHidden.Root>
                        <Dialog.Title>Details on {data.label}</Dialog.Title>
                    </VisuallyHidden.Root>
                    <h2 className='text-2xl font-bold'>My Honest Feeling</h2>
                    <Dialog.Description className='w-[90%] text-center mb-3'>
                        {data.story}
                    </Dialog.Description>
                    <div className='flex gap-3 flex-wrap items-center justify-center'>

                        {data.details.map((detail, index) => (
                            <div key={index} className="relative bg-gray-900 px-3 py-1 w-fit max-w-[95%] text-center">
                                {(data.favourites && data.favourites[index] === 1) ? <Image src={'/icons/star.png'} width={12} height={12} alt="star icon" className="absolute -top-2 -left-2 invert brightness-0" /> : null}
                                <span className="font-bold text-center">{detail}</span>
                            </div>
                        ))

                        }
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

const HexNode = ({ id, data, selected }) => {
    // Hexagon dimensions from your image
    const hexWidth = 132;
    const hexHeight = 132;

    const { getNode } = useReactFlow()
    const node = getNode(id)

    // Handle positions relative to hexagon center
    const handlePositions = {
        top: { x: 5, y: -hexHeight / 2 },    // 10px from top edge
        bottom: { x: 0, y: hexHeight / 2 + 10 },   // 10px from bottom edge
        leftTop: { x: -hexWidth / 2 + 5, y: -hexHeight / 4 + 10 },  // Upper left
        leftBottom: { x: -hexWidth / 2 + 5, y: hexHeight / 4 + 17 }, // Lower left
        rightTop: { x: hexWidth / 2 - 5, y: -hexHeight / 4 + 10 },   // Upper right
        rightBottom: { x: hexWidth / 2 - 5, y: hexHeight / 4 + 17 }  // Lower right
    };

    return (
        <div className='relative' style={{ width: hexWidth, height: hexHeight }}>
            {/*             <div className="absolute -bottom-6 left-0 text-xs bg-yellow-100 px-1">
                {node.position.x.toFixed(0)},{node.position.y.toFixed(0)}
            </div> */}
            <Image
                src={'/images/hex.png'}
                width={hexWidth}
                height={hexHeight}
                alt='hexagon node'
                className='z-0'
            />

            {/* Center label */}
            <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-4.5 text-center font-bold z-10">
                {data.label}
            </p>

            {/* Main handles (6 points) */}
            <Handle
                id='top'
                type="source"
                position={Position.Top}
                style={{ left: '50%', top: `${(handlePositions.top.y + hexHeight / 2) / hexHeight * 100}%` }}
                className=" !-translate-x-1/2 !opacity-0"
            />
            <Handle
                id='top-target'
                type="target"
                position={Position.Top}
                style={{ left: '50%', top: `${(handlePositions.top.y + hexHeight / 2) / hexHeight * 100}%` }}
                className=" !-translate-x-1/2 !opacity-0"
            />

            <Handle
                id='bottom'
                type="source"
                position={Position.Bottom}
                style={{ left: '50%', top: `${(handlePositions.bottom.y + hexHeight / 2) / hexHeight * 100}%` }}
                className=" !-translate-x-1/2 !opacity-0"
            />
            <Handle
                id='bottom-target'
                type="target"
                position={Position.Bottom}
                style={{ left: '50%', top: `${(handlePositions.bottom.y + hexHeight / 2) / hexHeight * 100}%` }}
                className=" !-translate-x-1/2 !opacity-0"
            />

            {/* Additional side handles */}
            <Handle
                id='top-left'
                type="source"
                position={Position.Left}
                style={{
                    left: `${(handlePositions.leftTop.x + hexWidth / 2) / hexWidth * 100}%`,
                    top: `${(handlePositions.leftTop.y + hexHeight / 2) / hexHeight * 100}%`
                }}
                className=" !-translate-x-1/2 !-translate-y-1/2 !opacity-0"
            />

            <Handle
                id='bottom-left'
                type="source"
                position={Position.Left}
                style={{
                    left: `${(handlePositions.leftBottom.x + hexWidth / 2) / hexWidth * 100}%`,
                    top: `${(handlePositions.leftBottom.y + hexHeight / 2) / hexHeight * 100}%`
                }}
                className="!-translate-x-1/2 !-translate-y-1/2 !opacity-0"
            />

            <Handle
                id='top-right'
                type="source"
                position={Position.Right}
                style={{
                    left: `${(handlePositions.rightTop.x + hexWidth / 2) / hexWidth * 100}%`,
                    top: `${(handlePositions.rightTop.y + hexHeight / 2) / hexHeight * 100}%`
                }}
                className=" !-translate-x-1/2 !-translate-y-1/2 !opacity-0"
            />

            <Handle
                id='bottom-right'
                type="source"
                position={Position.Right}
                style={{
                    left: `${(handlePositions.rightBottom.x + hexWidth / 2) / hexWidth * 100}%`,
                    top: `${(handlePositions.rightBottom.y + hexHeight / 2) / hexHeight * 100}%`
                }}
                className="!-translate-x-1/2 !-translate-y-1/2 !opacity-0"
            />
        </div>
    );
};



const TriangleNode = ({ id, data, selected }) => {
    const triWidth = 132;
    const triHeight = 132;

    const { getNode } = useReactFlow()
    const node = getNode(id)

    // Handle positions relative to triangle center
    const handlePositions = {
        topLeft: { x: -triWidth / 2 + 5, y: -triHeight / 2 + 10 },
        topRight: { x: triWidth / 2, y: -triHeight / 2 + 10 },
        bottom: { x: 5, y: triHeight / 2 - 30 },
        left: { x: -triWidth / 2 + 5, y: 0 },
        right: { x: triWidth / 2 - 5, y: 0 },
    };

    return (
        <div className='relative' style={{ width: triWidth, height: triHeight }}>
            {/* Debug Overlay */}
            {/*             <div className="absolute -bottom-6 left-0 text-xs bg-yellow-100 px-1">
                {node.position.x.toFixed(0)},{node.position.y.toFixed(0)}
            </div> */}
            <Image
                src={'/images/tri.png'} // Your upside-down triangle image
                width={triWidth}
                height={triHeight}
                alt='triangle node'
                className='z-0'
            />

            {/* Center label */}
            {/*             <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-bold z-10">
                {data.label}
            </p> */}

            {/* Top Left Handle */}
            <Handle
                id='top-left'
                type="source"
                position={Position.Top}
                style={{
                    left: `${(handlePositions.topLeft.x + triWidth / 2) / triWidth * 100}%`,
                    top: `${(handlePositions.topLeft.y + triHeight / 2) / triHeight * 100}%`
                }}
                className="!-translate-x-1/2 !-translate-y-1/2 !opacity-0"
            />

            {/* Top Right Handle */}
            <Handle
                id='top-right'
                type="source"
                position={Position.Top}
                style={{
                    left: `${(handlePositions.topRight.x + triWidth / 2) / triWidth * 100}%`,
                    top: `${(handlePositions.topRight.y + triHeight / 2) / triHeight * 100}%`
                }}
                className="!-translate-x-1/2 !-translate-y-1/2 !opacity-0"
            />

            {/* Bottom Point Handle */}
            <Handle
                id='bottom'
                type="source"
                position={Position.Bottom}
                style={{
                    left: '50%',
                    top: `${(handlePositions.bottom.y + triHeight / 2) / triHeight * 100}%`
                }}
                className="!-translate-x-1/2 !opacity-0"
            />

        </div>
    );
};


const DiamondNode = ({ id, data, selected }) => {
    const diamondSize = 164;

    const { getNode } = useReactFlow()
    const node = getNode(id)

    // Handle positions relative to triangle center
    const handlePositions = {
        top: { x: diamondSize / 2 + 5, y: 2 },
        bottom: { x: -diamondSize / 2, y: '100%' },
        left: { x: 0, y: '50%' },
        right: { x: '100%', y: '50%' },
    };

    return (
        <div className='relative' style={{ width: diamondSize, height: diamondSize }}>
            {/* Debug Overlay */}
            {/*             <div className="absolute -bottom-6 left-0 text-xs bg-yellow-100 px-1">
                {node.position.x.toFixed(0)},{node.position.y.toFixed(0)}
            </div> */}
            <Image
                src={'/images/diamond.png'} // Your upside-down triangle image
                width={diamondSize}
                height={diamondSize}
                alt='diamond node'
                className='z-0'
            />

            {/* Center label */}
            <video
                src="/gifs/space-invader.webm"
                height={diamondSize - 100}
                width={diamondSize - 100}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 mix-blend-darken"
                autoPlay
                loop
                muted
                playsInline
            />


            {/* Top Handle */}
            <Handle
                id='top'
                type="source"
                position={Position.Top}
                style={{
                    top: handlePositions.top.y,
                    left: handlePositions.top.x,

                }}
                className="!-translate-x-1/2 !-translate-y-1/2 !opacity-0"
            />

            {/* Right Handle */}
            <Handle
                id='right'
                type="source"
                position={Position.Right}
                style={{
                    left: `${(handlePositions.right.x + diamondSize / 2) / diamondSize * 100}%`,
                    top: `${(handlePositions.right.y + diamondSize / 2) / diamondSize * 100}%`
                }}
                className="!-translate-x-1/2 !-translate-y-1/2 !opacity-0"
            />
            {/* Left Handle */}
            <Handle
                id='left'
                type="source"
                position={Position.Left}
                style={{
                    left: handlePositions.left.x,
                    top: handlePositions.left.y
                }}
                className="!-translate-x-1/2 !-translate-y-1/2 !opacity-0"
            />

            {/* Bottom  Handle */}
            <Handle
                id='bottom'
                type="source"
                position={Position.Bottom}
                style={{
                    left: '50%',
                    top: `${(handlePositions.bottom.y + diamondSize / 2) / diamondSize * 100}%`
                }}
                className="!-translate-x-1/2 !-translate-y-1/2 !opacity-0"
            />

        </div>
    );
};



export { CustomNode, HexNode, TriangleNode, DiamondNode };

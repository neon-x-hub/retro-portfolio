"use client";

import React, { useState, useEffect, useRef, useId } from "react";

export default function StochasticClipBox({
    width = "100%",
    pixelArtWidth = 16, // Native width of your pixel art
    pixelArtHeight = 16, // Native height of your pixel art
    meanHeight = 0.7, // 0-1 range for percentage
    variability = 0.3, // 0-1 range for variation
    shadow = false, //
    className = "",
    children,
}) {
    const maskRef = useRef(null);
    const maskId = useId();
    const [pathData, setPathData] = useState("");
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const updateSize = () => {
            if (maskRef.current) {
                const width = maskRef.current.offsetWidth;
                const height = width * (pixelArtHeight / pixelArtWidth); // Maintain aspect ratio
                setContainerSize({ width, height });
            }
        };

        updateSize();
    }, [pixelArtWidth, pixelArtHeight]);

    useEffect(() => {
        if (containerSize.width > 0) generatePath();
    }, [containerSize, pixelArtWidth, meanHeight, variability]);

    const generatePath = () => {
        const { width: containerWidth, height: containerHeight } = containerSize;
        if (!containerWidth || !containerHeight) return;

        const segmentWidth = containerWidth / pixelArtWidth;
        const discreteHeightUnit = segmentWidth; // Use segment width as height unit

        let path = `M0,${containerHeight} L0,0`; // Start at bottom-left, move to top-left

        for (let i = 0; i <= pixelArtWidth; i++) {
            const x = i * segmentWidth;

            // Calculate discrete height
            const randomVariation = (Math.random() * 2 - 1) * variability;
            const heightPercentage = Math.max(0, Math.min(1, meanHeight + randomVariation));
            const discreteSteps = Math.floor((containerHeight / discreteHeightUnit) * heightPercentage);
            const y = containerHeight - (discreteSteps * discreteHeightUnit);

            if (i < pixelArtWidth) {
                path += ` L${x},${y} L${x + segmentWidth},${y}`;
            } else {
                path += ` L${x},${y}`;
            }
        }

        path += ` L${containerWidth},${containerHeight} Z`;
        setPathData(path);
    };

    return (
        <div
            ref={maskRef}
            className={`relative ${className}`}
            style={{ width, height: containerSize.height || "auto" }}
        >
            {/* SVG Mask Definition */}
            <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox={`0 0 ${containerSize.width} ${containerSize.height}`}
                aria-hidden="true"
                preserveAspectRatio="none"
            >
                <defs>
                    <mask id={maskId}>
                        <rect width="100%" height="100%" fill="white" />
                        {pathData && <path d={pathData} fill="black" />}
                    </mask>
                </defs>
            </svg>


            {/* Masked Content */}
            <div
                className="absolute inset-0 w-full h-full"
                style={{
                    mask: `url(#${maskId})`,
                    WebkitMask: `url(#${maskId})`,
                    imageRendering: "pixelated",
                    WebkitImageRendering: "pixelated"
                }}
            >
                {children}
            </div>
        </div>
    );
}

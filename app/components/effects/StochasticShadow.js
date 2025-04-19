"use client"

import React, { useEffect, useRef, useState, useId } from "react";

export default function StochasticShadow({
    width = "100%",
    pixelArtWidth = 16,
    pixelArtHeight = 16,
    meanHeight = 0.7,
    variability = 0.3,
    blur = 4, // Soft shadow effect
    shadowColor = "rgba(0, 0, 0, 0.1)", // Adjust shadow opacity
    shadowOffsetX = 5, // Horizontal shadow offset
    shadowOffsetY = -20, // Vertical shadow offset
    svgFill = "black", // Fill color for the path
    className = "",
}) {
    const shadowRef = useRef(null);
    const shadowId = useId();
    const [pathData, setPathData] = useState("");
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const updateSize = () => {
            if (shadowRef.current) {
                const width = shadowRef.current.offsetWidth;
                const height = width * (pixelArtHeight / pixelArtWidth);
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
        const discreteHeightUnit = segmentWidth;

        let path = `M0,${containerHeight} L0,0`; // Start at bottom-left, move to top-left

        let prevY = containerHeight; // Track previous y to detect "rising" segments

        for (let i = 0; i <= pixelArtWidth; i++) {
            const x = i * segmentWidth;
            const randomVariation = (Math.random() * 2 - 1) * variability;
            const heightPercentage = Math.max(0, Math.min(1, meanHeight + randomVariation));
            const discreteSteps = Math.floor((containerHeight / discreteHeightUnit) * heightPercentage);
            const y = containerHeight - discreteSteps * discreteHeightUnit;

            if (i < pixelArtWidth) {
                path += ` L${x},${y} L${x + segmentWidth},${y}`;
            } else {
                path += ` L${x},${y}`;
            }

            prevY = y;
        }

        path += ` L${containerWidth},${containerHeight} Z`;
        setPathData(path);
    };

    return (
        <div ref={shadowRef} className={`relative ${className}`} style={{ width, height: containerSize.height || "auto" }}>
            {/* Shadow SVG */}
            <svg
                className="absolute inset-0 w-full h-full"
                viewBox={`0 0 ${containerSize.width} ${containerSize.height}`}
            >
                {/* Define the pixelation filter */}
                <filter id="pixelate" x="0" y="0">
                    <feFlood x="4" y="4" height="2" width="2" />
                    <feComposite width={5} height={5} />
                    <feTile result="a" />
                    <feComposite in="SourceGraphic" in2="a" operator="in" />
                    <feMorphology operator="dilate" radius={2} />
                </filter>

                {/* Shadow version with pixelation */}
                <path
                    d={pathData}
                    fill={shadowColor}
                    filter="url(#pixelate)"
                    transform={`translate(${shadowOffsetX || 4}, ${shadowOffsetY || 4})`}
                />

                {/* Original shape */}
                <path d={pathData} fill={svgFill || "black"} style={
                    {
                        stroke: shadowColor,
                        strokeWidth: 0.5,
                    }
                } />
            </svg>
        </div>
    );
}

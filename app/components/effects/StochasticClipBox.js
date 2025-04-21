"use client";

import React, { useState, useEffect, useRef, useId, useCallback } from "react";

export default function StochasticClipBox({
    width = "100%",
    pixelArtWidth = 16,
    pixelArtHeight = 16,
    meanHeight = 0.7,
    variability = 0.3,
    shadow = false,
    className = "",
    children,
}) {
    const maskRef = useRef(null);
    const maskId = useId();
    const [pathData, setPathData] = useState("");
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
    const resizeObserverRef = useRef(null);

    // Memoized path generation
    const generatePath = useCallback(() => {
        const { width: containerWidth, height: containerHeight } = containerSize;
        if (!containerWidth || !containerHeight) return;

        const segmentWidth = containerWidth / pixelArtWidth;
        const discreteHeightUnit = segmentWidth;
        const heightRange = containerHeight / discreteHeightUnit;

        let path = `M0,${containerHeight} L0,0`;

        // Pre-calculate all random values at once
        const randomValues = Array.from({ length: pixelArtWidth + 1 }, () =>
            Math.max(0, Math.min(1, meanHeight + (Math.random() * 2 - 1) * variability))
        );

        for (let i = 0; i <= pixelArtWidth; i++) {
            const x = i * segmentWidth;
            const discreteSteps = Math.floor(heightRange * randomValues[i]);
            const y = containerHeight - (discreteSteps * discreteHeightUnit);

            if (i < pixelArtWidth) {
                path += ` L${x},${y} L${x + segmentWidth},${y}`;
            } else {
                path += ` L${x},${y}`;
            }
        }

        path += ` L${containerWidth},${containerHeight} Z`;
        setPathData(path);
    }, [containerSize, pixelArtWidth, meanHeight, variability]);

    // Handle resize more efficiently
    useEffect(() => {
        if (!maskRef.current) return;

        const updateSize = () => {
            // Add null check inside the callback too
            if (!maskRef.current) return;

            const width = maskRef.current.offsetWidth;
            const height = width * (pixelArtHeight / pixelArtWidth);

            setContainerSize(prev => {
                if (prev.width === width && prev.height === height) return prev;
                return { width, height };
            });
        };

        let observer = null;

        try {
            observer = new ResizeObserver(updateSize);
            resizeObserverRef.current = observer;
            observer.observe(maskRef.current);
        } catch (error) {
            console.error('ResizeObserver error:', error);
            // Fallback to window resize event if needed
            window.addEventListener('resize', updateSize);
            updateSize(); // Initial call
        }

        return () => {
            // Cleanup both ResizeObserver and fallback
            if (observer) {
                observer.disconnect();
            }
            window.removeEventListener('resize', updateSize);
        };
    }, [pixelArtWidth, pixelArtHeight]);

    // Generate path when dependencies change
    useEffect(() => {
        if (containerSize.width > 0) {
            generatePath();
        }
    }, [containerSize, generatePath]);

    // Only re-render the SVG when pathData changes
    const svgMask = React.useMemo(() => (
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
    ), [containerSize.width, containerSize.height, pathData, maskId]);

    return (
        <div
            ref={maskRef}
            className={`relative ${className}`}
            style={{
                width,
                height: containerSize.height || "auto",
                // Use CSS transforms for better performance
                willChange: 'transform'
            }}
        >
            {svgMask}
            <div
                className="absolute inset-0 w-full h-full"
                style={{
                    mask: `url(#${maskId})`,
                    WebkitMask: `url(#${maskId})`,
                    imageRendering: "pixelated",
                    WebkitImageRendering: "pixelated",
                    // Optimize rendering
                    backfaceVisibility: 'hidden',
                    transform: 'translateZ(0)'
                }}
            >
                {children}
            </div>
        </div>
    );
}

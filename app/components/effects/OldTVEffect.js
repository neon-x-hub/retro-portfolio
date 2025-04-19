"use client";

import React, { useEffect, useRef } from "react";

export default function OldTvEffect() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        let animationFrameId;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();

        // Generate static noise
        const drawNoise = () => {
            const imageData = ctx.createImageData(canvas.width, canvas.height);
            const data32 = new Uint32Array(imageData.data.buffer);
            const alpha = 70 << 24; // Precompute alpha bit-shift

            for (let i = 0; i < data32.length; i++) {
                const val = Math.random() * 255 | 0;
                data32[i] = alpha | (val << 16) | (val << 8) | val; // Set RGBA in one go
            }

            ctx.putImageData(imageData, 0, 0);
        };


        // Draw scanlines
        const drawScanlines = () => {
            ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
            for (let y = 0; y < canvas.height; y += 4) {
                ctx.fillRect(0, y, canvas.width, 1);
            }
        };

        // Draw vignette effect
        const drawVignette = () => {
            const gradient = ctx.createRadialGradient(
                canvas.width / 2,
                canvas.height / 2,
                Math.min(canvas.width, canvas.height) * 0.3,
                canvas.width / 2,
                canvas.height / 2,
                Math.min(canvas.width, canvas.height) * 0.7
            );
            gradient.addColorStop(0, "transparent");
            gradient.addColorStop(1, "rgba(0, 0, 0, 0.4)");

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        };

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawNoise();
            drawScanlines();
            drawVignette();
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        window.addEventListener("resize", resizeCanvas);
        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100dvh',
                zIndex: 9998,
                opacity: 0.5,
                pointerEvents: 'none',
            }}
            suppressHydrationWarning
        />
    );
}

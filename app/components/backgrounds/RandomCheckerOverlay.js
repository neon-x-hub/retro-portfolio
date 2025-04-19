"use client";

import { useEffect, useRef } from 'react'
import { Dialog } from 'radix-ui'

export default function RandomCheckerOverlay() {
    const canvasRef = useRef(null);
    // Define the shades of gray to use in the checkerboard pattern
    const GRAY_SHADES = ['#333', '#555', '#777', '#bbb'];

    // Function to draw the checkerboard pattern using Fisher-Yates shuffle
    const drawCheckerboard = (grayShades = ['#333', '#bbb']) => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const squareSize = 30;

        // Calculate exact number of squares needed
        const cols = Math.ceil(canvas.width / squareSize);
        const rows = Math.ceil(canvas.height / squareSize);

        // Create an array of all positions in order
        const positions = [];
        for (let y = 0; y < rows; y++) {
            for (let x = 0; x < cols; x++) {
                positions.push({ x: x * squareSize, y: y * squareSize });
            }
        }

        // Properly shuffle the array using Fisher-Yates algorithm
        for (let i = positions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [positions[i], positions[j]] = [positions[j], positions[i]];
        }

        let index = 0;

        const fillNextPixel = () => {
            const MAX_DELAY = 50;
            const MIN_DELAY = 0;

            if (index >= positions.length) return;

            const { x, y } = positions[index];
            const randomShade = grayShades[Math.floor(Math.random() * grayShades.length)];

            ctx.fillStyle = randomShade;
            ctx.fillRect(x, y, squareSize, squareSize);

            index++;

            setTimeout(fillNextPixel, MIN_DELAY + Math.random() * MAX_DELAY);
        };

        fillNextPixel();
    };


    // UseEffect to handle drawing the checkerboard when the component mounts
    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drawCheckerboard(GRAY_SHADES);
    }, []);
    return (
        <Dialog.Overlay className='fixed inset-0 opacity-60 backdrop-blur-2xl'>

            <canvas
                ref={canvasRef}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                }}
            />

        </Dialog.Overlay>
    )
}

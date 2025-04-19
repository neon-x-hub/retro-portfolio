import React from "react";

const StarrySky = ({ count = 100 }) => {
    // Generate random star positions and sizes
    const stars = Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: `${Math.random() * 3 + 1}px`, // Random size between 1-4px
        opacity: Math.random() * 0.7 + 0.3 // Random opacity between 0.3-1
    }));

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                pointerEvents: 'none',
                overflow: 'hidden',
                opacity: 0.4
            }}
        >
            {stars.map(star => (
                <div
                    key={star.id}
                    style={{
                        position: 'absolute',
                        left: star.left,
                        top: star.top,
                        width: star.size,
                        height: star.size,
                        backgroundColor: 'black',
                        opacity: star.opacity,
                    }}
                />
            ))}
        </div>
    );
};

export default StarrySky;

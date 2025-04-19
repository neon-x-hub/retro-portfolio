"use client";

import React, { useState, useEffect, memo } from 'react';
import { ReactFlow, Background, useReactFlow } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { nodeTypes as FlowNodeTypes } from '@/app/lib/utils/FlowNodeTypes';

import { initialEdges, initialNodes } from './initials';

function FlowComponent() {
    const { setCenter } = useReactFlow();
    const [showInstruction, setshowInstruction] = useState(true)

    // Handle the setCenter logic with a timeout for optimization
    useEffect(() => {
        const timer = setTimeout(() => {
            setCenter(0, 0, { zoom: 1 });
            setshowInstruction(false)
        }, 100);

        return () => clearTimeout(timer);
    }, [setCenter]);

    return (
        <div className="absolute top-0 left-0 -z-1" style={{ width: '100vw', height: '100dvh' }}>
            {showInstruction && <div className="w-full h-full absolute top-1/2 left-1/2 -translate-1/2 font-bold z-100 flex items-center justify-center bg-gray-600 opacity-80 text-white text-4xl text-center flex-col">
                Scroll and Discover skills!
                <span className='text-xl'>Loading the Map...</span>
            </div>}
            <ReactFlow
                nodes={initialNodes}
                edges={initialEdges}
                nodeTypes={FlowNodeTypes}
                snapToGrid={true}
                snapGrid={[50, 50]}
                fitView
                fitViewOptions={{ padding: 0.5 }}
                defaultEdgeOptions={{
                    animated: true,
                    style: {
                        stroke: '#ff0072',
                        strokeWidth: 4,
                    },
                }}
            >
                <MemoizedBackground variant="cross" gap={15} size={4} />
            </ReactFlow>
        </div>
    );
}

// Memoize the Background to prevent unnecessary re-renders
const MemoizedBackground = memo(Background);

export default FlowComponent;

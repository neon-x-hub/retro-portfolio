import { ReactFlowProvider } from "@xyflow/react";
import FlowComponent from "../../flow/FlowComponent";
import { Suspense } from "react";


export default function SkillTree() {
    return (
        <ReactFlowProvider>
            <Suspense fallback={<div className='w-full h-full absolute top-1/2 left-1/2 -translate-1/2 font-bold'>Loading Flow...</div>}>
                <FlowComponent />
            </Suspense>
        </ReactFlowProvider>
    );
}

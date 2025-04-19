import M_NODES from '@/app/lib/data/m_nodes';
import M_EDGES from '@/app/lib/data/m_edges.json'
import S_NODES from '@/app/lib/data/s_nodes';
import S_EDGES from '@/app/lib/data/s_edges.json'

const initialNodes = [
    {
        id: '1',
        type: 'diamond',
        position: { x: -80, y: 0 },
        data: {
            label: 'Creative Synthesis',
            description: 'Where Logic, Beauty, and Soul meet',
        },
        draggable: false,
    },


    // Mind Realm
    { id: 'm-head', type: 'hex', position: { x: -60, y: 250 }, data: { label: 'Mind Realm', description: 'Software Engineering' }, draggable: false },
    ...M_NODES,

    // Soul Realm
    { id: 's-head', type: 'hex', position: { x: -60, y: -250 }, data: { label: 'Soul Realm', description: 'Digital Design' }, draggable: false },
    ...S_NODES,
];


const initialEdges = [
    // Synthesis to Realms

    {
        id: "e1-m-head",
        source: "1",
        target: "m-head",
        sourceHandle: "left",
        targetHandle: "top-target",
        type: "step"
    },
    {
        id: "e1-s-head",
        source: "1",
        target: "s-head",
        sourceHandle: "right",
        targetHandle: "bottom-target",
        type: "step"
    },

    // Mind Realm to Main topics
    // Mind to SE
    {
        id: "em-head-2-1",
        source: "m-head",
        target: "2-1",
        sourceHandle: "bottom",
        targetHandle: "top-target",
        type: "step"
    },
    // to SP
    {
        id: "em-head-2-2",
        source: "m-head",
        target: "2-2",
        sourceHandle: "bottom-left",
        targetHandle: "right-target",
        type: "step"
    },
    // to WebDev
    {
        id: "em-head-2-3",
        source: "m-head",
        target: "2-3",
        sourceHandle: "bottom-right",
        targetHandle: "left-target",
        type: "step"
    },
    // to ML
    {
        id: "em-head-2-4",
        source: "m-head",
        target: "2-4",
        sourceHandle: "top-right",
        targetHandle: "left-target",
        type: "step"
    },
    // to DB
    {
        id: "em-head-2-5",
        source: "m-head",
        target: "2-5",
        sourceHandle: "top-left",
        targetHandle: "right-target",
        type: "step"
    },
    // to DSO
    {
        id: "em-head-2-6",
        source: "m-head",
        target: "2-6",
        sourceHandle: "bottom",
        targetHandle: "top-target",
        type: "step"
    },
    // to CS
    {
        id: "em-head-2-7",
        source: "m-head",
        target: "2-7",
        sourceHandle: "bottom",
        targetHandle: "top-target",
        type: "step"
    },
    // to DS
    {
        id: "em-head-2-8",
        source: "m-head",
        target: "2-8",
        sourceHandle: "top-left",
        targetHandle: "right-target",
        type: "step"
    },
    // to Archi
    {
        id: "em-head-2-9",
        source: "m-head",
        target: "2-9",
        sourceHandle: "bottom-right",
        targetHandle: "top-target",
        type: "step"
    },
    // to GP
    {
        id: "em-head-2-10",
        source: "m-head",
        target: "2-10",
        sourceHandle: "top-right",
        targetHandle: "left-target",
        type: "step"
    },
    // to Net&VMs
    {
        id: "em-head-2-12",
        source: "m-head",
        target: "2-12",
        sourceHandle: "top-left",
        targetHandle: "right-target",
        type: "step"
    },
    {
        id: "em-head-2-11",
        source: "m-head",
        target: "2-11",
        sourceHandle: "bottom-right",
        targetHandle: "top-target",
        type: "step"
    },



    ...M_EDGES,

    // Soul Realm edges
    // Soul Realm to Main topics
    {
        id: "es-head-3-1-1",
        source: "s-head",
        target: "3-1-1",
        sourceHandle: "top-right",
        targetHandle: "bottom-target",
        type: "step"
    },
    {
        id: "es-head-3-1-2",
        source: "s-head",
        target: "3-1-2",
        sourceHandle: "top-left",
        targetHandle: "bottom-target",
        type: "step"
    },
    {
        id: "es-head-3-2",
        source: "s-head",
        target: "3-2",
        sourceHandle: "top",
        targetHandle: "bottom-target",
        type: "step"
    },
    ...S_EDGES,
    // Inter Realms Relations
    //GLSL - TA
    {
        id: "2-10-1-3-0-2",
        source: "2-10-1",
        target: "3-0-2",
        sourceHandle: "right-source",
        targetHandle: "right-target",
        type: "step"
    },
    {
        id: "3-0-2-3-1-2-2",
        source: "3-0-2",
        target: "3-1-2-2",
        sourceHandle: "left-source",
        targetHandle: "top-target",
        type: "step"
    },



];


export {initialEdges, initialNodes}

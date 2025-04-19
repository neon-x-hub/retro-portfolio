const fs = require('fs');

const S_NODES = [
    // ========================
    // 3-1-1: Arabic Calligraphy
    // ========================
    {
        id: '3-1-1',
        type: 'normal',
        position: { x: 150, y: -450 },
        data: {
            label: 'Arabic Calligraphy',
            details: ["Historical Styles", "Organic Forms"]
        }
    },

    // 3-1-1-1: Writing Styles (Parent: Arabic Calligraphy)
    {
        id: '3-1-1-1',
        type: 'normal',
        position: { x: 500, y: -500 },
        data: {
            label: 'Writing Styles',
            details: ["Naskh", "Thuluth", "Diwani", "Kufic", "Riqa", "Farisi"]
        }
    },

    // 3-1-1-2: Techniques (Parent: Arabic Calligraphy)
    {
        id: '3-1-1-2',
        type: 'normal',
        position: { x: 350, y: -650 },
        data: {
            label: 'Techniques',
            details: ["Penmanship", "Proportions", "Illumination", "Embossing"]
        }
    },

    // 3-1-1-3: Applications (Parent: Arabic Calligraphy)
    {
        id: '3-1-1-3',
        type: 'normal',
        position: { x: 50, y: -700 },
        data: {
            label: 'Applications',
            details: ["Logo Design", "Architectural Calligraphy", "Digital Calligraphy"]
        }
    },

    // ========================
    // 3-1-2: Graphic Design
    // ========================
    {
        id: '3-1-2',
        type: 'normal',
        position: { x: -350, y: -450 },
        data: {
            label: 'Graphic Design',
            details: ["Digital Tools", "Functional Design"]
        }
    },

    // 3-1-2-1: UI/UX Design (Parent: Graphic Design)
    {
        id: '3-1-2-1',
        type: 'normal',
        position: { x: -650, y: -400 },
        data: {
            label: 'UI/UX Design',
            details: ["Figma", "Adobe XD", "Wireframing", "Prototyping"]
        }
    },

    // 3-1-2-2: 3D Design (Parent: Graphic Design)
    {
        id: '3-1-2-2',
        type: 'normal',
        position: { x: -650, y: -600 },
        data: {
            label: '3D Design & Modeling',
            details: ["Blender", "Cinema 4D", "Texturing", "Rendering"]
        }
    },

    // 3-1-2-3: Vector Design (Parent: Graphic Design)
    {
        id: '3-1-2-3',
        type: 'normal',
        position: { x: -350, y: -700 },
        data: {
            label: 'Vector Design',
            details: ["Illustrator", "Inkscape", "SVG Animation"]
        }
    },
    // 3-1-2-4: Game Design (Parent: Graphic Design)
    {
        id: '3-1-2-4',
        type: 'normal',
        position: { x: -600, y: -250 },
        data: {
            label: 'Game Design',
            details: ["Map Design", "Game UI"]
        }
    },
    // 3-2: Art & Drawing
    {
        id: '3-2',
        type: 'normal',
        position: { x: -100, y: -500 },
        data: {
            label: 'Art & Drawing',
            details: ["Hand Sketching", "Digital Drawing", "Character design", "Character Design", "Storyboarding", "Pixel Art"]
        }
    },

    // ========================
    // 3-0: Optional Meta-normals (Cross-cutting)
    // ========================
    {
        id: '3-0-1',
        type: 'normal',
        position: { x: -150, y: -900 },
        data: {
            label: 'Typography & Font Design',
            details: ["Type Anatomy", "Kerning", "Multilingual Fonts"]
        }
    },
];
// Your nodes array here (or load from a separate file)
const nodes = S_NODES;

// Map short handle letters to real handle names
const handleMap = {
    r: 'right',
    l: 'left',
    t: 'top',
    b: 'bottom',
};

// Read your txt file
const lines = fs.readFileSync('s_edges.txt', 'utf-8')
    .split('\n')
    .filter(Boolean);

const edges = [];

lines.forEach((line) => {
    line = line.trim();

    const lastParenIndex = line.lastIndexOf('(');
    const handlePartRaw = line.slice(lastParenIndex + 1, line.length - 1); // without ()
    const left = line.slice(0, lastParenIndex).trim();

    const [sourceLabel, targetLabel] = left.split(' - ').map(x => x.trim());
    const [sourceHandleKey, targetHandleKey] = handlePartRaw.split('-');

    const sourceNode = nodes.find(n => n.data.label === sourceLabel);
    const targetNode = nodes.find(n => n.data.label === targetLabel);

    if (!sourceNode || !targetNode) {
        console.warn(`Couldn't find node for: ${line}`);
        return;
    }

    edges.push({
        id: `e${sourceNode.id}-${targetNode.id}`,
        source: sourceNode.id,
        target: targetNode.id,
        sourceHandle: `${handleMap[sourceHandleKey]}-source`,
        targetHandle: `${handleMap[targetHandleKey]}-target`,
        type: 'step'
    });
});

// Write to file
fs.writeFileSync('s_edges.json', JSON.stringify(edges, null, 2));

console.log('Done! Check output.json');

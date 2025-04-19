/**
 * Visual Design & Artistry normal Graph
 * Root: 3-1 (Visual Design & Artistry)
 * normales: 3-1-1 (Arabic Calligraphy), 3-1-2 (Graphic Design)
 * Meta-normals: 3-0-x (Optional cross-cutting normals)
 */
const
    S_NODES = [
        // ========================
        // 3-1-1: Arabic Calligraphy
        // ========================
        {
            id: '3-1-1',
            type: 'normal',
            position: { x: 150, y: -450 },
            data: {
                label: 'Arabic Calligraphy',
                details: ["Historical Styles", "Organic Forms", "Spiritual Dimension", "Modern Adaptations"],
                favourites: [1, 1, 0, 1],
                story: "Historical Styles are my connection to centuries of art. Organic Forms remind me that even letters can dance. The Spiritual Dimension is where ink meets soul. Modern Adaptations prove tradition can wear new clothes."
            }
        },
        {
            id: '3-1-1-1',
            type: 'normal',
            position: { x: 500, y: -500 },
            data: {
                label: 'Writing Styles',
                details: ["Naskh", "Thuluth", "Diwani", "Kufic", "Riqa", "Farisi", "Maghrebi", "Tughra"],
                favourites: [1, 1, 0, 1, 0, 0, 1, 0],
                story: "Naskh is my daily handwriting on spiritual steroids. Thuluth is the dramatic opera of scripts. Kufic is geometry masquerading as writing. Diwani is so fancy it needs its own royal decree. Maghrebi is the underrated cousin with beautiful curves."
            }
        },
        {
            id: '3-1-1-2',
            type: 'normal',
            position: { x: 350, y: -650 },
            data: {
                label: 'Techniques',
                details: ["Penmanship", "Proportions", "Illumination", "Embossing", "Gold Leaf", "Paper Preparation", "Ink Making"],
                favourites: [1, 1, 1, 0, 1, 0, 0],
                story: "Penmanship is where patience meets perfection. Proportions are the secret math behind beauty. Illumination is how we make words shine. Gold Leaf is my excuse to play with precious metals. Ink Making is alchemy for artists."
            }
        },

        // 3-1-1-3: Applications (Parent: Arabic Calligraphy)
        {
            id: '3-1-1-3',
            type: 'normal',
            position: { x: 50, y: -700 },
            data: {
                label: 'Applications',
                details: ["Logo Design", "Architectural Calligraphy", "Digital Calligraphy", "Book Design", "Street Art", "Textile Patterns"],
                favourites: [1, 1, 0, 1, 0, 1],
                story: "Logo Design is where tradition meets branding. Architectural Calligraphy makes buildings whisper poetry. Digital Calligraphy is my iPad's spiritual journey. Book Design keeps manuscripts alive in the 21st century. Textile Patterns make fashion speak Arabic."
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
                details: ["Digital Tools", "Functional Design", "Client Revisions", "Creative Block"],
                favourites: [1, 1, 0, 0],
                story: "Digital Tools are just expensive ways to make circles. Functional Design is my excuse when clients say 'make it pop'. Client Revisions are where good designs go to die. Creative Block is my brain's favorite screensaver."
            }
        },
        {
            id: '3-1-2-1',
            type: 'normal',
            position: { x: -650, y: -400 },
            data: {
                label: 'UI/UX Design',
                details: ["Figma", "Adobe XD", "Wireframing", "Prototyping", "User Testing", "Design Systems"],
                favourites: [1, 0, 1, 1, 0, 0],
                story: "Figma is where I move rectangles for money. Adobe XD is Figma's less cool cousin. Wireframing is my 'artistic' stick figures. Prototyping is how I fake functionality. User Testing is where my ego goes to die."
            }
        },
        {
            id: '3-1-2-2',
            type: 'normal',
            position: { x: -650, y: -600 },
            data: {
                label: '3D Design & Modeling',
                details: ["Blender", "Cinema 4D", "Texturing", "Rendering", "UV Mapping", "Rigging"],
                favourites: [1, 0, 1, 0, 0, 0],
                story: "Blender is free but costs my sanity. Cinema 4D is for when I want to sell a kidney. Texturing is where I pretend to understand materials. UV Mapping is origami for masochists. Rendering is my computer's way of getting revenge."
            }
        },

        // 3-1-2-3: Vector Design (Parent: Graphic Design)
        {
            id: '3-1-2-3',
            type: 'normal',
            position: { x: -350, y: -700 },
            data: {
                label: 'Vector Design',
                details: ["Illustrator", "Inkscape", "SVG Animation", "Vector Illustration", "Logo Design"],
                favourites: [1, 0, 1, 1, 0],
                story: "Illustrator is where I fight the Pen Tool daily. Inkscape is for when I'm feeling open-source virtuous. SVG Animation is how I make logos do backflips. Vector Illustration is my 'I can zoom forever' power trip. Logo Design is 99% client revisions and 1% actual design."
            }
        },
        {
            id: '3-1-2-4',
            type: 'normal',
            position: { x: -600, y: -250 },
            data: {
                label: 'Game Design',
                details: ["Map Design", "Game UI", "Unity Integration", "Game Assets"],
                favourites: [1, 1, 0, 0],
                story: "Map Design is where I create worlds I'll never code properly. Game UI is just distracting players from bugs. Unity Integration is where art goes to die in the engine. Game Assets are my collection of unused 3D models."
            }
        },
        {
            id: '3-2',
            type: 'normal',
            position: { x: -100, y: -500 },
            data: {
                label: 'Art & Drawing',
                details: ["Hand Sketching", "Digital Drawing", "Character Design", "Storyboarding", "Pixel Art", "Procreate"],
                favourites: [1, 1, 1, 0, 1, 0],
                story: "Hand Sketching is my excuse for bad linework. Digital Drawing is undo addiction. Character Design is creating OCs for games I'll never make. Storyboarding is stick figures with delusions of grandeur. Pixel Art is where I pretend 8-bit is an artistic choice, not a limitation."
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
                details: ["Type Anatomy", "Kerning", "Multilingual Fonts", "Variable Fonts", "Font Pairing"],
                favourites: [1, 1, 0, 1, 0],
                story: "Type Anatomy is my excuse to say 'x-height' in casual conversation. Kerning is where I develop OCD one letter pair at a time. Multilingual Fonts are my Tower of Babel moment. Variable Fonts are black magic wrapped in CSS. Font Pairing is my 'will they, won't they' romance novel."
            }
        },
        {
            id: '3-0-2',
            type: 'normal',
            position: { x: -150, y: -1100 },
            data: {
                label: 'Technical Art',
                details: [
                    "Shaders & GPU Programming",
                    "Procedural Generation",
                    "Rendering Pipelines",
                    "Visual Effects (VFX) Systems",
                    "Engine Customization (Graphics Side)",
                    "3D Asset Integration & Optimization"
                ],
                favourites: [1, 1, 0, 1, 0, 1],
                story: "Shaders are where I make math look pretty. Procedural Generation is my excuse for being lazy with content. Rendering Pipelines are my 'how many passes until it looks good?' game. VFX Systems are just organized chaos. Engine Customization is how I break things professionally. And 3D Asset Optimization... oh my sweet, sweet forbidden love - the art of programming things look good for the engine (my tiny universe)."
            }
        },
    ];

export default S_NODES;

const CHAPTERS = [
    {
        id: 1,
        name: "1: The Spawn Point - Algeria, 2005",
        details: "Character created on March 28, 2005. Starting zone: a modest Algerian household. No internet connection unlocked, but the 'Family Computer' relic was present. Tutorial NPCs (parents) provided basic survival stats. First achievement: 'Cry for Supplies.'"
    },
    {
        id: 2,
        name: "2: The Offline Gamer Era",
        details: "No Wi-Fi buffs—just physical game discs bought from local merchants. Installed every .exe like a sacred ritual. Developed +10 Patience from swapping CDs and troubleshooting compatibility issues. Secretly unlocked the 'What’s Inside the Machine?' curiosity trait."
    },
    {
        id: 3,
        name: "3: The Anti-Grass-Touch Meta",
        details: "Rejected the 'Play Outside' side quests favored by other NPC kids. Preferred solo grinding on the PC, but social stats were oddly high—could chat with adults without the 'Awkward Silence' debuff. Guild (family) approved."
    },
    {
        id: 4,
        name: "4: The First Glitch in the Matrix",
        details: "Noticed games didn’t just *exist*—they were *made*. Started obsessing over 'How?' instead of just 'Play.' The 'Game Dev' skill tree flickered into view, though the 'Programming' node was still locked. Bought a pirated copy of RPG Maker; the universe trembled."
    },
    {
        id: 5,
        name: "5: The Forbidden LAN - Cousins' House",
        details: "Discovered a hidden zone: the cousins' house, where the mythical 'Internet Connection' relic hummed. Dial-up sounds = boss battle music. Spent hours studying this digital beast—how did it make YouTube videos appear? Why did 'Google' know everything? The 'Question Everything' debuff became permanent."
    },
    {
        id: 6,
        name: "6: The Parental Side Quest - 'Get First Honors'",
        details: "A high-stakes negotiation: 'Bring home top grades, and we’ll unlock the Internet skill tree.' Grinded the 'School' dungeon for XP. Final boss: 'Math Exam.' Victory! Reward: a shaky Wi-Fi connection and a destiny-altering buff: '+100% Curiosity.'"
    },
    {
        id: 7,
        name: "7: The Data Glutton Era",
        details: "Consumed programming tutorials like a starved NPC. Learned to speak in CMD incantations—`ipconfig`, `ping`, `tree`. Unlocked 'TUI Sorcery' and hacked the family PC (changed wallpapers, hid folders). Parents feared the 'Command Prompt' screen; I saw a cathedral."
    },
    {
        id: 8,
        name: "8: Noob to (Script) Kiddie",
        details: "Boldly deleted System32 (to 'see what happens'). Survived the crash. Wrote batch scripts to annoy siblings (infinite pop-up loops). The 'I Have No Idea What I’m Doing' achievement earned. The machine whispered back—I listened."
    },
    {
        id: 9,
        name: "9: The Artist’s Bloodline",
        details: "Genetic loot drop: +50% Artistry from Mother (painter) + Uncle (calligraphy master). No 'tutorial' needed—inked Arabic glyphs like a scribe and sketched with inherited precision. The 'Aesthetic Sense' passive buff blended oddly well with the 'Machine Logic' skill tree. The NPCs (teachers) whispered: 'He’s a bard... but for computers?'"
    },
    {
        id: 10,
        name: "10: The C++ Awakening",
        details: "Internet access = unlocked 'Arabic C++ Tutorials' DLC. Parents panicked as I chanted `#include <iostream>` instead of prayers. Their fear debuff ('Grades Will Drop!') was countered by my 'Academic Overachiever' trait. Memory leaks? More like memory *dominion*. The first `std::cout << 'I rule this realm';` compiled—a god complex bloomed."
    },
    {
        id: 11,
        name: "11: Dev Vision Activated",
        details: "Games transformed from 'magic' to 'machinery.' I dissected sprites like a surgeon, reverse-engineered jump physics, and glared at loading screens thinking, 'I could optimize this.' The 'Player' class was deprecated; I was now a 'Creator.' Even Minecraft redstone felt like child’s play."
    },
    {
        id: 12,
        name: "12: The First Build",
        details: "Combined art and code—a pixel-art RPG with a `while(true)` loop and handmade assets. The family PC groaned. My uncle smiled at the Arabic UI; my mother gasped at the art; my father pretended to understand the code. Achievement unlocked: 'Proof of Concept.' The endgame was clear: I’d either ship a game... or conquer the stack overflow."
    },
    {
        id: 13,
        name: "13: The Middle School Boss Fight - Failed Loot Drop",
        details: "Final exam battle report: Victory, but no 'Top Marks' bonus. Reward: 'The Family PC (Legacy Edition)' remained my loyal companion. Parents muttered about 'potential,' but I’d already respawned with a new quest: 'Browser Domination.' The 'Personal Computer' side quest was postponed—not abandoned."
    },
    {
        id: 14,
        name: "14: HTML/CSS - The Gateway Drug",
        details: "Discovered the `<div>` and `#id` scrolls. Built pixel-perfect layouts with `float: left` sorcery (RIP). CSS animations felt like cheating reality. The browser’s 'Inspect Element' became my debugger—suddenly, every website was a sandbox. Achievement: 'View-Source Archaeologist.'"
    },
    {
        id: 15,
        name: "15: JavaScript - The Power Unlocked",
        details: "`document.getElementById('life').innerHTML = 'Changed';`—my first spell. ES5’s `var` haunted me, but I tamed it. Wrote a calculator app; it crashed if you divided by zero (a metaphor for life). The 'Console Warrior' title earned (+5 arrogance, +10 problem-solving)."
    },
    {
        id: 16,
        name: "16: PHP - The Abandoned Dungeon",
        details: "Touched the `<?php ?>` realm. Fought the 'MySQLi Dragon' for three days. Realized I’d rather `console.log()` than `echo`. The 'Nope' achievement unlocked as I yeeted PHP into the deprecated abyss. SQL survived—barely—as a 'necessary evil.'"
    },
    {
        id: 17,
        name: "17: The Fullstack Revelation",
        details: "Frontend? Mastered. Backend? A necessary chore. My brain now parsed the world in JSON: `{ 'success': true, 'nextQuest': 'ChooseFramework' }`. The family PC wheezed under Chrome tabs. I whispered, 'Soon, I’ll build my own rig… with blackjack and React.'"
    },
    {
        id: 18,
        name: "18: The .NET Mirage",
        details: "For a brief, shimmering moment, C# and .NET whispered promises of 'enterprise-grade power.' I installed Visual Studio—it demanded 50GB of sacrifices. Wrote a 'Hello World' that required 17 DLLs. Realized I’d swapped PHP’s chaos for Microsoft’s cathedral. The 'Ctrl+Alt+Delete' achievement unlocked as I nuked the IDE."
    },
    {
        id: 19,
        name: "19: React - The Love at First Render",
        details: "Discovered `npm start` and never looked back. JSX felt like cheating—HTML in my JavaScript? Blasphemy turned gospel. Built a todo app that mutated state like a quantum particle. Parents asked if I was 'hacking the Matrix' (I nodded). PHP’s `echo` now seemed as ancient as hieroglyphs."
    },
    {
        id: 20,
        name: "20: The Backend Betrayal",
        details: "React’s dirty secret: it couldn’t talk to databases. 'Wait, I need *another* language?!' Node.js emerged from the npm shadows. `require('fs')` replaced PHP’s `file_get_contents()` like a silent coup. Wrote a REST API that crashed if you sneezed. Progress."
    },
    {
        id: 21,
        name: "21: MongoDB - The Schemaless Rebellion",
        details: "Tables? Relationships? SQL’s tyranny was over. I embraced JSON-in-JSON-out chaos. `db.collection.insertOne({ sanity: 0 })`. Built a 'social network' where users could literally `$push` nonsense into arrays. The 'NoSQL Evangelist' title gained (+10 scalability debates, -5 job offers at banks)."
    },
    {
        id: 22,
        name: "22: Full-Stack JavaScript - The Apex Predator",
        details: "Frontend: React. Backend: Node. Database: MongoDB. The holy trinity. Deployed a MERN app to Heroku—it died in 7 minutes. 'Process exited with status 137' became my epitaph. I laughed, tweaked `webpack.config.js`, and tried again. The machine obeyed. Finally, I spoke its language fluently: JavaScript, from `<script>` to `pm2 restart`."
    },
    {
        id: 23,
        name: "23: The CI/CD Pipeline - A New Map Unlocked",
        details: "Discovered that code doesn’t just ‘run’—it gets *orchestrated*. Jenkinsfiles looked like alien scrolls, YAML pipelines felt like IKEA instructions, and ‘Dockerizing’ my app made it immortal (and slightly obese). I whispered, ‘git push’ and suddenly servers trembled. But then… a seismic event."
    },
    {
        id: 24,
        name: "24: The High School Final Boss - ‘BAC’",
        details: "A level 99 exam spawned. The ‘Brevet d’Accès au Chaos’ (BAC)—Algeria’s academic raid. Parents activated ‘Ultimate Worry Mode.’ My ‘Code’ skill tree greyed out. The ‘All-Nighter’ potion stacked to dangerous levels. Even `sudo rm -rf /*` seemed less terrifying than failing."
    },
    {
        id: 25,
        name: "25: The Strategic Retreat",
        details: "Temporarily despawned from the tech realm. GitHub contributions flatlined. My IDE collected dust. Instead: math drills, cursive handwriting (why?), and memorizing What Hitler did in his free time. The ‘Scholar’ persona—+100 stress resistance, -90% fun. A necessary evil."
    },
    {
        id: 26,
        name: "26: The Post-BAC Resurrection",
        details: "BOSS DEFEATED. Results screen: ‘I may now proceed to adulthood.’ The ‘Internet Cutscene’ ended. I respawned in my room, fingers twitching over the keyboard. The unfinished CI/CD tutorial tab still glared at me. Time to `git commit -m \"I’m back, losers.\"`"
    },
    {
        id: 27,
        name: "27: The Ultimate Reward - Beast PC + NHSAI",
        details: "BAC victory loot: A **gaming rig** worthy of my code (RTX? SSD? RGB for +10% performance). The 'NHSAI' faction recruited me—Algeria’s elite AI guild. Parents’ social status upgraded to 'Proud NPCs.' Meanwhile, my old nemesis, C++, lurked in the shadows, whispering, 'You thought you’d escaped me?'"
    },
    {
        id: 28,
        name: "28: First Year - AI Grind & C++’s Revenge",
        details: "NHSAI’s curriculum hit like a `segfault`: linear algebra, Python for ML, and… **C++ for high-performance computing**. My past skills resurfaced—pointers, memory management, all the old pain. Classmates struggled; 'School chores' became side quests. Easy mode."
    },
    {
        id: 29,
        name: "29: The Scholarship Near-Miss",
        details: "Prepped for the 'Study Abroad' DLC like a speedrunner. Aced interviews, but the final boss ('Committee RNG') crit-failed me. The rejection email: 'You were so close.' For a moment, `motivation--;`. Then I `git reset --hard` and plotted revenge. The grind would continue."
    },
    {
        id: 30,
        name: "30: The Dual Identity",
        details: "By day: NHSAI’s 'AI Apprentice.' By night: A C++ warlord writing custom allocators 'for fun.' My GitHub glowed with repos named 'abandoned-optimization-experiment.' The family PC, now retired, saluted me from its corner. The next quest? 'Conquer TensorFlow' or 'Build a From-Scratch Neural Net.' My choice."
    },
    {
        id: 31,
        name: "31: The Unfinished Map - Beyond the Mountain",
        details: "NHSAI’s AI focus couldn’t contain my hunger. I ventured into the **forgotten realms of Software Engineering**: dusty tomes on systems design, CI/CD grimoires, and the arcane arts of containers. `docker-compose up` became my morning mantra. Kubernetes clusters? Just ‘fancy process managers.’ The mountain was now my playground."
    },
    {
        id: 32,
        name: "32: The Language Collector",
        details: "Golang: Loved its `go fmt` dictatorship. Rust: Fell hard for its ‘compile-time exorcisms.’ Wrote a CLI tool in both just to benchmark my own suffering. Realized C++ was the abusive ex I still texted at 3AM for ‘performance reasons.’ Meanwhile, Python (NHSAI’s mandated tongue) sighed in the corner."
    },
    {
        id: 33,
        name: "33: The Database Epiphany",
        details: "Hussein Nasser’s YouTube aura unlocked ‘DBMS Curiosity.’ PostgreSQL’s internals? Fascinating. MySQL’s quirks? Hilarious. Then—**Karim Lounis’ OS lectures struck like lightning**. ‘What if I built my OWN database?’ I mused. `CREATE TABLE bad_ideas (id SERIAL, ambition TEXT);`"
    },
    {
        id: 34,
        name: "34: ExpanDB - The 19-Year-Old’s Gambit",
        details: "A weekend hack snowballed. First, a B-tree in Rust. Then, a wire protocol. Soon, a ‘distributed’ promise (read: 2 containers gossiping). I open-sourced it with a README.md longer than my thesis. A Silicon Valley startup’s CTO slid into my DMs: ‘How’s your visa status?’ I replied: ‘I’m still in undergrad.’ Hired at 19. The DB license got closed for now, but for its own good."
    },
    {
        id: 35,
        name: "35: The Dual Life",
        details: "By day: NHSAI student nodding at backpropagation. By night: **ExpanDB’s ‘Principal Engineer’** debugging raft consensus at 3AM.’ My parents googled ‘What is a distributed database?’ My old family PC, now a Kubernetes node, hummed approvingly."
    },
    {
        id: 36,
        name: "36: The 95% Mastery - 'The Map’s Edge'",
        details: "My skill tree now glows: **full-stack dev, systems architect, database whisperer, AI researcher**. The remaining 5%? Quantum computing? Formal verification? Or just the humility to say 'I don’t know.' I smirk—'Hard mode is the only mode.'"
    },
    {
        id: 37,
        name: "37: The Artist’s Reawakening - GLSL Sorcery",
        details: "A late-night shader experiment reignited old passions. Wrote fragment shaders that made screens weep rainbows. My GitHub bio now read: 'Artist trapped in an engineer’s body.' But Algeria’s digital revolution wouldn’t paint itself—I saved 'art mode' for weekends."
    },
    {
        id: 38,
        name: "38: The Art of War (Against Tech Debt)",
        details: `Algeria’s digital landscape is a **legacy codebase** with 60-year-old comments in French. I refactor it with:
        - **Rust-powered utilities** (no more ‘power cuts’ in code).
        - **Decentralized education** (GitHub > outdated universities).
        - **My secret weapon**: A generation of devs who’d rather \`fork()\` than beg for visas.
        The compile-time? Unknown. The target platform? **A nation’s nervous system.**`
    },
    {
        id: 39,
        name: "39: [REDACTED]",
        details: `This chapter compiles only at runtime. Possible outputs:
        - \`SUCCESS\`: My systems become Algeria’s **digital spine**.
        - \`FAILURE\`: I pivot to selling **artisanal NFTs of desert algorithms**.
        - \`UNKNOWN\`: The dream mutates. The game was never just code.
        I type \`./configure --prefix=/usr/local/algeria\` and hit Enter.`
    }
];


export default CHAPTERS;

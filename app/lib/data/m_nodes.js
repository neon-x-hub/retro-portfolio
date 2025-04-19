/**
 * Inverted Dependency Graph Nodes (Technologies + Concepts)
 * Format:
 *   - Parent: '2-x' (e.g., '2-1' for Software Engineering)
 *   - Child:  '2-x-y' (e.g., '2-1-1' for Programming)
 *   - Leaf:   '2-x-y-z' (e.g., '2-1-1-1' for Algorithms)
 *   - Technologies stored in `data.details` arrays.
 */
const M_NODES = [
    // ========================
    // 2-1: Software Engineering
    // ========================
    {
        id: '2-1',
        type: 'normal',
        position: { x: -100, y: 600 },
        data: {
            label: 'Software Engineering',
            details: ["SDLC", "Agile", "CI/CD", "Design Patterns", "Code Reviews", "Technical Debt"],
            favourites: [1, 0, 1, 1, 0, 1],
            story: "SDLC is the circle of life for code. Agile is how we pretend to be organized while actually winging it. CI/CD is my excuse to break production faster. Design Patterns are just fancy ways to over-engineer hello world. Technical Debt is my gift to future me (sorry future me)."
        }
    },

    // 2-1-1: Programming (Parent: Software Engineering)
    {
        id: "2-1-1",
        type: "normal",
        position: { x: -100, y: 850 },
        data: {
            label: "Programming",
            details: ["JavaScript", "Rust", "C++", "Go", "Python", "Java"],
            favourites: [1, 1, 1, 0, 0, 0],
            story: "I learned JavaScript to make websites blink like it’s 1999. Rust was for feeling superior, C++ to suffer, and Python because I gave up. Java? That was an accident."
        }
    },

    // 2-1-1-1: Algorithms (Parent: Programming)
    {
        id: '2-1-1-1',
        type: 'normal',
        position: { x: -100, y: 1150 },
        data: {
            label: 'Algorithms',
            details: ["Sorting", "Graph Theory", "Dynamic Programming", "Backtracking", "Dijkstra's"],
            favourites: [1, 1, 0, 0, 1],
            story: "I use bubble sort in production to assert dominance. Graph Theory is just social networking for nodes. DP is where I pretend to understand overlapping subproblems while crying."
        }
    },
    {
        id: '2-1-1-2',
        type: 'normal',
        position: { x: 150, y: 1050 },
        data: {
            label: 'OOP',
            details: ["Encapsulation", "Inheritance", "Polymorphism", "Design Patterns", "Abstract Classes"],
            favourites: [1, 0, 1, 0, 0],
            story: "Encapsulation is how I hide my bad code. Inheritance is why junior devs hate me. Polymorphism is my way of saying 'it depends'. Design Patterns are my coping mechanism."
        }
    },
    {
        id: '2-1-1-3',
        type: 'normal',
        position: { x: -350, y: 1050 },
        data: {
            label: 'Functional Programming',
            details: ["Haskell", "Clojure", "Immutability", "Higher-Order Functions", "Monads", "Tail Recursion"],
            favourites: [0, 1, 1, 1, 0, 1],
            story: "Haskell: where I spend 4 hours writing a one-line function that could've been a for-loop. Immutability means I can't change my bad variable names. Monads are just burritos that compile."
        }
    },

    // ========================
    // 2-2: System Programming
    // ========================
    {
        id: '2-2',
        type: 'normal',
        position: { x: -400, y: 450 },
        data: {
            label: 'System Programming',
            details: ["Linux Kernel", "System Calls", "Multithreading", "IPC", "Synchronization"],
            favourites: [1, 1, 0, 0, 1],
            story: "I tweak the Linux Kernel to feel like a hacker. System Calls are how I politely ask the OS for favors. Multithreading is my excuse when things don't work - 'must be a race condition'."
        }
    },
    {
        id: '2-2-1',
        type: 'normal',
        position: { x: -550, y: 600 },
        data: {
            label: 'Operating Systems',
            details: ["Unix", "Windows NT", "Scheduling", "File Systems", "Microkernels"],
            favourites: [1, 0, 1, 1, 0],
            story: "Unix is NOT my religion, Windows NT is my guilty pleasure though. Scheduling algorithms decide which of my tabs gets CPU time. File Systems are where I lose important documents forever."
        }
    },
    {
        id: '2-2-1-1',
        type: 'normal',
        position: { x: -950, y: 600 },
        data: {
            label: 'Memory Management',
            details: ["Virtual Memory", "Paging", "Garbage Collection", "Memory Leaks", "Fragmentation"],
            favourites: [1, 1, 0, 1, 0],
            story: "Virtual Memory is my imaginary RAM. Paging is how I pretend I'm not out of memory. Garbage Collection is my life coach - cleaning up my messes. Memory Leaks are my contributions to the OOM killer."
        }
    },
    {
        id: '2-2-2',
        type: 'normal',
        position: { x: -750, y: 450 },
        data: {
            label: 'Low-Level Programming',
            details: ["Assembly", "Pointers", "Memory Alignment", "Bit Twiddling", "DMA"],
            favourites: [0, 1, 1, 0, 0],
            story: "I write Assembly when I want to feel both powerful and confused. Pointers are how I lose hours debugging. Memory Alignment is my OCD manifest. Bit Twiddling is my party trick that impresses no one."
        }
    },

    // ========================
    // 2-3: Web Development
    // ========================
    {
        id: '2-3',
        type: 'normal',
        position: { x: 250, y: 450 },
        data: {
            label: 'Web Development',
            details: ["HTTP/HTTPS", "REST", "WebSockets", "GraphQL", "gRPC"],
            favourites: [1, 1, 0, 1, 0],
            story: "HTTP is my love language *Lying*. REST is how I pretend to be organized. WebSockets are for when I want to feel fancy. GraphQL is my excuse for not learning SQL properly."
        }
    },
    {
        id: '2-3-1',
        type: 'normal',
        position: { x: 450, y: 650 },
        data: {
            label: 'Frontend',
            details: ["React", "Next.js", "SASS", "Webpack", "Tailwind", "Solid.js"],
            favourites: [1, 0, 1, 0, 1, 1],
            story: "React is my abusive relationship - I keep coming back. This website is built with Next.js, what do you expect? SASS is how I cope with CSS. Webpack configs are my personal hell. Tailwind is my 'I gave up on design' button. SolidJS is my new favorite framework that i don't use."
        }
    },
    {
        id: '2-3-2',
        type: 'normal',
        position: { x: 600, y: 500 },
        data: {
            label: 'Backend',
            details: ["Node.js", "Django", "Spring Boot", "Express", "FastAPI", "NestJS", "Fiber.go"],
            favourites: [1, 0, 0, 1, 1, 0, 1],
            story: "Node.js is my 'I can do frontend AND backend' delusion. Django is for when I want batteries included. Spring Boot is what I use when I hate myself. Express is my 'good enough' framework. Fiber is just fire 🔥"
        }
    },
    // ========================
    // 2-4: Machine Learning & AI (Parent: Software Engineering)
    // ========================
    {
        id: '2-4',
        type: 'normal',
        position: { x: 250, y: 150 },
        data: {
            label: 'Machine Learning & AI',
            details: ["Scikit-learn", "TensorFlow", "PyTorch", "Keras", "XGBoost", "OpenAI"],
            favourites: [1, 0, 1, 1, 0, 1],
            story: "Scikit-learn is my ML training wheels. TensorFlow is where I get lost in the computational graph. PyTorch is my rebound framework. Keras is for when I want to feel productive. OpenAI is how I pretend I understand transformers."
        }
    },
    {
        id: '2-4-1',
        type: 'normal',
        position: { x: 550, y: 350 },
        data: {
            label: 'Data Preprocessing',
            details: ["Pandas", "NumPy", "Data Cleaning", "Feature Engineering", "One-Hot Encoding", "PCA"],
            favourites: [1, 1, 0, 1, 0, 1],
            story: "Pandas is how I brute-force my way through data. NumPy is my array of hope. Data Cleaning is 80% of my job and 100% of my suffering. Feature Engineering is where I play shit with variables."
        }
    },
    {
        id: '2-4-2',
        type: 'normal',
        position: { x: 650, y: 50 },
        data: {
            label: 'Supervised Learning',
            details: ["Linear Regression", "SVMs", "Random Forests", "Gradient Boosting", "k-NN", "Naive Bayes"],
            favourites: [1, 1, 1, 0, 0, 0],
            story: "Linear Regression is my 'hello world' of ML. SVMs are for when I want to feel mathematically sophisticated. Random Forests are my 'I can't be bothered to tune parameters' solution. Gradient Boosting is what I use when I want to win Kaggle competitions."
        }
    },
    {
        id: '2-4-3',
        type: 'normal',
        position: { x: 850, y: 150 },
        data: {
            label: 'Neural Networks',
            details: ["CNNs", "RNNs", "Transformers", "GANs", "Autoencoders", "Attention Mechanisms"],
            favourites: [1, 0, 1, 0, 0, 1],
            story: "CNNs are my excuse to say 'deep learning'. RNNs are what I use when I want vanishing gradients. Transformers are how I pretend to understand attention. GANs are for generating fake data and disappointment."
        }
    },
    {
        id: '2-4-3-1',
        type: 'normal',
        position: { x: 1150, y: 130 },
        data: {
            label: 'Natural Language Processing (NLP)',
            details: ["NLTK", "spaCy", "BERT", "GPT", "HuggingFace", "Word2Vec"],
            favourites: [0, 1, 1, 1, 1, 0],
            story: "NLTK is my NLP relic. spaCy is where I pretend to be efficient. BERT is my contextual embedding crush. GPT is how I scare myself about AI. HuggingFace is my transformer candy store. Word2Vec is my 'old but gold' embedding."
        }
    },

    // ========================
    // 2-5: Databases & DBMS
    // ========================
    {
        id: '2-5',
        type: 'normal',
        position: { x: -400, y: 200 },
        data: {
            label: 'Databases & DBMS',
            details: ["Indexing", "ACID", "CAP Theorem", "Normalization", "Sharding"],
            favourites: [1, 1, 0, 1, 0],
            story: "Indexing is how I pretend my queries are fast. ACID is what I wish my weekends were. CAP Theorem is my excuse when the database is down. Normalization is my way of overcomplicating tables."
        }
    },
    {
        id: '2-5-1',
        type: 'normal',
        position: { x: -700, y: 20 },
        data: {
            label: 'Relational Databases',
            details: ["PostgreSQL", "MySQL", "SQLite", "ORM (Hibernate)", "SQL Server", "Oracle"],
            favourites: [1, 0, 1, 0, 0, 0],
            story: "PostgreSQL is my sophisticated choice. MySQL is what I use when I'm lazy. SQLite is for when I want to pretend I don't need a 'real' database. ORMs are how I avoid learning SQL properly."
        }
    },
    {
        id: '2-5-2',
        type: 'normal',
        position: { x: -650, y: -50 },
        data: {
            label: 'NoSQL',
            details: ["MongoDB", "Cassandra", "Redis", "Elasticsearch", "DynamoDB", "Neo4j"],
            favourites: [1, 0, 1, 1, 0, 0],
            story: "MongoDB is for when I hate schemas but love problems. Cassandra is my distributed system midlife crisis. Redis is my 'cache all the things' solution. Elasticsearch is how I pretend to know search algorithms."
        }
    },
    {
        id: '2-5-3',
        type: 'normal',
        position: { x: -1000, y: 100 },
        data: {
            label: 'SQL Query Optimization',
            details: ["EXPLAIN", "Indexing Strategies", "Partitioning", "Query Rewriting", "Materialized Views"],
            favourites: [1, 1, 0, 0, 1],
            story: "EXPLAIN is how I discover my queries are terrible. Indexing Strategies are my desperate attempts to fix performance. Partitioning is what I do when a table gets too big for its britches."
        }
    },



    // ========================
    // 2-6: DevSecOps
    // ========================
    {
        id: '2-6',
        type: 'normal',
        position: { x: 200, y: 750 },
        data: {
            label: 'DevSecOps',
            details: ["CI/CD Pipelines", "Monitoring", "Incident Response", "GitOps", "Chaos Engineering"],
            favourites: [1, 1, 0, 1, 0],
            story: "CI/CD Pipelines are where my code goes to die. Monitoring is how I watch my systems slowly degrade. Incident Response is my excuse to panic professionally. GitOps is just 'git push' with extra steps."
        }
    },
    {
        id: '2-6-1',
        type: 'normal',
        position: { x: 500, y: 1000 },
        data: {
            label: 'Infrastructure as Code',
            details: ["Terraform", "Ansible", "Pulumi", "CloudFormation", "CDK", "Crossplane"],
            favourites: [1, 0, 1, 0, 1, 0],
            story: "Terraform is how I break production with a typo. Ansible is my YAML nightmare. Pulumi lets me write real code to provision fake clouds. CloudFormation is AWS's way of saying 'you'll use our tools and like it'."
        }
    },
    {
        id: '2-6-2',
        type: 'normal',
        position: { x: 500, y: 850 },
        data: {
            label: 'Containerization',
            details: ["Docker", "Kubernetes", "Podman", "Helm", "Containerd", "Kustomize"],
            favourites: [1, 1, 0, 0, 1, 0],
            story: "Docker is my 'it works on my machine' solution. Kubernetes is how I turn 5 containers into 500 problems. Podman is for when I want Docker but hipster. Helm charts are just YAML Russian dolls."
        }
    },

    // ========================
    // 2-7: Cyber Security
    // ========================
    {
        id: '2-7',
        type: 'normal',
        position: { x: -400, y: 750 },
        data: {
            label: 'Cyber Security',
            details: ["Zero Trust", "SOC", "Threat Modeling", "SIEM", "IAM"],
            favourites: [1, 0, 1, 1, 0],
            story: "Zero Trust is my life philosophy - I don't even trust my own code. SOC is where I pretend to watch logs all day. Threat Modeling is how I justify my paranoia. SIEM is my fancy alert spammer."
        }
    },
    {
        id: '2-7-1',
        type: 'normal',
        position: { x: -650, y: 950 },
        data: {
            label: 'Cryptography',
            details: ["AES", "RSA", "ECDSA", "TLS/SSL", "PKI", "SHA-3"],
            favourites: [1, 1, 0, 1, 0, 0],
            story: "AES is my encryption comfort food. RSA is how I flex my math muscles (badly). TLS/SSL is the reason I have trust issues with certificates. PKI is just a fancy way to say 'who watches the watchmen?'"
        }
    },
    {
        id: '2-7-2',
        type: 'normal',
        position: { x: -750, y: 750 },
        data: {
            label: 'Penetration Testing',
            details: ["Metasploit", "Burp Suite", "OWASP ZAP", "Nmap", "Wireshark", "John the Ripper"],
            favourites: [1, 1, 0, 1, 1, 0],
            story: "Metasploit is my 'I'm a hacker' cosplay tool. Burp Suite is how I break things professionally. Nmap is my network-stalking enabler. Wireshark is where I go to see all my unencrypted shame."
        }
    },

    // ========================
    // 2-8: Distributed Systems
    // ========================
    {
        id: '2-8',
        type: 'normal',
        position: { x: -550, y: 300 },
        data: {
            label: 'Distributed Systems',
            details: ["Consensus Algorithms", "Sharding", "Event Sourcing", "CAP Theorem", "CRDTs"],
            favourites: [1, 1, 0, 1, 0],
            story: "Consensus Algorithms are how I get my services to agree on anything (unlike my team). Sharding is my way of pretending I understand horizontal scaling. Event Sourcing is just fancy version control for data. CAP Theorem is my excuse when everything fails."
        }
    },
    {
        id: '2-8-1',
        type: 'normal',
        position: { x: -1200, y: 300 },
        data: {
            label: 'Message Queues',
            details: ["Kafka", "RabbitMQ", "AWS SQS", "ZeroMQ", "NATS", "Redis Streams"],
            favourites: [1, 0, 1, 0, 1, 0],
            story: "Kafka is my distributed log of distributed logs. RabbitMQ is for when I want queues with a side of erlang magic. AWS SQS is my 'I don't want to manage infra' solution. NATS is my need-for-speed messaging fix."
        }
    },
    {
        id: '2-8-2',
        type: 'normal',
        position: { x: -850, y: 300 },
        data: {
            label: 'Microservices',
            details: ["gRPC", "Service Mesh (Istio)", "API Gateways", "Circuit Breakers", "Distributed Tracing"],
            favourites: [1, 0, 1, 1, 0],
            story: "gRPC is how I pretend to be efficient. Service Mesh is where I hide my networking problems. API Gateways are my bouncers for bad requests. Circuit Breakers exist because my services fail more than my relationships."
        }
    },

    // ========================
    // 2-9: Computer Architecture
    // ========================
    {
        id: '2-9',
        type: 'normal',
        position: { x: 850, y: 350 },
        data: {
            label: 'Computer Architecture',
            details: ["Pipelining", "Cache Coherence", "SIMD", "Superscalar", "Out-of-Order Execution"],
            favourites: [1, 1, 0, 1, 0],
            story: "Pipelining is how CPUs pretend to multitask. Cache Coherence is my social life - constantly syncing. SIMD is when I brute-force performance. Out-of-Order Execution is my ADHD processor spirit animal."
        }
    },
    {
        id: '2-9-1',
        type: 'normal',
        position: { x: 1000, y: 500 },
        data: {
            label: 'CPU Architecture',
            details: ["x86", "ARM", "RISC-V", "Branch Prediction", "Microcode", "Speculative Execution"],
            favourites: [1, 1, 0, 1, 0, 0],
            story: "x86 is my bloated ex. ARM powers my phone and my fragile ego. RISC-V is my open-source crush. Branch Prediction is how I pretend to know what users want. Spectre/Meltdown proved speculative execution was too ambitious."
        }
    },
    {
        id: '2-9-2',
        type: 'normal',
        position: { x: 1200, y: 350 },
        data: {
            label: 'Memory Hierarchy',
            details: ["L1/L2/L3 Caches", "NUMA", "Persistent Memory", "TLBs", "Prefetching", "Memory Barriers"],
            favourites: [1, 0, 1, 1, 0, 0],
            story: "L1 cache is my working memory (when I remember). NUMA is where I get lost in non-uniformity. Persistent Memory is my 'what if RAM was storage?' phase. TLBs exist to make virtual memory even more confusing."
        }
    },

    // ========================
    // 2-10: Graphic Programming
    // ========================
    {
        id: '2-10',
        type: 'normal',
        position: { x: 250, y: -100 },
        data: {
            label: 'Graphic Programming',
            details: ["Ray Tracing", "Shaders", "Vulkan", "Physically Based Rendering", "Global Illumination"],
            favourites: [1, 1, 0, 1, 0],
            story: "Ray Tracing is how I make my GPU cry for mercy. Shaders are black magic wrapped in code. Vulkan is for when OpenGL just isn't painful enough. PBR is just fancy math to make things look wet."
        }
    },
    {
        id: '2-10-1',
        type: 'normal',
        position: { x: 500, y: -250 },
        data: {
            label: 'OpenGL/GLSL',
            details: ["WebGL", "GLSL Shaders", "Unity ShaderLab", "Three.js", "Compute Shaders"],
            favourites: [1, 1, 0, 1, 0],
            story: "WebGL is how I crash browsers professionally. GLSL is where I learn to hate graphics math. Unity ShaderLab is my 'why can't this just work?' experience. Three.js is my cheat code for 3D web apps."
        }
    },
    {
        id: '2-10-2',
        type: 'normal',
        position: { x: 750, y: -100 },
        data: {
            label: 'Computer Vision',
            details: ["OpenCV", "YOLO", "SLAM", "AR/VR", "Object Detection", "Neural Radiance Fields"],
            favourites: [1, 1, 0, 0, 1, 0],
            story: "OpenCV is my 'I see dead pixels' toolkit. YOLO is how I detect cats in 1000 images. SLAM is what my code does to my productivity. AR/VR is just an excuse to wear funny goggles at work."
        }
    },
    // ========================
    // 2-11: Cloud Computing & Serverless Architectures
    // ========================
    {
        id: '2-11',
        type: 'normal',
        position: { x: 750, y: 650 },
        data: {
            label: 'Cloud Computing & Serverless',
            details: ["Auto-scaling", "Multi-tenancy", "Pay-as-you-go", "Cold Starts", "Vendor Lock-in"],
            favourites: [1, 0, 1, 0, 1],
            story: "Auto-scaling is how I turn small bugs into expensive disasters. Multi-tenancy is my way of sharing resources (and problems). Pay-as-you-go is just 'surprise billing' in fancy terms. Vendor lock-in is that toxic relationship I can't quit."
        }
    },
    {
        id: '2-11-1',
        type: 'normal',
        position: { x: 1100, y: 650 },
        data: {
            label: 'Cloud Platforms',
            details: ["AWS (EC2, S3, Lambda)", "GCP (GKE, Cloud Functions)", "Azure (AKS, Blob Storage)", "IBM Cloud", "Oracle Cloud"],
            favourites: [1, 1, 0, 0, 0],
            story: "AWS is where I go to get 1000 services I'll never fully understand. GCP is for when I want to feel smarter than I am. Azure is Microsoft's cloud with Windows Update vibes. Oracle Cloud exists to make other clouds look affordable."
        }
    },
    {
        id: '2-11-2',
        type: 'normal',
        position: { x: 800, y: 850 },
        data: {
            label: 'Serverless Architectures',
            details: ["AWS Lambda", "Azure Functions", "Google Cloud Run", "Serverless Framework", "Knative", "OpenFaaS"],
            favourites: [1, 0, 1, 1, 0, 0],
            story: "AWS Lambda is how I run code without caring about servers (until cold starts ruin my day). Azure Functions is my 'I already pay for Office 365' solution. Cloud Run is containers pretending to be serverless. The Serverless Framework is just more YAML therapy."
        }
    },

    // ========================
    // 2-12: Networking & Virtualization
    // ========================
    {
        id: '2-12',
        type: 'normal',
        position: { x: -900, y: -150 },
        data: {
            label: 'Networking & Virtualization',
            details: ["OSI Model", "Load Balancers", "SDN", "BGP", "QoS"],
            favourites: [1, 1, 0, 0, 0],
            story: "The OSI model is how I pretend to understand networking. Load balancers are my excuse when the server can't handle the load. SDN is networking for people who hate hardware. BGP is the internet's game of telephone."
        }
    },
    {
        id: '2-12-1',
        type: 'normal',
        position: { x: -1200, y: -150 },
        data: {
            label: 'Network Configuration',
            details: ["TCP/IP", "DNS", "VPNs", "Subnetting", "Wireshark", "Firewall Rules"],
            favourites: [1, 1, 1, 0, 1, 0],
            story: "TCP/IP is the handshake I never learned. DNS is the phonebook of the internet that's always wrong. VPNs are how I pretend to work from the beach. Subnetting is math I do once and never again. Wireshark is my network therapist."
        }
    },
    {
        id: '2-12-2',
        type: 'normal',
        position: { x: -1300, y: 0 },
        data: {
            label: 'Virtualization',
            details: ["VMware", "VirtualBox", "KVM", "Hyper-V", "Vagrant", "Proxmox"],
            favourites: [1, 0, 1, 0, 1, 0],
            story: "VMware is for when I want to virtualize my entire paycheck. VirtualBox is my 'it's free' starter drug. KVM is Linux's way of showing off. Hyper-V is Microsoft's virtualization participation trophy. Vagrant is how I automate my VM addiction."
        }
    }

];

export default M_NODES;

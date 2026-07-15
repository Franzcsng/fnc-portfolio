import {icons} from '../../components/icons'

import cssystemImage from '../images/projects/cs-system.png'
import ironbornImage from '../images/projects/ironborn.webp'
import truckmovesImage from '../images/projects/truckmoves.webp'
import windmillImage from '../images/projects/windmilldowns.webp'
import proposalImage from '../images/projects/system-proposal.png'

import expenseTrackerFeatured from '../images/projects/expense-tracker/featured-image.png'
import expenseTrackerShot1 from '../images/projects/expense-tracker/Screenshot 2026-07-05 203444.png'
import expenseTrackerShot2 from '../images/projects/expense-tracker/Screenshot 2026-07-05 203509.png'
import expenseTrackerShot3 from '../images/projects/expense-tracker/Screenshot 2026-07-05 203529.png'
import expenseTrackerShot4 from '../images/projects/expense-tracker/Screenshot 2026-07-05 203902.png'
import expenseTrackerShot5 from '../images/projects/expense-tracker/Screenshot 2026-07-05 204427.png'

import hotelConciergeFeatured from '../images/projects/hotel-concierge-ai-assistant/preview-image.webp'
import hotelConciergeChatbotWorkflow from '../images/projects/hotel-concierge-ai-assistant/Chatbot Workflow.webp'
import hotelConciergeContactWorkflow from '../images/projects/hotel-concierge-ai-assistant/Contact Request and Email Workflow.webp'
import hotelConciergePdfWorkflow from '../images/projects/hotel-concierge-ai-assistant/PDF Processing Workflow.webp'
import hotelConciergeShot1 from '../images/projects/hotel-concierge-ai-assistant/Screenshot 2026-07-08 214649.webp'
import hotelConciergeShot2 from '../images/projects/hotel-concierge-ai-assistant/Screenshot 2026-07-08 214807.webp'
import hotelConciergeShot3 from '../images/projects/hotel-concierge-ai-assistant/Screenshot 2026-07-08 214848.webp'
import hotelConciergeShot4 from '../images/projects/hotel-concierge-ai-assistant/Screenshot 2026-07-08 215201.webp'
import hotelConciergeShot5 from '../images/projects/hotel-concierge-ai-assistant/Screenshot 2026-07-08 215207.webp'


const NextIcon = icons.nextjs
const N8nIcon = icons.n8n
const JSIcon = icons.js
const SassIcon = icons.sass
const SupabaseIcon = icons.supabase
const OpenaiIcon = icons.openai
const MysqlIcon = icons.mysql
const WordpressIcon = icons.wordpress
const PrismaIcon = icons.prisma
const HubspotIcon = icons.hubspot
const DockerIcon = icons.docker
const PostgresIcon = icons.postgres


export const projects = [
    {
        title: 'Hotel AI Concierge Chatbot',
        featured_image: hotelConciergeFeatured,
        slug: 'hotel-concierge-rag-chatbot',
        description: "An AI-powered hotel concierge chatbot that answers guest questions using retrieval-augmented generation, with automated escalation for unanswered queries.",

        overview: "Designed and built an AI concierge system for a hotel brand, capable of answering guest questions grounded in the hotel's own documentation. The system combines a document ingestion pipeline, a RAG-based chatbot, and an automated escalation workflow, all orchestrated through n8n and backed by Supabase with vector search for semantic retrieval.",

        problem: "Guests often have questions that require digging through PDFs, hotel policies, or contacting staff directly, creating friction for simple queries and adding avoidable workload to front-desk and support staff, especially for questions outside normal business hours.",

        solution: "Built a RAG-based chatbot that answers guest questions directly from ingested hotel documents, with graceful fallback handling for unrelated or unanswerable questions. When the chatbot can't confidently answer, it automatically collects guest contact details through a follow-up form and routes the request to hotel staff with full conversation context.",

        challenges: "Designing a chunking and embedding strategy that preserved enough context for accurate retrieval, tuning the RAG pipeline to reliably distinguish answerable from unanswerable questions, and structuring the escalation workflow to hand off complete, useful context to a human agent without requiring the guest to repeat themselves.",

        problemsSolved: [
            "Automated first-line guest support by answering common hotel questions instantly using document-grounded AI responses instead of manual lookup.",
            "Reduced staff workload by filtering out repetitive questions, only escalating genuinely unanswerable or out-of-scope requests to a human.",
            "Eliminated context loss during escalation by automatically compiling contact details, the unanswered question, a conversation summary, and the full transcript into a single notification email.",
            "Automated document ingestion so hotel staff can upload a PDF and have it chunked, embedded, and made searchable without any manual data entry.",
            "Built a scalable retrieval architecture using pgvector, allowing new hotel documents to be added without retraining or redeploying the system."
        ],

        reflection: "This project deepened my understanding of building production-grade RAG systems beyond simple prompt-and-response chatbots. I learned how to design a document processing pipeline from raw PDF to searchable vector embeddings, how to structure prompts and fallback logic so an AI system knows the boundaries of what it can confidently answer, and how to design automation workflows that hand off gracefully to humans instead of leaving users stuck. It sharpened my thinking around orchestrating multiple interconnected workflows as a single coherent system rather than isolated automations.",

        screenshots: [
            hotelConciergeChatbotWorkflow,
            hotelConciergeContactWorkflow,
            hotelConciergePdfWorkflow,
            hotelConciergeShot1,
            hotelConciergeShot2,
            hotelConciergeShot3,
            hotelConciergeShot4,
            hotelConciergeShot5
        ],

        features: [
            'RAG-based question answering grounded in hotel documentation',
            'Fallback handling for unrelated or unanswerable questions',
            'Automated contact form escalation with full conversation context',
            'Automated PDF ingestion, chunking, and embedding pipeline',
            'Admin email notifications with contact details, summary, and full transcript',
        ],

        tech: [
            {tech: 'N8N', icon: N8nIcon},
            {tech: 'SUPABASE', icon: SupabaseIcon},
            {tech: 'POSTGRESQL', icon: PostgresIcon},
            {tech: 'OPENAI', icon: OpenaiIcon},
            {tech: 'JAVASCRIPT', icon: JSIcon},
        ],
    },
    {
    title: 'AI Expense Tracker',
    featured_image: expenseTrackerFeatured,
    slug: 'ai-expense-tracker',

    description: "A full-stack personal finance application that combines expense tracking with AI-powered receipt processing and conversational financial insights. The platform simplifies expense management by automatically extracting transaction data from receipts and enabling users to interact with their financial data through a natural language chatbot.",

    overview: "Designed and developed a modern expense tracking application focused on reducing manual data entry and making personal financial data easier to understand. The system leverages AI to extract information from uploaded receipts, categorizes expenses automatically, and lays the foundation for Retrieval-Augmented Generation (RAG) to enable users to ask questions about their spending habits using natural language.",

    problem: "Traditional expense trackers require users to manually enter every transaction, making the process tedious and discouraging consistent financial tracking. Most applications also present raw financial data without providing meaningful insights or allowing users to explore their expenses conversationally.",

    solution: "Built a full-stack application that automates expense recording through AI-powered receipt processing, organizes transactions into searchable categories, and provides a scalable architecture for AI-assisted financial analysis. The application is designed with extensibility in mind, allowing future integration of RAG-powered chat experiences with persistent user context.",

    challenges: "Building a reliable receipt processing workflow capable of handling varying receipt formats while designing a flexible data model to support AI-generated insights, semantic search, and future conversational features. Additional challenges included authentication, secure file handling, and creating an efficient pipeline for AI processing.",

    problemsSolved: [
        "Reduced manual expense entry by automatically extracting transaction details from uploaded receipts using AI.",
        "Organized financial data into structured categories for easier reporting and analysis.",
        "Created a scalable backend architecture capable of supporting Retrieval-Augmented Generation (RAG) for conversational financial queries.",
        "Designed a workflow that combines OCR, AI processing, and database persistence into a seamless user experience.",
        "Improved accessibility of financial information by transforming raw transaction data into searchable and AI-ready knowledge."
    ],

    reflection: "This project significantly deepened my understanding of AI application development beyond simply integrating APIs. I learned how to design workflows that combine OCR, large language models, structured databases, and vector-ready data for future Retrieval-Augmented Generation (RAG) capabilities. More importantly, it taught me to think about AI as part of the overall system architecture rather than as an isolated feature, influencing how I approach software design and data modeling.",

    screenshots: [
        expenseTrackerShot1,
        expenseTrackerShot2,
        expenseTrackerShot3,
        expenseTrackerShot4,
        expenseTrackerShot5
    ],

    features: [
        "AI-powered receipt scanning and transaction extraction",
        "Automatic expense categorization",
        "Expense search, filtering, and management",
        "Interactive spending analytics and visualizations",
        "Secure user authentication",
        "Persistent financial records",
        // "Conversational AI assistant",
        // "Architecture prepared for Retrieval-Augmented Generation (RAG)"
    ],

    tech: [
        { tech: 'NEXTJS', icon: NextIcon },
        { tech: 'SUPABASE', icon: SupabaseIcon },
        { tech: 'OPENAI', icon: OpenaiIcon },
        { tech: 'N8N', icon: N8nIcon },
        { tech: 'JAVASCRIPT', icon: JSIcon },
        { tech: 'SASS', icon: SassIcon }
    ],

    github: 'https://github.com/Franzcsng/expense_tracker',
    link: ''
},

{
        title: 'Client Proposal Management System',
        featured_image: proposalImage,
        slug: 'client-proposal-system',
       description: "A custom proposal management platform built to modernize and replace a legacy WordPress-based system used for generating and managing client proposals.",

        overview: "Designed and developed a full-stack proposal management platform to replace a legacy WordPress-based system used by the business for creating, managing, and tracking client proposals. The new platform streamlined the proposal workflow, improved usability and performance, introduced a dedicated client portal, and provided a scalable foundation for future enhancements while significantly reducing the maintenance burden of the previous solution.",

        problem: "The legacy proposal platform suffered from slow load times, plugin conflicts, maintenance challenges, and limited scalability due to its dependence on numerous WordPress plugins and custom workarounds.",

        solution: "Architected and developed a modern web application that centralized proposal workflows, automated key processes, improved system responsiveness, and provided a scalable foundation for future business requirements.",

        challenges: "Translating complex business processes from an existing WordPress ecosystem into a custom-built application while ensuring usability, maintaining operational continuity, and designing a flexible data model that could evolve alongside business needs.",

        problemsSolved: [
    "Replaced a legacy WordPress system that relied on numerous plugins and custom workarounds, eliminating maintenance overhead and plugin conflicts.",
    "Reduced the time required to create and manage proposals through a streamlined, purpose-built workflow.",
    "Improved proposal visibility with centralized status tracking for both administrators and clients.",
    "Lowered deployment and infrastructure costs by containerizing the application with Docker and hosting it on the company's existing VPS instead of provisioning additional servers.",
    "Simplified future development by replacing a CMS-based architecture with a maintainable full-stack application and a well-structured relational database."

        ],

        reflection: "This project marked a major milestone in my growth as a software engineer. It was the first time I owned the complete lifecycle of a production application—from requirements gathering and database design to development, deployment, and server configuration. Beyond building features, I learned how to architect software around business workflows, containerize applications with Docker, deploy to a Linux VPS using reverse proxies and SSL, and make technical decisions with long-term maintainability and scalability in mind. It shifted my mindset from simply writing code to designing complete software solutions.",

        screenshots: [],

        features: [

        ],

        tech: [
            {tech: 'NEXTJS', icon: NextIcon},
             {tech: 'JAVASCRIPT', icon: JSIcon},
             {tech:'SASS', icon: SassIcon},
             {tech: 'MYSQL', icon: MysqlIcon},
            {tech: 'PRISMA', icon: PrismaIcon},
            {tech: 'DOCKER', icon: DockerIcon}

        ],
    },
    {
        title: 'EA Operational Memory System',
        featured_image: cssystemImage,
        slug: 'ea-operational-memory-system',
        description: "An internal AI-assisted workflow system designed to manage and persist operational knowledge across client interactions and tasks.",

        overview: "A full-stack system built to improve information retention and workflow continuity for client operations by structuring and storing contextual data in a centralized system.",

        problem: "Teams often lose important context across tasks and client interactions, leading to repeated work, inconsistent outputs, and inefficient communication.",

        solution: "Developed a structured system that captures, organizes, and retrieves operational context, enabling consistent decision-making and reducing repetitive information loss.",

        challenges: "Designing a scalable data structure for dynamic and unstructured information while maintaining fast retrieval and ensuring system flexibility for future AI integration.",

        problemsSolved: [
            "Eliminated repeated work caused by context lost between client interactions",
            "Reduced inconsistent outputs by centralizing operational knowledge in one structure",
            "Improved retrieval speed for dynamic, unstructured information"
        ],

        reflection: "This project pushed me to think beyond simple CRUD storage and design a data structure flexible enough to support future AI agent workflows. It reinforced how important it is to plan for scalability early, rather than retrofitting structure once the data grows unwieldy.",

        screenshots: [],

        features: [
            "Centralized operational knowledge storage",
            "Context-based data retrieval system",
            "Workflow-friendly structure for team usage",
            "Designed for future AI agent integration"
        ],

        tech: [
            {tech: 'NEXTJS', icon: NextIcon},
            {tech: 'N8N', icon: N8nIcon},
            {tech: 'SUPABASE', icon: SupabaseIcon},
             {tech: 'JAVASCRIPT', icon: JSIcon},
             {tech:'SASS', icon: SassIcon},
             {tech: 'OPENAI', icon: OpenaiIcon}

        ],
        link: '',
        github: 'https://github.com/Franzcsng/client-success-operational-memory-system',
    },
    
    {
        title: 'Truckmoves Australia Business Website',
        featured_image: truckmovesImage,
        slug: 'truckmoves',
       description: "A corporate website developed for a trucking company.",

        overview: "",

        problem: "",

        solution: "",

        challenges: "",

        problemsSolved: [

        ],

        reflection: "",

        screenshots: [],

        features: [

        ],
        link: 'https://truckmoves.1ptstaging.com.au/',
        tech: [
            {tech: 'WORDPRESS', icon: WordpressIcon}, 
            {tech: 'HUBSPOT', icon: HubspotIcon}

        ],
    },
    {
        title: 'Ironborn Business Website',
        featured_image: ironbornImage,
        slug: 'ironborn',
       description: "A corporate website developed for an Australian ERP consulting firm specializing in ERP implementation, business transformation, systems integration, and project management services. The website was built to strengthen the company's online presence, showcase service offerings, and support lead generation.",

        overview: "",

        problem: "",

        solution: "",

        challenges: "",

        problemsSolved: [

        ],

        reflection: "",

        screenshots: [],

        features: [

        ],
        link: 'https://ironborn.com.au/',
        tech: [
            {tech: 'WORDPRESS', icon: WordpressIcon}, 
            {tech: 'HUBSPOT', icon: HubspotIcon}

        ],
    },
    {
        title: 'Windmill Downs Business Website',
        featured_image: windmillImage,
        slug: 'windmill-down',
       description: "A real estate estate website developed for a residential land development in Moore Creek, Australia, showcasing lifestyle land lots, estate information, and property availability to support sales and lead generation.",
        overview: "",

        problem: "",

        solution: "",

        challenges: "",

        problemsSolved: [

        ],

        reflection: "",

        screenshots: [],

        features: [

        ],
        link: 'https://windmilldownsestate.com.au/',
        tech: [
            {tech: 'WORDPRESS', icon: WordpressIcon}, 
            {tech: 'HUBSPOT', icon: HubspotIcon}

        ],
    },
    
]
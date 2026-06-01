import {icons} from '../../components/icons'
// import Image1 from '../images/display_img.png'
const NextIcon = icons.nextjs
const N8nIcon = icons.n8n
const JSIcon = icons.js
const SassIcon = icons.sass
const SupabaseIcon = icons.supabase
const OpenaiIcon = icons.openai

export const projects = [
    {
        title: 'EA Operational Memory System',
        featured_image: '',
        slug: 'ea-operational-memory-system',
        description: "An internal AI-assisted workflow system designed to manage and persist operational knowledge across client interactions and tasks.",

        overview: "A full-stack system built to improve information retention and workflow continuity for client operations by structuring and storing contextual data in a centralized system.",

        problem: "Teams often lose important context across tasks and client interactions, leading to repeated work, inconsistent outputs, and inefficient communication.",

        solution: "Developed a structured system that captures, organizes, and retrieves operational context, enabling consistent decision-making and reducing repetitive information loss.",

        challenges: "Designing a scalable data structure for dynamic and unstructured information while maintaining fast retrieval and ensuring system flexibility for future AI integration.",

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
        github: 'https://github.com/Franzcsng/client-success-operational-memory-system',
    },
    
]
import {icons} from '../../components/icons'

import cssystemImage from '../images/projects/cs-system.png'
import ironbornImage from '../images/projects/ironborn.png'
import truckmovesImage from '../images/projects/truckmoves.png'
import windmillImage from '../images/projects/windmilldowns.png'
import proposalImage from '../images/projects/system-proposal.png'


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


export const projects = [
    {
        title: 'EA Operational Memory System',
        featured_image: cssystemImage,
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
        link: '',
        github: 'https://github.com/Franzcsng/client-success-operational-memory-system',
    },
    {
        title: 'Client Proposal Management System',
        featured_image: proposalImage,
        slug: 'client-proposal-system',
       description: "A custom proposal management platform built to modernize and replace a legacy WordPress-based system used for generating and managing client proposals.",

        overview: "Led the development of a full-stack proposal management system that streamlined proposal creation, improved operational efficiency, and eliminated the limitations of a heavily customized WordPress solution.",

        problem: "The legacy proposal platform suffered from slow load times, plugin conflicts, maintenance challenges, and limited scalability due to its dependence on numerous WordPress plugins and custom workarounds.",

        solution: "Architected and developed a modern web application that centralized proposal workflows, automated key processes, improved system responsiveness, and provided a scalable foundation for future business requirements.",

        challenges: "Translating complex business processes from an existing WordPress ecosystem into a custom-built application while ensuring usability, maintaining operational continuity, and designing a flexible data model that could evolve alongside business needs.",
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
        title: 'Truckmoves Australia Business Website',
        featured_image: truckmovesImage,
        slug: 'truckmoves',
       description: "A custom proposal management platform built to modernize and replace a legacy WordPress-based system used for generating and managing client proposals.",

        overview: "",

        problem: "",

        solution: "",

        challenges: "",
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
        features: [
           
        ],
        link: 'https://windmilldownsestate.com.au/',
        tech: [
            {tech: 'WORDPRESS', icon: WordpressIcon}, 
            {tech: 'HUBSPOT', icon: HubspotIcon}

        ],
    },
    
]
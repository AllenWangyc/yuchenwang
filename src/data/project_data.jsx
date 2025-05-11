import { factvax, pokemon, kitchen, portfolio } from '@/assets';

export const data = {
  projects: [
    {
      title: 'FactVax - Vaccine Misinformation Detector',
      description: 'FactVax is a scalable, AI-driven misinformation detection platform: a browser extension using GPT-4 and DeBERT-v3 offers real-time credibility assessments, while the React dashboard provides voice-activated queries and interactive trend visualizations.',
      githubUrl: 'https://github.com/AllenWangyc/factvax',
      image: factvax,
      glowColor: 'rgb(255,159,64)'
    },
    {
      title: 'Pokémon Explorer',
      description: 'Infinite scroll for browsing all of 900+ Pokémon with cases. View different forms or regional variants of Pokémon, all in one place.\nBuilt with performance in mind, ensuring a smooth browsing experience across devices.',
      githubUrl: 'https://github.com/AllenWangyc/pokemon-explorer',
      image: pokemon,
      glowColor: 'rgb(85,189,244)'
    },
    {
      title: 'Magic Kitchen - AI Powered Recipe Generator',
      description: 'AI Recipe Generator is a web application that leverages artificial intelligence to create comprehensive cooking recipes based on user-provided ingredients. This platform not only suggests a complete recipe including necessary ingredients and detailed cooking steps but also estimates the calorie count of the prepared dish. Users can create their own accounts to save and revisit their generated recipes, making it easier to track their culinary adventures and favorites over time. Whether you\'re a home cook looking to whip up something with the ingredients at hand or a cooking enthusiast exploring new recipe ideas, AI Recipe Generator offers a personalized cooking assistant experience.',
      githubUrl: 'https://github.com/AllenWangyc/magic-kitchen',
      image: kitchen,
      glowColor: 'rgb(251,113,133)'
    },
    {
      title: 'Yuchen Wang - Portfolio Website',
      description: 'My Portfolio Website, a showcase of my skills, projects, andexperience as a software developer.\nBuilt with modern web technologies, this portfolio highlightsinteractive 3D elements, smooth animations, and a responsivedesign for an engaging user experience.',
      githubUrl: 'https://github.com/AllenWangyc/yuchenwang',
      image: portfolio,
      glowColor: 'rgb(122,124,130)'
    }
  ]
}
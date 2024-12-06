export interface Feature {
  name: string;
  description: string;
  href: string;
  icon?: string; // Optional icon identifier
}

export const ProjectFeatures: Feature[] = [
  { 
    name: 'AI Bot Marketplace', 
    description: 'Browse and deploy intelligent AI solutions',
    href: '/marketplace',
    icon: 'storefront'
  },
  { 
    name: 'Bot Creation Studio', 
    description: 'Build and customize your own AI bots',
    href: '/create',
    icon: 'build'
  },
  { 
    name: 'Developer Dashboard', 
    description: 'Manage your bots and earnings',
    href: '/dashboard',
    icon: 'dashboard'
  },
  { 
    name: 'API Integration', 
    description: 'Connect AI bots to your workflows',
    href: '/api-docs',
    icon: 'api'
  },
  { 
    name: 'Community Hub', 
    description: 'Collaborate and share AI bot solutions',
    href: '/community',
    icon: 'groups'
  },
  { 
    name: 'Learning Center', 
    description: 'Tutorials and resources for AI bot development',
    href: '/learn',
    icon: 'school'
  }
];

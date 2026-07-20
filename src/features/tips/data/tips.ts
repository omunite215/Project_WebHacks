export interface Tip {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

export const TIPS: Tip[] = [
  {
    id: 'ai',
    title: 'How A.I is Evolving?',
    description: 'Tips on how to get success in Artificial Intelligence.',
    href: 'https://www.science.org/content/article/artificial-intelligence-evolving-all-itself',
    image: '/tips/robot.jpg',
  },
  {
    id: 'presentation',
    title: 'Presentation Skills',
    description: 'Improve your presentation skills.',
    href: 'https://www.skillsyouneed.com/presentation-skills.html',
    image: '/tips/presentation.jpg',
  },
  {
    id: 'learning',
    title: 'Learning Matters',
    description: 'Learn anything faster than you imagine.',
    href: 'https://www.learnerbly.com/articles/why-is-learning-important',
    image: '/tips/learning.jpg',
  },
  {
    id: 'stress',
    title: 'Dealing with Stress',
    description: 'A developer’s guide to managing stress.',
    href: 'https://info.codecast.io/blog/how-to-manage-stress-as-a-developer',
    image: '/tips/stress.jpg',
  },
  {
    id: 'coding',
    title: 'New to Coding?',
    description: 'Where to start as a beginner.',
    href: 'https://blog.hubspot.com/website/how-to-start-coding',
    image: '/tips/htmlcss.jpg',
  },
  {
    id: 'reading',
    title: 'Reading Habit',
    description: 'Develop a strong reading habit.',
    href: 'https://www.skillsyouneed.com/rhubarb/develop-reading-habit.html',
    image: '/tips/reading.jpg',
  },
];

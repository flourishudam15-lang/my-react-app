/**
 * projects.js — the real ones only.
 * swap the hrefs below for your actual live / repo urls.
 */

export const projects = [
  {
    id: 'ecommerce',
    title: 'Dropshipping Store',
    type: 'live · solo build',
    year: '2024',
    accent: 'lime',
    tagline: 'an end-to-end storefront that actually converts',
    description:
      'a full e-commerce storefront — instant catalog filtering, a reactive cart that doesn\'t lose state, and a checkout that works on mobile without making you want to throw your phone. built the whole thing from scratch: frontend, the node api, and the database.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'REST', 'Mobile-first'],
    links: { live: '#', code: '#' },
    images: ['showcase', 'mobile'],
    featured: true,
  },
  {
    id: 'portal',
    title: 'Academic Portal',
    type: 'team build · TechTerminal',
    year: '2024',
    accent: 'pink',
    tagline: 'a real platform students & trainers actually use',
    description:
      'an institutional platform used at TechTerminal — students submit work, trainers grade and leave feedback in real time, and there\'s a full dashboard for instructors. i built this with a team, which means i know how to work with people, not just a codebase.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'REST'],
    links: { live: '#', code: '#' },
    images: [],
    featured: false,
  },
];

export const techStack = [
  { name: 'React', desc: 'the frontend i live in', span: 2 },
  { name: 'Node.js', desc: 'apis & servers', span: 1 },
  { name: 'Express', desc: 'routing & middleware', span: 1 },
  { name: 'MongoDB', desc: 'data that scales', span: 2 },
  { name: 'JavaScript', desc: 'ES6+, always', span: 1 },
  { name: 'REST APIs', desc: 'clean & predictable', span: 1 },
  { name: 'CSS3', desc: 'no framework, no problem', span: 2 },
  { name: 'Git', desc: 'commit early, commit often', span: 1 },
  { name: 'Figma', desc: 'i design before i build', span: 1 },
];

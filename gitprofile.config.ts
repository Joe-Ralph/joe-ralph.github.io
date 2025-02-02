// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Joe-Ralph', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['Joe-Ralph/codeitksscode', 'Joe-Ralph/Creazone'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      // header: 'My Projects',
      // // To hide the `External Projects` section, keep it empty.
      // projects: [
      //   {
      //     title: 'Project Name',
      //     description:
      //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      //     imageUrl:
      //       'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
      //     link: 'https://example.com',
      //   },
      //   {
      //     title: 'Project Name',
      //     description:
      //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      //     imageUrl:
      //       'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
      //     link: 'https://example.com',
      //   },
      // ],
    },
  },
  seo: {
    title: 'Portfolio of Joe Ralphin',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'joe-ralph',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'joeral333@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1a6RLYQy8XvubpbqQ7HWqKM-zJC_3xhpg/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
 skills: [
    'Docker',
    'Git',
    'PostgreSQL',
    'Nginx',
    'Linux/Unix',
    'Ansible',
    'Java',
    'JavaScript',
    'Python',
    'Kibana',
    'Elasticsearch',
    'React',
    'Terraform',
    'Amazon Web Services (AWS)',
    'GoCD',
    'Spring Boot'
],
  experiences: [
    {
      company: 'Gofrugal Technologies',
      position: 'Team Lead',
      from: 'Apr 2023',
      to: 'Jun 2023',
      companyLink: 'https://www.gofrugal.com/',
    },
    {
      company: 'Gofrugal Technologies',
      position: 'Member of Technical Staff',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://example.com',
    },
  ],
  // certifications: [
  //   {
  //     name: 'Lorem ipsum',
  //     body: 'Lorem ipsum dolor sit amet',
  //     year: 'March 2022',
  //     link: 'https://example.com',
  //   },
  // ],


certifications: [
{
"name": "Java Top 25%",
"body": "Test Dome Certification",
"year": "2024",
"link": ""
},
{
"name": "Kubernetes for the Absolute Beginners - Hands-on Tutorial",
"body": "KodeKloud",
"year": "2024",
"link": ""
},
{
"name": "Software Engineer",
"body": "HackerRank",
"year": "2024",
"link": "",
"skills": "REST APIs, SQL, Python (Programming Language)"
},
{
"name": "Getting started with Devops on AWS",
"body": "Amazon Web Services (AWS)",
"year": "2023",
"link": "",
"skills": "DevOps, Amazon Web Services (AWS)"
},
{
"name": "Getting Started with DevOps using Azure DevOps & Docker",
"body": "Udemy",
"year": "2020",
"link": "",
"credential_id": "UC-6a233923-8ace-4e2f-9371-1a2b5f3cf970"
},
{
"name": "Linux for Cloud and DevOps Engineers",
"body": "Udemy",
"year": "2020",
"link": "",
"credential_id": "UC-279ca450-9496-45bb-9775-b6c3f8bea826"
},
{
"name": "React JS - A Complete Guide for Frontend Web Development",
"body": "Udemy",
"year": "2020",
"link": ""
},
{
"name": "Step into Robotic Process Automation",
"body": "GUVI Geek Networks, IITM Research Park",
"year": "2020",
"link": "",
"credential_id": "8Ta7bK1955O098h197"
},
{
"name": "Fundamentals of Digital Marketing",
"body": "Google",
"year": "2020",
"link": "",
"credential_id": "CED L5E KP6"
},
{
"name": "Intro to Node JS and Express",
"body": "Udemy",
"year": "2020",
"link": "",
"credential_id": ""
},
{
"name": "Javascript and JQuery from Scratch",
"body": "Eduonix Learning Solutions Pvt Ltd",
"year": "2020",
"link": "",
"credential_id": ""
},
{
"name": "Svelte JS - The Complete Guide (incl. sapper)",
"body": "Udemy",
"year": "2020",
"link": "",
"credential_id": ""
},
{
"name": "The Complete Typescript Programming Guide",
"body": "Eduonix Learning Solutions Pvt Ltd",
"year": "2020",
"link": "",
"credential_id": ""
},
{
"name": "Web Development from Scratch",
"body": "Eduonix Learning Solutions Pvt Ltd",
"year": "2020",
"link": "",
"credential_id": ""
}
],
  
  educations: [
    {
      institution: 'National Engineering College',
      degree: 'Computer Science and Engineering',
      from: '2017',
      to: '2021',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'joeralph', // to hide blog section, keep it empty
    limit: 3, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'synthwave',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      // 'light',
      // 'dark',
      // 'cupcake',
      // 'bumblebee',
      // 'emerald',
      // 'corporate',
      'synthwave',
      // 'retro',
      // 'cyberpunk',
      // 'valentine',
      // 'halloween',
      // 'garden',
      // 'forest',
      // 'aqua',
      // 'lofi',
      // 'pastel',
      // 'fantasy',
      // 'wireframe',
      // 'black',
      // 'luxury',
      // 'dracula',
      // 'cmyk',
      // 'autumn',
      // 'business',
      // 'acid',
      // 'lemonade',
      // 'night',
      // 'coffee',
      // 'winter',
      // 'dim',
      // 'nord',
      // 'sunset',
      // 'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  // footer: `Made with <a 
  //     class="text-primary" href="https://github.com/arifszn//Joe-Ralph"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;

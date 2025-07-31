export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    website: 'https://aherendeen.com',
    title: 'Andrew Herendeen',
    subtitle: 'Andrew Herendeen\'s Website',
    description: 'Personal website of Andrew Herendeen, a business consultant and developer.',
    image: {
        src: '/andrew-work.png',
        alt: 'Andrew Herendeen - Business Consultant and Developer'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        }
    ],
    socialLinks: [
        {
            text: 'GitHub',
            href: 'https://github.com/aherendeen'
        },
        {
            text: 'Instagram',
            href: 'https://instagram.com/andrewherendeen'
        },
        {
            text: 'X',
            href: 'https://x.com/_aherendeen'
        }
    ],
    hero: {
        title: 'Hello, World!',
        text: "I'm **Andrew Herendeen**, a business consultant and developer. My approach involves embracing intuition, conducting just enough research, and leveraging aesthetics as a catalyst for exceptional products. I have a profound appreciation for top-notch software, visual design, and the principles of product-led growth. Feel free to explore some of my coding endeavors on <a href='https://github.com/aherendeen'>GitHub</a> or follow me on <a href='https://twitter.com/_aherendeen'>Twitter/X</a>.",
        image: {
            src: '/avatar.png',
            alt: 'Andrew Herendeen'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    // subscribe: {
    //     title: 'Subscribe to my newsletter',
    //     text: 'One update per week. All the latest posts directly in your inbox.',
    //     formUrl: '#'
    // },
    postsPerPage: 4,
    projectsPerPage: 4
};

export default siteConfig;

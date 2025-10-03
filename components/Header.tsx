import React, { useState } from 'react';

// SVG Icons
const TwitterIcon = () => (
    <svg role="img" aria-label="Twitter" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transition-opacity hover:opacity-70"><path d="M22.46 6.54c-.81.36-1.68.61-2.59.71a4.54 4.54 0 0 0 1.98-2.49 9.07 9.07 0 0 1-2.86 1.09 4.52 4.52 0 0 0-7.7 4.12A12.83 12.83 0 0 1 3.22 5.44a4.52 4.52 0 0 0 1.4 6.04 4.49 4.49 0 0 1-2.05-.56v.06a4.52 4.52 0 0 0 3.63 4.44c-.67.18-1.38.21-2.05.08a4.52 4.52 0 0 0 4.22 3.14A9.09 9.09 0 0 1 2.39 18.8a12.77 12.77 0 0 0 6.92 2.02c8.3 0 12.84-6.88 12.84-12.84 0-.2 0-.39-.02-.58a9.14 9.14 0 0 0 2.23-2.31z" fill="#111"/></svg>
);
const GithubIcon = () => (
    <svg role="img" aria-label="GitHub" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transition-opacity hover:opacity-70"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.489.5.09.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.604-3.37-1.34-3.37-1.34-.454-1.156-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.03 1.532 1.03.892 1.53 2.34 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.943 0-1.09.39-1.984.03-2.682-.104-.253-.474-1.266.078-2.64 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.82c.85.004 1.705.115 2.504.337 1.91-1.296 2.747-1.026 2.747-1.026.552 1.374.182 2.387.08 2.64.64.7.026 1.59.026 2.682 0 3.84-2.337 4.687-4.565 4.935.359.308.678.92.678 1.852 0 1.338-.012 2.418-.012 2.747 0 .267.18.577.688.48A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" fill="#111"/></svg>
);
const LinkedinIcon = () => (
    <svg role="img" aria-label="LinkedIn" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transition-opacity hover:opacity-70"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.5 18H5.5v-9h3v9zM7 8.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM18.5 18h-3v-4.25c0-1.02-.02-2.32-1.42-2.32-1.42 0-1.64 1.11-1.64 2.25V18h-3v-9h2.88v1.31h.04c.4-.76 1.38-1.56 2.77-1.56 2.96 0 3.5 1.95 3.5 4.48V18z" fill="#111"/></svg>
);
const PinterestIcon = () => (
    <svg role="img" aria-label="Pinterest" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transition-opacity hover:opacity-70"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.29 2.81 7.91 6.64 9.32.02-.18.01-.39-.04-.57-.16-.65-.67-2.82-.67-2.82s-.18-.35-.18-.86c0-.81.47-1.41 1.05-1.41.5 0 .73.37.73.82 0 .5-.32 1.24-.49 1.93-.14.58.29 1.06.87 1.06 1.04 0 1.83-1.1 1.83-2.68 0-1.41-1.03-2.42-2.28-2.42-1.57 0-2.58 1.17-2.58 2.47 0 .44.17.92.38 1.18.05.07.06.13.04.22-.06.28-.2.82-.24.99-.02.08-.08.1-.19.06-1.03-.42-1.68-1.7-1.68-2.9 0-2.22 1.6-4.28 4.67-4.28 2.45 0 4.31 1.76 4.31 4.02 0 2.43-1.54 4.36-3.69 4.36-.74 0-1.44-.38-1.68-.82 0 0-.36 1.43-.45 1.81-.13.52-.45.98-.68 1.32C9.92 21.61 10.94 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" fill="#111"/></svg>
);
const DribbbleIcon = () => (
    <svg role="img" aria-label="Dribbble" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transition-opacity hover:opacity-70"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm6.735 12.35c-.172.09-.344.18-.517.27-1.297.68-2.68 1.1-4.14 1.25-.264.02-.529.04-.793.04-2.128 0-4.11-.6-5.83-1.68-.18-.11-.35-.22-.52-.34.02.02.04.04.06.06.11.1.22.19.33.29 1.92 1.51 4.28 2.45 6.88 2.45 1.45 0 2.82-.33 4.07-.94.02-.01.04-.02.06-.03-.22-.16-.43-.32-.64-.49zm-1.1-3.13c-.23.63-.51 1.24-.84 1.8-.33.56-.7 1.09-1.12 1.57-.42.48-.88.92-1.39 1.3-1.31 1.01-2.88 1.63-4.58 1.79-1.7.16-3.35-.14-4.84-.87-.4-.2-.78-.42-1.14-.66C3.95 12.83 3.4 11.23 3.4 9.5c0-.49.07-.97.2-1.44.13-.47.3-.92.51-1.34.42-.84.99-1.57 1.69-2.16.7-.59 1.52-1.03 2.42-1.3l.06-.02c.02 0 .04-.01.06-.01.08 0 .16.01.24.02.08.01.16.03.24.05.5.12 1 .31 1.47.55.47.24.91.53 1.32.86.41.33.78.7 1.12 1.1.34.4.64.84.9 1.31.26.47.48.97.65 1.49.17.52.28 1.06.33 1.61.05.55.03 1.1-.03 1.65zm1.61-3.61c-.04-.49-.13-.98-.26-1.46-.13-.48-.3-.95-.52-1.4-.44-.9-1.02-1.7-1.72-2.38-.7-.68-1.53-1.21-2.45-1.56-.92-.35-1.9-.5-2.88-.43-1.95.14-3.69 1.03-4.93 2.45-1.24 1.42-1.9 3.29-1.84 5.2.06 1.91.87 3.65 2.23 4.9.07.07.15.13.22.19.04.03.07.06.11.09.28.21.57.4.88.58.3.18.62.34.95.48.33.14.67.26 1.02.36.35.1.7.18 1.06.24.36.06.73.09 1.1.09.73 0 1.44-.08 2.13-.24.69-.16 1.35-.4 1.98-.71.63-.31 1.22-.69 1.76-1.13.54-.44 1.03-.94 1.46-1.49.43-.55.8-1.15 1.1-1.79.3-.64.53-1.3.68-1.98z" fill="#111"/></svg>
);
const MoonIcon = () => (
    <svg role="img" aria-label="Theme toggle" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transition-opacity hover:opacity-70"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-16a8 8 0 0 0 0 16z" fill="#111"/></svg>
);
const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
);
const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('Home');
    const navLinks = ['Home', 'About', 'Skills', 'Experience', 'Education', 'Contact'];
    const socialLinks = [
        // { Icon: TwitterIcon, href: '#', name: 'Twitter' },
        // { Icon: GithubIcon, href: '#', name: 'GitHub' },
        { Icon: LinkedinIcon, href: 'https://www.linkedin.com/in/maheshfsd/', name: 'LinkedIn' },
        // { Icon: PinterestIcon, href: '#', name: 'Pinterest' },
        // { Icon: DribbbleIcon, href: '#', name: 'Dribbble' },
        { Icon: MoonIcon, href: '#', name: 'Theme' },
    ];

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');
        if (!href || !href.startsWith('#')) return;

        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        
        if (isMenuOpen) {
            setIsMenuOpen(false);
        }
    };

    return (
        // <header className="fixed top-0 left-0 right-0 z-50 bg-blue-500/90 backdrop-blur-sm">
        <header
            className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
            style={{ backgroundColor: "#4955fd" }} // hex color here
            >

            <div className="container mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between h-24">
                {/* Desktop Nav Links */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                        key={link}
                        href={`#${link.toLowerCase()}`}
                        onClick={() => setActiveLink(link)}
                        className={`font-medium text-lg transition-colors relative px-4 py-2 rounded`}
                        style={{
                            backgroundColor: activeLink === link ? "#1E90FF" : "transparent", // hex bg
                            color: activeLink === link ? "#FFFFFF" : "#0b0e04ff", // hex text
                        }}
                        >
                        {link}
                        </a>

                    ))}
                </nav>

                
                
                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Open menu">
                        <MenuIcon />
                    </button>
                </div>

                {/* Desktop Social Icons */}
                <div className="hidden md:flex items-center gap-5">
                {socialLinks.map(({ Icon, href, name }) => (
                    <a key={name} href={href} target={href.startsWith('http') ? "_blank" : "_self"} rel="noopener noreferrer" aria-label={name}>
                        <Icon />
                    </a>
                ))}
            </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-background p-6">
                    <div className="flex justify-end mb-8">
                         <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
                            <CloseIcon />
                        </button>
                    </div>
                    <nav className="flex flex-col items-center gap-8">
                        {navLinks.map((link) => (
                             <a key={link} href={`#${link.toLowerCase()}`} onClick={handleNavClick} className="font-medium text-primary text-2xl">
                                {link}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
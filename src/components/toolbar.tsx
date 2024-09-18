import React, { useEffect, useState, RefObject } from 'react';

// Define el tipo para las referencias
interface Sections {
    homeRef: RefObject<HTMLDivElement>;
    aboutMeRef: RefObject<HTMLDivElement>;
    serviceRef: RefObject<HTMLDivElement>;
    mediaRef: RefObject<HTMLDivElement>;
    contactRef: RefObject<HTMLDivElement>;
}

// Define el tipo para las props
interface ToolbarProps {
    sections: Sections;
}

const Toolbar: React.FC<ToolbarProps> = ({ sections }) => {
    const [isScrolldown, setIsScrolldown] = useState(false);
    const [isAtTop, setIsAtTop] = useState(true); // Inicialmente en la parte superior
    const [isPause, setIsPause] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        let timeout: number | undefined;
        let lastScrollTop = 0;

        const handleScroll = () => {
            if (window.scrollY === 0) {
                if (timeout !== undefined) {
                    clearTimeout(timeout);
                }

                timeout = window.setTimeout(() => {
                    setIsAtTop(true);
                    setIsScrolldown(false);
                }, 750);
            } else {
                if (window.scrollY > lastScrollTop) {
                    setIsAtTop(false);
                    setIsScrolldown(true);
                    if (timeout !== undefined) {
                        clearTimeout(timeout);
                    }

                    timeout = window.setTimeout(() => {
                        setIsPause(true);
                        setIsScrolldown(false);
                    }, 750);
                } else {
                    setIsAtTop(false);
                    setIsPause(false);
                    setIsScrolldown(true);
                    if (timeout !== undefined) {
                        clearTimeout(timeout);
                    }
                    timeout = window.setTimeout(() => {
                        setIsPause(true);
                    }, 750);
                }
            }

            lastScrollTop = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (timeout !== undefined) {
                clearTimeout(timeout);
            }
        };
    }, []);

    const scrollToSection = (ref: RefObject<HTMLDivElement>) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={`Toolbar ${isScrolldown ? 'scroll-down' : ''} ${isAtTop ? 'at-top' : ''} ${isPause ? 'is-pause' : ''}`}>
            <div className='Toolbar-nombre'>
                <h1 className={`Toolbar-nombre2 ${isPause ? 'is-pause' : ''}`} onClick={() => scrollToSection(sections.homeRef)}>
                    Albert Formatger
                </h1>
            </div>
            <div className={`HamburguesaButton ${isScrolldown ? 'scroll-down' : ''} ${isAtTop ? 'at-top' : ''} ${isPause ? 'is-pause' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                ☰
            </div>
            {isMenuOpen && (
                <div className='Mobile-menu'>
                    <a className='Mobile-menu-item' onClick={() => { scrollToSection(sections.homeRef); setIsMenuOpen(false) }}>Home</a>
                    <a className='Mobile-menu-item' onClick={() => { scrollToSection(sections.aboutMeRef); setIsMenuOpen(false) }}>About me</a>
                    <a className='Mobile-menu-item' onClick={() => { scrollToSection(sections.serviceRef); setIsMenuOpen(false) }}>Services</a>
                    <a className='Mobile-menu-item' onClick={() => { scrollToSection(sections.mediaRef); setIsMenuOpen(false) }}>Media</a>
                    <a className='Mobile-menu-item' onClick={() => { scrollToSection(sections.contactRef); setIsMenuOpen(false) }}>Contact</a>
                    <a onClick={() => setIsMenuOpen(false)}><span className='close-icon'>x</span></a>
                </div>
            )}

            <div className='Toolbar-button'>
                <a className={`Button-style ${isPause ? 'is-pause' : ''}`} onClick={() => scrollToSection(sections.homeRef)}>Home</a>
                <a className={`Button-style ${isPause ? 'is-pause' : ''}`} onClick={() => scrollToSection(sections.aboutMeRef)}>About me</a>
                <a className={`Button-style ${isPause ? 'is-pause' : ''}`} onClick={() => scrollToSection(sections.serviceRef)}>Services</a>
                <a className={`Button-style ${isPause ? 'is-pause' : ''}`} onClick={() => scrollToSection(sections.mediaRef)}>Media</a>
                <a className={`Button-style ${isPause ? 'is-pause' : ''}`} onClick={() => scrollToSection(sections.contactRef)}>Contact</a>
            </div>
        </div>
    );
};

export default Toolbar;
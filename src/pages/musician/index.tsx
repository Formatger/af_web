import React, { useRef } from 'react';
import Toolbar from '@/components/toolbar';
import MainPage from '@/components/musician/mainPage';
import AboutPage from '@/components/musician/aboutPage';
import ServicePage from '@/components/musician/servicePage';

function MusicianPage() {
    const sections = {
        homeRef: useRef(null),
        aboutMeRef: useRef(null),
        serviceRef: useRef(null),
        mediaRef: useRef(null),
        contactRef: useRef(null),
    };

    return (
        <div>
            <Toolbar sections={sections} />
            <div ref={sections.homeRef}>
                <MainPage />
            </div>
            <div>
                <AboutPage />
            </div>
            <ServicePage />
        </div>
    );
}

export default MusicianPage;

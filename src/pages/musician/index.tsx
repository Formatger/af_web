import React, { useRef } from 'react';
import Toolbar from '@/components/toolbar';
import MainPage from '@/components/musician/mainPage';

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

            </div>
        </div>
    );
}

export default MusicianPage;

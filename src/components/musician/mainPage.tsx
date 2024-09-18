import { useState, useEffect, useLayoutEffect, useRef } from "react";


function MainPage() {
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const videoRef = useRef<HTMLVideoElement | null>(null);



    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            const handleLoadedData = () => setVideoLoaded(true);
            video.addEventListener('loadeddata', handleLoadedData);
            return () => {
                video.removeEventListener('loadeddata', handleLoadedData);
            };
        } else {
            console.warn("Video element not found.");
        }
    }, []);

    useEffect(() => {
        const screenSize = window.matchMedia("(max-width: 768px)");

        setIsMobile(screenSize.matches)

        const checkIsMobile = (event: MediaQueryListEvent) => {
            setIsMobile(event.matches);
        };

        screenSize.addEventListener('change', checkIsMobile);

        return () => {
            screenSize.removeEventListener('change', checkIsMobile);
        };
    }, []);

    const videoSource = isMobile ? "/Portada-movil.mp4" : "/Portada-pc.mp4";

    return (
        <div className="Cover">
            {!videoLoaded && <div className="loading">LOADING...</div>}
            <video
                ref={videoRef}
                className="video-background" autoPlay muted loop playsInline>
                <source src={videoSource} />
            </video>
            <div className='First_sentence_block'>
                <div className="First_sentence">
                    "Music is like people:
                    Everybody<br /> has a tone and all of them are unique"
                </div>
            </div>
        </div>
    );
}

export default MainPage;


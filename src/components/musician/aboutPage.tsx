import Image from 'next/image';
import { useState } from 'react';
import MediaIcon from '@/components/musician/mediaIcon';

function AboutPage() {
    const abrirCorreo = () => {
        window.location.href = "mailto:albert_furma@hotmail.com";
    };

    const abrirInstagram = () => {
        window.open("https://www.instagram.com/albertformatger/", "_blank");
    };

    const abrirYouTube = () => {
        window.open("https://www.youtube.com/@AlbertFormatger", "_blank");
    };

    const [showIcons, setShowIcons] = useState(false);

    const socialMediaLinks = [
        {
            name: "Instagram",
            username: "@albertformatger",
            followers: "1600+ Followers",
            icon: (
                <svg
                    fill="white"
                    className="svgIcon"
                    viewBox="0 0 448 512"
                    width="100%"
                    height="100%"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                    ></path>
                </svg>
            ),
            action: () => abrirInstagram(),
        },
        {
            name: "YouTube",
            username: "/AlbertFormatger",
            followers: "350+ Subscribers",
            icon: (
                <svg
                    fill="white"
                    className="svgIcon"
                    viewBox="0 0 48 48"
                    width="100%"
                    height="100%"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M20.2838235,29.7208546 L20.2817697,19.3775851 L30.0092421,24.5671906 L20.2838235,29.7208546 Z M41.6409276,17.5856462 C41.6409276,17.5856462 41.2890436,15.0488633 40.2097727,13.9319394 C38.8405739,12.4655276 37.3060444,12.4583393 36.6026186,12.3724221 C31.5649942,12 24.008044,12 24.008044,12 L23.9922983,12 C23.9922983,12 16.4356904,12 11.398066,12.3724221 C10.6939556,12.4583393 9.16045298,12.4655276 7.79091194,13.9319394 C6.71164104,15.0488633 6.36009927,17.5856462 6.36009927,17.5856462 C6.36009927,17.5856462 6,20.5646804 6,23.5437145 L6,26.3365376 C6,29.3152295 6.36009927,32.2946059 6.36009927,32.2946059 C6.36009927,32.2946059 6.71164104,34.8310466 7.79091194,35.9483127 C9.16045298,37.4147246 10.9592378,37.3681718 11.7605614,37.5218644 C14.6406709,37.8042616 24.0001711,37.8915481 24.0001711,37.8915481 C24.0001711,37.8915481 31.5649942,37.8799099 36.6026186,37.5074878 C37.3060444,37.4219129 38.8405739,37.4147246 40.2097727,35.9483127 C41.2890436,34.8310466 41.6409276,32.2946059 41.6409276,32.2946059 C41.6409276,32.2946059 42,29.3152295 42,26.3365376 L42,23.5437145 C42,20.5646804 41.6409276,17.5856462 41.6409276,17.5856462 L41.6409276,17.5856462 Z" />
                </svg>
            ),
            action: () => abrirYouTube(),
        },
        {
            name: "E-Mail",
            username: "albert_furma@hotmail.com",
            followers: "How can I help you?",
            icon: (
                <svg
                    fill="white"
                    className="svgIcon"
                    viewBox="0 0 64 64"
                    width="80%"
                    height="100%"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M2 12h60l-30 24L2 12zm0 4l30 24 30-24v36H2V16z" />
                </svg>
            ),
            action: () => abrirCorreo(),
        }

    ];

    return (
        <div className="About">
            <div className="container-image">
                <div className="description-image">
                    <Image
                        src='/musician/imagen-bio.jpg'
                        alt='Descripción de la imagen'
                        layout='fill'
                        objectFit='cover'
                        objectPosition='right center'
                        priority
                    />
                </div>
                <div
                    className={`container-icon ${showIcons ? 'visible' : ''}`}
                    onMouseEnter={() => setShowIcons(true)}
                    onMouseLeave={() => setShowIcons(false)}
                >
                    {socialMediaLinks.map((link, index) => (
                        <MediaIcon key={index} socialMediaLink={link} />
                    )
                    )
                    }
                </div>
            </div>
            <div className="description-container">
                <h1>ABOUT ME</h1>
                <p >
                    Born on February 21, 1995 in Barcelona, this musician began his journey in the world of music at the age of 12,
                    learning to play the guitar self-taught.<br /><br />

                    Inspired by legends like Angus Young, Ritchie Blackmore, and Slash among others, he attended weekly classes for four years
                    and continued his training self-taught.<br /><br />

                    At 14, he formed his first rock band, which is still active today. At 16, he recorded two EPs: one with a Catalan pop-rock group
                    and another with his rock band. That same year, his father gave him a handmade guitar, the first of a completed trilogy.<br /><br />

                    He has collaborated in recording and composing guitar arrangements for various albums and musical projects. Since the age of 17,
                    he has dedicated himself intensely to live concerts, increasing his demand and stage presence.<br /><br />

                    Currently, he is recording his first album with the rock band Black Amber. Additionally, he performs live with different projects,
                    notably in the tribute to Fito y Fitipaldis, teaches guitar, and participates in studio sessions both online and in-person.
                </p>
                <div className="getlinks-container"
                    onMouseEnter={() => setShowIcons(true)}
                    onMouseLeave={() => setShowIcons(false)}
                >
                    <span className="text">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            className="bi bi-send-fill"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"
                            ></path>
                        </svg>
                    </span>
                </div>
            </div >
        </div >
    );
}

export default AboutPage;
import Image from 'next/image'

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

    return (
        <div className="About">
            <div className="description-image">
                <Image
                    src='/musician/imagen-bio.jpg'
                    alt='Description Image'
                    layout='fill'
                    objectFit='cover'
                    objectPosition='right center'
                    priority
                />
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
                <div className="contenedor-icon">
                    <Image
                        src='/icon/instagram.png'
                        alt='Instagram Icon'
                        width={64}
                        height={64}
                        onClick={abrirInstagram}
                        style={{ cursor: 'pointer' }}
                    />
                    <Image
                        src='/icon/youtube.png'
                        alt='YouTube Icon'
                        width={64}
                        height={64}
                        onClick={abrirYouTube}
                        style={{ cursor: 'pointer' }}
                    />
                    {/* <Badge /> */}
                </div>
            </div >
        </div >
    );
}

export default AboutPage;


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
            <div className="Foto_desc">
            </div>
            <div className="Descripcion">
                <a className='Title'>ABOUT ME</a>
                <div className="contenedor-contenido">
                    <div className="contenido">

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
                        {/* Nacido el 21 de febrero de 1995 en Barcelona, este músico inició su viaje en el mundo de la música a los 12 años, 
                        aprendiendo a tocar la guitarra de forma autodidacta.<br /><br />

                        Inspirado por leyendas como Angus Young, Ritchie Blackmore, y Slash entre otros, asistió a clases semanales 
                        durante cuatro años y continuó su formación de manera autodidacta.<br /><br />

                        A los 14 años, formó su primera banda de rock, que sigue activa hoy en día. A los 16, grabó dos EPs: uno con un grupo de pop-rock 
                        catalán y otro con su banda de rock. Ese mismo año, su padre le regaló una guitarra artesanal, la primera de una trilogía finalizada.<br /><br />

                        Ha colaborado en la grabación y composición de arreglos de guitarra para diversos álbumes y proyectos musicales. Desde los 17 años, 
                        se ha dedicado intensamente a los conciertos en vivo, incrementando su demanda y presencia en el escenario.<br /><br />

                        Actualmente, está grabando su primer disco con la banda de rock Black Amber. Además, realiza actuaciones en vivo con diferentes proyyectos, destacando en 
                        el tributo a Fito y Fitipaldis, enseña guitarra y participa en sesiones de estudio tanto online como presenciales. */}


                        {/* Nacido el 21 de febrero de 1995 en Barcelona, España, este músico comenzó su viaje
                        en el mundo de la música a los 12 años cuando le regalaron una guitarra eléctrica a su hermana.
                        <br /><br />
                        En poco tiempo, su hermana empezó a prestarle la guitarra para que pudiera iniciar su aprendizaje
                        por sí mismo. Fue entonces cuando sus padres compartieron con él sus gustos musicales.
                        Se convirtió en el primer músico de la familia.
                        <br /><br />
                        Aprendió a tocar piezas musicales de las leyendas de las seis cuerdas, como Angus Young, Ritchie Blackmore,
                        Slash, BB King, David Gilmour y Clapton, así como Hendrix.
                        <br /><br />
                        Después de aproximadamente dos años de experimentar y aprender lo que podía de YouTube, al ver su
                        habilidad en el instrumento, comenzó a recibir clases de guitarra de 30 minutos semanales durante 4 años con diferentes maestros.
                        Luego, continuó su formación de forma autodidacta, tal como lo hizo al principio.
                        <br /><br />
                        A los 14 años, ya había formado su primera banda de rock, con la que todavía está en funcionamiento en la
                        actualidad.
                        <br /><br />
                        A los 16 años, grabó un EP de 4 temas con un grupo de pop - rock catalán con el que se unió, y otro con su
                        banda de rock.
                        <br /><br />
                        A esa edad, su padre le regaló una guitarra completamente artesanal hecho por él, y más tarde llegaria una mas.
                        Actualmente, está en proceso la construcción de su la tercera guitarra para terminar la triologia.
                        <br /><br />
                        A los 17 años, participó en la grabación y composición de arreglos de guitarra para el álbum del artista
                        Marcos Franz, y desde entonces ha colaborado con varios artistas en diferentes proyectos.
                        <br /><br />
                        Desde los 18 años, ha dedicado gran parte de su tiempo al mundo de los conciertos en vivo, donde la
                        demanda ha ido en aumento hasta el día de hoy.
                        <br /><br />
                        Actualmente, se encuentra en pleno proceso de grabación de su primer disco con la banda de rock
                        Black Amber. Además, se dedica a realizar actuaciones en vivo(destacando en el tributo a Fitos y el Fitipaldi),
                        a la enseñanza del instrumento y a sesiones de estudio tanto en modalidad online como presencial. */}

                        <div className="contenedor-icon">
                            <img src='/icon/instagram.png' onClick={abrirInstagram} />
                            <img src='/icon/youtube.png' onClick={abrirYouTube} />
                            {/* <Badge /> */}
                        </div>
                    </div >
                </div >
            </div >
        </div >
    );
}

export default AboutPage;
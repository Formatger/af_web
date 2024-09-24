import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/swiper-bundle.css'; // Asegúrate de importar los estilos de Swiper

interface CarouselProps {
    images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
    console.log(images); // Asegúrate de que se estén pasando las rutas correctas

    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
        // Elimina la propiedad autoplay para hacerlo estático
        >
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <div className='fotos-container' style={{ position: 'relative', width: '100%', height: '400px' }}>
                        <Image
                            src={image} // Asegúrate de que esta sea la ruta correcta
                            alt={`Image ${index + 1}`} // Proporciona un texto alternativo para accesibilidad
                            layout="fill" // Ajusta la imagen al tamaño del contenedor
                            objectFit='cover' // Esto asegura que la imagen cubra el contenedor
                        />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Carousel;

// import React from "react";
// import Flickity from "react-flickity-component";

// function Carousel({ images }) {

//     const flickityOptions = {
//         initialIndex: 3,
//         wrapAround: true,
//         selectedAttraction: 0.01,
//         autoPlay: true,
//         prevNextButtons: true,
//         pageDots: false,
//         pauseAutoPlayOnHover: false,
//         lazyLoad: 5,
//         fullscreen: true,
//         arrowShape: {
//             x0: 30,
//             x1: 65, y1: 35,
//             x2: 65, y2: 35,
//             x3: 55
//         }


//     }
//     return (
//         <div className="fotos-container">
//             <div className='Title-media'>LIVE MEDIA</div>
//             <div className="carousel-container">
//                 <Flickity
//                     className={'fotos'}
//                     options={flickityOptions}
//                 >
//                     {images.map((image, index) => (
//                         <img src={image} alt="" />
//                     ))}
//                 </Flickity>
//             </div>
//         </div>
//     );
// }

// export default Carousel;
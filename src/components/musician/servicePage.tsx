import React, { useRef } from 'react';
import ServiceCard from './serviceCard';
import { Swiper as SwiperClass } from 'swiper/types'; // Importa el tipo de Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Scrollbar, EffectCube, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube';

const Service: React.FC = () => {
    const services = [
        {
            image: '/musician/live_pic.jpg',
            title: 'Musical Events',
            list: ['Concerts', 'Substitutions / Backup', 'Event Promoter', 'Backline Rental', 
                'Production and Road Management']
        },
        {
            image: '/musician/teacher_pic.jpg',
            title: 'Guitar Lessons',
            list: ['Online / In-person Modality', 'All Styles: Blues, Rock, Heavy, Funk, Jazz, Pop', 
                'Music Theory, Harmony, and Sight-reading', 'Composition, Recording, and Music Editing']
        },
        {
            image: '/musician/studio_pic.jpeg',
            title: 'Session Musician',
            list: ['Online / In-person Modality', 'Guitar Recording', 'Arrangement Composition for Songs', 
                'Musical Composition', 'Music Production']
        }
    ];

    const swiperRef = useRef<SwiperClass | null>(null);

    return (
        <div className="service-container">
            <h1 className="h1-white">SERVICES</h1>
            <div className="container-card">
                <Swiper
                    onSwiper={(swiperInstance) => (swiperRef.current = swiperInstance)} // Asignar la instancia de Swiper
                    modules={[Scrollbar, Pagination, Navigation, Autoplay, EffectCube]}
                    loop={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 1000,
                    }}
                    speed={5000}
                    effect="cube"
                    cubeEffect={{
                        shadow: false,
                        slideShadows: false,
                    }}
                >
                    {services.map((service, index) => (
                        <SwiperSlide key={index}>
                            <ServiceCard
                                image={service.image}
                                title={service.title}
                                list={service.list}
                                swiperRef={swiperRef} // Pasar swiperRef directamente
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Service;


// const Service: React.FC = () => {
//     const services = [
//         {
//             image: '/musician/live_pic.jpg',
//             title: 'Musical Events',
//             list: ['Concerts', 'Substitutions / Backup', 'Event Promoter', 'Backline Rental', 'Production and Road Management']
//         },
//         {
//             image: '/musician/teacher_pic.jpg',
//             title: 'Guitar Lessons',
//             list: ['Online / In-person Modality', 'All Styles: Blues, Rock, Heavy, Funk, Jazz, Pop', 'Music Theory, Harmony, and Sight-reading', 'Composition, Recording, and Music Editing']
//         },
//         {
//             image: '/musician/studio_pic.jpeg',
//             title: 'Sesion Musician',
//             list: ['Online / In-person Modality', 'Guitar Recording', 'Arrangement Composition for Songs', 'Musical Composition', 'Music Production']
//         }
//     ];

//     return (
//         <div className="service-container">
//             <h1 className="h1-white">SERVICES</h1>
//             <div className='container-card'>
//                 <Swiper
//                     modules={[Scrollbar, Autoplay, EffectCube]}
//                     autoplay={{delay:3000}}
//                     effect='cube'
//                 >
//                     {services.map((service, index) => (
//                         <SwiperSlide>
//                             <ServiceCard
//                                 key={index}
//                                 image={service.image}
//                                 title={service.title}
//                                 list={service.list}
//                             />
//                         </SwiperSlide>
//                     ))}

//                 </Swiper>
//             </div>
//             <div className="imagen-fondo-2">

//             </div>
//         </div>
//     );
// };

// export default Service;


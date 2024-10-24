import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import Image from 'next/image';

interface CarouselProps {
    images: string[]; // Array de URLs de imágenes
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
    console.log(images); // Verificar si las imágenes son accesibles

    return (
        <Swiper
            navigation
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            spaceBetween={0}
            slidesPerView={2}
            loop={true}
            autoplay={{
                delay: 3000,
            }}
            grabCursor={true}
            centeredSlides={true}
            effect="coverflow"
            coverflowEffect={{
                depth: 300,
                rotate: -0,
                stretch: 200,
                slideShadows: false,
            }}
        >
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <Image
                        src={image} // URL de la imagen
                        alt=''
                        layout="fill"
                        objectFit="contain" // Ajustar la imagen para cubrir el contenedor
                        className='carousel.image'

                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Carousel;

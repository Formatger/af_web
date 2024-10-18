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
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            autoplay={{
                delay: 3000,
            }}
            grabCursor={true}
            centeredSlides={true}
            effect="coverflow"
            coverflowEffect={{
                depth: 250,
                rotate: 0,
                stretch: 20,
                modifier: 3.5,
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

                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Carousel;

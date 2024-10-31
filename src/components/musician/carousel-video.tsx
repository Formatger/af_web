import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow, Scrollbar } from 'swiper/modules';
import Youtube from "react-youtube"

interface CarouselVideoProps {
    videos: string[]; // Array de URLs de imágenes
}

const CarouselVideo: React.FC<CarouselVideoProps> = ({ videos }) => {
    return (
        <Swiper
            modules={[Scrollbar, Pagination, Navigation, Autoplay, EffectCoverflow]}
            pagination={{
                el: ".swiper-pagination",
                clickable: true,
            }}
            loop={true}
            loopAdditionalSlides={2}
            centeredSlides={true}
            slidesPerView={3}
            spaceBetween={-600}
            autoplay={{
                delay: 3000,
            }}
            effect="coverflow"
            coverflowEffect={{
                slideShadows: false,
                depth: 400,
                rotate: -10,
            }}
        >
            {videos.map((video, index) => (
                <SwiperSlide key={index}>
                    <Youtube 
                    videoId={video}
                    />
                </SwiperSlide>
            ))}
            <div className='swiper-pagination-container'>
                <div className="swiper-pagination">
                </div>
            </div>
        </Swiper>
    );
};

export default CarouselVideo;

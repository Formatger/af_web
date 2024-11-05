import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow, Scrollbar } from 'swiper/modules';
import Youtube from "react-youtube"

interface CarouselVideoProps {
    videos: string[]; // Array de URLs de imágenes
}

const CarouselVideo: React.FC<CarouselVideoProps> = ({ videos }) => {
    return (
        <div className='carousel-video-container'>
            <div >
                <Swiper
                    modules={[Scrollbar, Pagination, Navigation, Autoplay, EffectCoverflow]}
                    pagination={{
                        el: ".video-swiper-pagination",
                        clickable: true,
                    }}
                    loop={true}
                    loopAdditionalSlides={4}
                    centeredSlides={true}
                    slidesPerView={2}
                    spaceBetween={-400}
                    autoplay={{
                        delay: 3000,
                    }}
                    speed={2000}
                    effect="coverflow"
                    coverflowEffect={{
                        slideShadows: false,
                        depth: 370,
                        rotate: -10,
                    }}
                >
                    <div className='carousel-video .swiper-slide'>
                        {videos.map((video, index) => (
                            <SwiperSlide key={index}>
                                <Youtube
                                    videoId={video}
                                />
                            </SwiperSlide>
                        ))}
                    </div >
                </Swiper>
                <div className='video-swiper-pagination'>
                </div>
            </div >
        </div >
    );
};

export default CarouselVideo;

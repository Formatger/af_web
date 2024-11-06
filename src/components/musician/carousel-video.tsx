import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow, Scrollbar } from 'swiper/modules';
import Youtube from "react-youtube"
import { useState } from 'react';

interface CarouselVideoProps {
    videos: string[]; // Array de URLs de imágenes
}

const CarouselVideo: React.FC<CarouselVideoProps> = ({ videos }) => {

    const [isStop, setIsStop] = useState<boolean>(false)

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
                    autoplay={isStop ? false : { delay: 3000 }}
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
                                    onPlay={() =>  setIsStop(true) }ss
                                    onEnd={() =>  setIsStop(false) }
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

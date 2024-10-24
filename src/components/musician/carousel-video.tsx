import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow, Scrollbar } from 'swiper/modules';
import Youtube from "react-youtube"

interface CarouselVideoProps {
    videos: string[]; // Array de URLs de imágenes
}

const CarouselVideo: React.FC<CarouselVideoProps> = ({ videos }) => {
    return (
        <Swiper
            modules={[Scrollbar, Navigation, Autoplay, EffectCoverflow]}
            navigation={true}
            scrollbar={{
                draggable:true,
                dragClass:"swiper-scrollbar-drag",
                dragSize:300,
                
            }}
            slidesPerView={3}
            spaceBetween={0}
            autoplay={{
                delay: 3000,
            }}
            effect="coverflow"
            coverflowEffect={{
                slideShadows: false,
                depth: 300,
                rotate: -10,

            }
            }
        >
            {videos.map((video, index) => (
                <SwiperSlide key={index}>
                    <Youtube
                        videoId={video}

                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default CarouselVideo;

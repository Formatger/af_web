import React from "react";
import Carousel from "./carousel";
import CarouselVideo from "./carousel-video";
// import VideoSlider from "./Video_slider";
import { useEffect, useState } from "react";


function Media() {

    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);
        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);

    // let images;
    let serviceImages;

    const images = [

        // '/musician/1.jpg', '/musician/2.jpg', '/musician/3.jpg', '/musician/4.jpg',
        // '/musician/5.jpg', '/musician/6.jpg', '/musician/7.jpg', '/musician/8.jpg',
        // '/musician/9.jpg', '/musician/10.jpg', '/musician/11.jpg', '/musician/12.jpg',
        // '/musician/13.jpg', '/musician/14.jpg', '/musician/15.jpg', '/musician/16.jpg',
        // '/musician/17.jpg', '/musician/18.jpg', '/musician/19.jpg', '/musician/20.jpg',
        // '/musician/21.jpg', '/musician/22.jpg', '/musician/23.jpg', '/musician/24.jpg',
        // '/musician/25.jpg', '/musician/26.jpg', '/musician/27.jpg', '/musician/28.jpg',
        // '/musician/29.jpg', '/musician/30.jpg', '/musician/31.jpg', '/musician/32.jpg',
        // '/musician/33.jpg', '/musician/34.jpg', '/musician/35.jpg', '/musician/36.jpg',
        // '/musician/37.jpg', '/musician/38.jpg', '/musician/39.jpg', '/musician/41.jpg',
        // '/musician/42.jpg', '/musician/43.jpg', '/musician/44.jpg', '/musician/45.jpg',
        // '/musician/46.jpg', '/musician/47.jpg', '/musician/48.jpg', '/musician/49.jpg',
        // '/musician/50.jpg', '/musician/51.jpg', '/musician/52.jpg', '/musician/53.jpg',
        // '/musician/54.jpg', '/musician/55.jpg', '/musician/56.jpg', '/musician/57.jpg',
        // '/musician/58.jpg', '/musician/59.jpg', '/musician/60.jpg', '/musician/61.jpg',
        // '/musician/62.jpg', '/musician/63.jpg'
    ]

    // if (isMobile) {
    //     images = [
    //         'fotos/fotos-movil/1.jpg', 'fotos/fotos-movil/2.jpg', 'fotos/fotos-movil/3.jpg', 'fotos/fotos-movil/4.jpg',
    //         'fotos/fotos-movil/5.jpg', 'fotos/fotos-movil/6.jpg', 'fotos/fotos-movil/7.jpg', 'fotos/fotos-movil/8.jpg',
    //         'fotos/fotos-movil/9.jpg', 'fotos/fotos-movil/10.jpg', 'fotos/fotos-movil/11.jpg', 'fotos/fotos-movil/12.jpg',
    //         'fotos/fotos-movil/13.jpg', 'fotos/fotos-movil/14.jpg', 'fotos/fotos-movil/15.jpg', 'fotos/fotos-movil/16.jpg',
    //         'fotos/fotos-movil/17.jpg', 'fotos/fotos-movil/18.jpg', 'fotos/fotos-movil/19.jpg', 'fotos/fotos-movil/20.jpg',
    //         'fotos/fotos-movil/21.jpg', 'fotos/fotos-movil/22.jpg', 'fotos/fotos-movil/23.jpg', 'fotos/fotos-movil/24.jpg',
    //         'fotos/fotos-movil/25.jpg', 'fotos/fotos-movil/26.jpg', 'fotos/fotos-movil/27.jpg', 'fotos/fotos-movil/28.jpg',
    //         'fotos/fotos-movil/29.jpg', 'fotos/fotos-movil/30.jpg', 'fotos/fotos-movil/31.jpg', 'fotos/fotos-movil/32.jpg',
    //         'fotos/fotos-movil/33.jpg', 'fotos/fotos-movil/34.jpg', 'fotos/fotos-movil/35.jpg', 'fotos/fotos-movil/36.jpg',
    //         'fotos/fotos-movil/37.jpg', 'fotos/fotos-movil/38.jpg', 'fotos/fotos-movil/39.jpg', 'fotos/fotos-movil/41.jpg',
    //         'fotos/fotos-movil/42.jpg', 'fotos/fotos-movil/43.jpg', 'fotos/fotos-movil/44.jpg', 'fotos/fotos-movil/45.jpg',
    //         'fotos/fotos-movil/46.jpg', 'fotos/fotos-movil/47.jpg', 'fotos/fotos-movil/48.jpg', 'fotos/fotos-movil/49.jpg',
    //         'fotos/fotos-movil/50.jpg', 'fotos/fotos-movil/51.jpg', 'fotos/fotos-movil/52.jpg', 'fotos/fotos-movil/53.jpg',
    //         'fotos/fotos-movil/54.jpg', 'fotos/fotos-movil/55.jpg', 'fotos/fotos-movil/56.jpg', 'fotos/fotos-movil/57.jpg',
    //         'fotos/fotos-movil/58.jpg', 'fotos/fotos-movil/59.jpg', 'fotos/fotos-movil/60.jpg', 'fotos/fotos-movil/61.jpg',
    //         'fotos/fotos-movil/62.jpg',
    //     ];
    // } else {
    //     images = [
    //         '/musician/1.jpg', '/musician/2.jpg', '/musician/3.jpg', '/musician/4.jpg',
    //         '/musician/5.jpg', '/musician/6.jpg', '/musician/7.jpg', '/musician/8.jpg',
    //         '/musician/9.jpg', '/musician/10.jpg', '/musician/11.jpg', '/musician/12.jpg',
    //         '/musician/13.jpg', '/musician/14.jpg', '/musician/15.jpg', '/musician/16.jpg',
    //         '/musician/17.jpg', '/musician/18.jpg', '/musician/19.jpg', '/musician/20.jpg',
    //         '/musician/21.jpg', '/musician/22.jpg', '/musician/23.jpg', '/musician/24.jpg',
    //         '/musician/25.jpg', '/musician/26.jpg', '/musician/27.jpg', '/musician/28.jpg',
    //         '/musician/29.jpg', '/musician/30.jpg', '/musician/31.jpg', '/musician/32.jpg',
    //         '/musician/33.jpg', '/musician/34.jpg', '/musician/35.jpg', '/musician/36.jpg',
    //         '/musician/37.jpg', '/musician/38.jpg', '/musician/39.jpg', '/musician/41.jpg',
    //         '/musician/42.jpg', '/musician/43.jpg', '/musician/44.jpg', '/musician/45.jpg',
    //         '/musician/46.jpg', '/musician/47.jpg', '/musician/48.jpg', '/musician/49.jpg',
    //         '/musician/50.jpg', '/musician/51.jpg', '/musician/52.jpg', '/musician/53.jpg',
    //         '/musician/54.jpg', '/musician/55.jpg', '/musician/56.jpg', '/musician/57.jpg',
    //         '/musician/58.jpg', '/musician/59.jpg', '/musician/60.jpg', '/musician/61.jpg',
    //         '/musician/62.jpg', '/musician/63.jpg']
    // }

    const videos = [
        'MsSVtidaQuk',
        'XUNE5aSKoM4',
        'uDPUu9GiKyU',
        'gV4tXJjxDa4',
        'zXmk-QT-Vlk',
        'o4mvnoW_v7k',
        '8u9YkOMAepM',
        '2QzJe_1aOFU',
    ];

    return (
        <div className='Media' >
            <h1 className="h1-white">MEDIA</h1>
            <div className="carousel-fotos">
                <Carousel images={images} />
            </div>
            <h1 className="h1-white">VIDEO</h1>
            <div className="carousel-video">
                <CarouselVideo videos={videos} />
            </div>
            <div>
                {/* <VideoSlider videos={videos} /> */}
            </div>
        </div >
    );
}

export default Media;

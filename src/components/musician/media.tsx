import React from "react";
import Carousel from "./carousel";
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

    let images;
    let serviceImages;

    if (isMobile) {
        images = [
            'fotos/fotos-movil/1.jpg', 'fotos/fotos-movil/2.jpg', 'fotos/fotos-movil/3.jpg', 'fotos/fotos-movil/4.jpg',
            'fotos/fotos-movil/5.jpg', 'fotos/fotos-movil/6.jpg', 'fotos/fotos-movil/7.jpg', 'fotos/fotos-movil/8.jpg',
            'fotos/fotos-movil/9.jpg', 'fotos/fotos-movil/10.jpg', 'fotos/fotos-movil/11.jpg', 'fotos/fotos-movil/12.jpg',
            'fotos/fotos-movil/13.jpg', 'fotos/fotos-movil/14.jpg', 'fotos/fotos-movil/15.jpg', 'fotos/fotos-movil/16.jpg',
            'fotos/fotos-movil/17.jpg', 'fotos/fotos-movil/18.jpg', 'fotos/fotos-movil/19.jpg', 'fotos/fotos-movil/20.jpg',
            'fotos/fotos-movil/21.jpg', 'fotos/fotos-movil/22.jpg', 'fotos/fotos-movil/23.jpg', 'fotos/fotos-movil/24.jpg',
            'fotos/fotos-movil/25.jpg', 'fotos/fotos-movil/26.jpg', 'fotos/fotos-movil/27.jpg', 'fotos/fotos-movil/28.jpg',
            'fotos/fotos-movil/29.jpg', 'fotos/fotos-movil/30.jpg', 'fotos/fotos-movil/31.jpg', 'fotos/fotos-movil/32.jpg',
            'fotos/fotos-movil/33.jpg', 'fotos/fotos-movil/34.jpg', 'fotos/fotos-movil/35.jpg', 'fotos/fotos-movil/36.jpg',
            'fotos/fotos-movil/37.jpg', 'fotos/fotos-movil/38.jpg', 'fotos/fotos-movil/39.jpg', 'fotos/fotos-movil/41.jpg',
            'fotos/fotos-movil/42.jpg', 'fotos/fotos-movil/43.jpg', 'fotos/fotos-movil/44.jpg', 'fotos/fotos-movil/45.jpg',
            'fotos/fotos-movil/46.jpg', 'fotos/fotos-movil/47.jpg', 'fotos/fotos-movil/48.jpg', 'fotos/fotos-movil/49.jpg',
            'fotos/fotos-movil/50.jpg', 'fotos/fotos-movil/51.jpg', 'fotos/fotos-movil/52.jpg', 'fotos/fotos-movil/53.jpg',
            'fotos/fotos-movil/54.jpg', 'fotos/fotos-movil/55.jpg', 'fotos/fotos-movil/56.jpg', 'fotos/fotos-movil/57.jpg',
            'fotos/fotos-movil/58.jpg', 'fotos/fotos-movil/59.jpg', 'fotos/fotos-movil/60.jpg', 'fotos/fotos-movil/61.jpg',
            'fotos/fotos-movil/62.jpg',
        ];
    } else {
        images = ['/music/1.jpg',
            '/music/1.jpg', '/music/2.jpg', '/music/3.jpg', '/music/4.jpg',
            '/music/5.jpg', '/music/6.jpg', '/music/7.jpg', '/music/8.jpg',
            '/music/9.jpg', '/music/10.jpg', '/music/11.jpg', '/music/12.jpg',
            '/music/13.jpg', '/music/14.jpg', '/music/15.jpg', '/music/16.jpg',
            '/music/17.jpg', '/music/18.jpg', '/music/19.jpg', '/music/20.jpg',
            '/music/21.jpg', '/music/22.jpg', '/music/23.jpg', '/music/24.jpg',
            '/music/25.jpg', '/music/26.jpg', '/music/27.jpg', '/music/28.jpg',
            '/music/29.jpg', '/music/30.jpg', '/music/31.jpg', '/music/32.jpg',
            '/music/33.jpg', '/music/34.jpg', '/music/35.jpg', '/music/36.jpg',
            '/music/37.jpg', '/music/38.jpg', '/music/39.jpg', '/music/41.jpg',
            '/music/42.jpg', '/music/43.jpg', '/music/44.jpg', '/music/45.jpg',
            '/music/46.jpg', '/music/47.jpg', '/music/48.jpg', '/music/49.jpg',
            '/music/50.jpg', '/music/51.jpg', '/music/52.jpg', '/music/53.jpg',
            '/music/54.jpg', '/music/55.jpg', '/music/56.jpg', '/music/57.jpg',
            '/music/58.jpg', '/music/59.jpg', '/music/60.jpg', '/music/61.jpg',
            '/music/62.jpg', '/music/63.jpg']
    }

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
            <div>
                <Carousel images={images} />
            </div>
            <div>
                {/* <VideoSlider videos={videos} /> */}
            </div>
        </div >
    );
}

export default Media;

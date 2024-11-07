import React, { use, useState } from 'react';
import Image from 'next/image';
import { Swiper as SwiperClass } from 'swiper/types';

interface ServiceCardProps {
    image: string;
    title: string;
    list: string[];
    swiperRef: React.RefObject<SwiperClass | null>;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ image, title, list, swiperRef }) => {

    const [getInfo, setGetInfo] = useState<boolean>(false)

    return (
        <div className='card-distribution'>
            <div
                className="card"
                onMouseEnter={() => {
                    swiperRef.current?.autoplay?.stop();
                    setGetInfo(true)
                }}
                onMouseLeave={() => {
                    swiperRef.current?.autoplay?.start();
                    setGetInfo(false)
                }}
            >
                <div className="card-image">
                    <Image
                        src={image}
                        alt="Musical Event"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 100vw, 100vw"
                        fill
                        style={{
                            objectPosition: 'right top',
                        }}
                        priority
                    />
                </div>
                <div className="card-text">
                    <h2>{title}</h2>
                </div>

            </div>
            {getInfo &&
                <ul className="card-list">
                    {list.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            }
        </div>
    );
};

export default ServiceCard;
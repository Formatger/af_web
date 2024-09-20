import React from 'react';
import Image from 'next/image';

interface ServiceCardProps {
    image: string;
    list: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ image, list }) => {
    return (
        <div className="card">
            <div className="card-image">
                <Image
                    src={image}
                    alt='Musical Event'
                    layout='fill'
                    objectFit='cover'
                    priority
                />
            </div>
            <div className="card-text">
                <h2>Musical Events</h2>
                <ul className="card-list">
                    {list.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
        // <div className="imagen-fondo-2"></div>
    );
};

export default ServiceCard;
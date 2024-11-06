import React from 'react';
import Image from 'next/image';

interface ServiceCardProps {
    image: string;
    // title: string,
    // list: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ image, 
    // title, list
}) => {

    return (
        <div className="card">
            <div className="card-image">
                <Image
                    src={image}
                    alt='Musical Event'
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 100vw, 100vw"
                    fill
                    style={{
                        objectPosition: 'right top'
                    }}
                    priority
                />
            </div>
            {/* <div className="card-text">
                <h2>{title}</h2>
                <ul className="card-list">
                    {list.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div> */}
        </div >
    );
};

export default ServiceCard;
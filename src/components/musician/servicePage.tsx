import React from 'react';
import ServiceCard from './serviceCard';

const Service: React.FC = () => {
    const services = [
        {
            image: '/musician/live_pic.jpg',
            list: ['Concerts', 'Substitutions / Backup', 'Event Promoter', 'Backline Rental', 'Production and Road Management']
        },
        {
            image: '/musician/teacher_pic.jpg',
            list: ['Online / In-person Modality', 'All Styles: Blues, Rock, Heavy, Funk, Jazz, Pop', 'Music Theory, Harmony, and Sight-reading', 'Composition, Recording, and Music Editing']
        },
        {
            image: '/musician/studio_pic.jpeg',
            list: ['Online / In-person Modality', 'Guitar Recording', 'Arrangement Composition for Songs', 'Musical Composition', 'Music Production']
        }
    ];

    return (
        <div className="service-container">
            <h1>SERVICES</h1>
            <div className='container-card'>
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        image={service.image}
                        list={service.list}
                    />
                ))}
            </div>
            <div className="imagen-fondo-2"></div>
        </div>
    );
};

export default Service;


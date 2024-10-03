import React from 'react';

interface SocialMediaLink {
    name: string;
    username: string;
    followers: string;
    icon: JSX.Element;
    action: () => void;
}

interface MediaIconProps {
    socialMediaLink: SocialMediaLink; // Solo un enlace de red social
}

const MediaIcon: React.FC<MediaIconProps> = ({ socialMediaLink }) => {
    return (
        <div className="tooltip-container" onClick={socialMediaLink.action}>
            <div className="tooltip">
                <div className="profile">
                    <div className="user">
                        <div className="img"></div>
                        <div className="details">
                            <div className="name">{socialMediaLink.name}</div>
                            <div className="username">{socialMediaLink.username}</div>
                        </div>
                    </div>
                    <div className="about">{socialMediaLink.followers}</div>
                </div>
            </div>
            <div className="text">
                <a className="icon" href="#">
                    <div className="layer">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className={socialMediaLink.name.toLowerCase() + 'SVG'}>
                            {socialMediaLink.icon} {/* Usa el ícono pasado como prop */}
                        </span>
                    </div>
                    <div className="text">{socialMediaLink.name}</div> {/* Muestra el nombre dinámicamente */}
                </a>
            </div>
        </div>
    );
};

export default MediaIcon;

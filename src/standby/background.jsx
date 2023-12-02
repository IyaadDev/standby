import { useEffect, useState } from "react";

function Backgrounds({ isOpen }) {
    const [backgrounds, setBackgrounds] = useState([]);
    const [selectedBackground, setSelectedBackground] = useState(null);

    useEffect(() => {
        fetch("/backgrounds/list.json")
            .then((response) => response.json())
            .then((data) => setBackgrounds(data.backgrounds))
            .catch((error) => console.log(error));
    }, []);

    const handleBackgroundSelect = (background) => {
        setSelectedBackground(background);
        document.body.style.backgroundImage = `url(${background.src})`;
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div className="container">
            <div className="row">
                {backgrounds.map((background, index) => (
                    <BackgroundCard
                        key={index}
                        src={background.src}
                        name={background.name}
                        onSelect={() => handleBackgroundSelect(background)}
                    />
                ))}
            </div>
        </div>
    );
}

function BackgroundCard({ src, name, onSelect }) {
    return (
        <div className="col-md-4">
                <div className="card configClass" style={{ borderStyle: "none" }}>
                    <img className="card-img w-100 d-block" src={src} style={{ filter: "brightness(50%)" }} />
                    <div className="card-img-overlay text-center d-flex flex-column justify-content-center align-items-center p-4" style={{ borderStyle: "none" }}>
                        <h4 className="backgroundName" style={{ color: "rgb(255, 255, 255)" }}>{name}</h4>
                    </div>
                </div>
        </div>
    );
}

export default Backgrounds;

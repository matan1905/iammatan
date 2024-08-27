import React, { useState } from 'react';

function ImageZoom({ src,className }) {
    const [isZoomed, setIsZoomed] = useState(false);

    const toggleZoom = () => {
        setIsZoomed(!isZoomed);
    };

    return (
        <React.Fragment>
            <img
                src={src}
                className={className}
                onClick={toggleZoom}
                style={{ cursor: 'pointer' }}
            />

            {isZoomed && (
                <div
                    onClick={toggleZoom}
                    className={"fixed top-0 right-0 left-0 bottom-0 w-full h-full flex justify-center align-middle"}
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 999,
                    }}
                >
                    <img
                        src={src}
                        style={{
                            maxWidth: '90%',
                            maxHeight: '90%',
                        }}
                    />
                </div>
            )}
        </React.Fragment>
    );
}

export default ImageZoom;
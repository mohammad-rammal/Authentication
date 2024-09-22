import {useState, useEffect} from 'react';

const Cursor = () => {
    const [position, setPosition] = useState({x: 0, y: 0});
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateCursorPosition = (e) => {
            setPosition({x: e.clientX, y: e.clientY});
        };

        document.addEventListener('mousemove', updateCursorPosition);

        return () => {
            document.removeEventListener('mousemove', updateCursorPosition);
        };
    }, []);

    useEffect(() => {
        const handleHover = () => {
            setIsHovering(true);
        };

        const handleLeave = () => {
            setIsHovering(false);
        };

        const trackedElements = document.querySelectorAll('a,link,Link, button,Input,motion,motion.button');

        trackedElements.forEach((element) => {
            element.addEventListener('mouseenter', handleHover);
            element.addEventListener('mouseleave', handleLeave);
        });

        return () => {
            trackedElements.forEach((element) => {
                element.removeEventListener('mouseenter', handleHover);
                element.removeEventListener('mouseleave', handleLeave);
            });
        };
    }, []);

    return (
        <>
            <div
                className="large-cursor"
                style={{
                    position: 'fixed',
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: isHovering ? 'blue' : 'rgba(93, 126, 211, 0.5)',
                    pointerEvents: 'none',
                    zIndex: '9999999999999999',
                    transform: 'translate(-50%, -50%)',
                }}
            ></div>

            <div
                className="custom-cursor"
                style={{
                    position: 'fixed',
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: '#5d94d3',
                    pointerEvents: 'none',
                    zIndex: '9999999999999999',
                    transition: 'transform 0.2s ease',
                    transform: 'translate(-50%, -50%) scale(0.5)',
                }}
            ></div>

            <style>
                {`
                    body {
                        cursor: none;
                    }

                    .custom-cursor {
                        transition: transform 0.2s ease;
                    }

                    .custom-cursor:hover {
                        transform: translate(-50%, -50%) scale(1.2);
                    }
                `}
            </style>
        </>
    );
};

export default Cursor;

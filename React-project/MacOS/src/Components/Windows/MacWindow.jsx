import React from 'react';
import { Rnd } from 'react-rnd';
import './MacWindow.scss';

const MacWindow = ({children }) => {
    return (
        <Rnd
            default={{
                x: 100,
                y: 100,
                width: 500,
                height: 300,
            }}
            minWidth={400}
            minHeight={350}
            bounds="window"
            dragHandleClassName="Mac-Window-Navbar"
            enableResizing={{
                top: true,
                right: true,
                bottom: true,
                left: true,
                topRight: true,
                bottomRight: true,
                bottomLeft: true,
                topLeft: true,
            }}
        >
            <div className="Mac-Window">
                {/* Navbar / Titlebar */}
                <div className="Mac-Window-Navbar">
                    <div className="Mac-Window-Buttons">
                        <span className="Mac-Window-Button close"></span>
                        <span className="Mac-Window-Button minimize"></span>
                        <span className="Mac-Window-Button maximize"></span>
                    </div>
                    <div className="Mac-Window-Title">My Mac Window</div>
                </div>

                {/* Content */}
                <div className="Mac-Window-Content">
                    {children }
                </div>
            </div>
        </Rnd>
    );
};

export default MacWindow;

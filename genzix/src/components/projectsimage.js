// Projectsimage.jsx
import React from 'react';
import './projectsimage.css';

const Projectsimage = ({ index, title, setModal, niech, src1 }) => {
    return (
        <div
            className="project1"
            onMouseEnter={() => {
                setModal({ active: true, index: index });
            }}
            onMouseLeave={() => {
                setModal({ active: false, index: index });
            }}
        >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h2>{title}</h2>
                <h6 style={{ marginTop: "10px" }}>{niech}</h6>
            </div>

            <text >/24</text>
        </div>
    );
}

export default Projectsimage;

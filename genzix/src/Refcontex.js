// RefsContext.js

import React, { createContext, useRef } from 'react';

const RefsContext = createContext();

export const RefsProvider = ({ children }) => {
    const aboutRef = useRef(null);
    const servicesRef = useRef(null);
    const projectRef = useRef(null);

    return (
        <RefsContext.Provider value={{ aboutRef, servicesRef, projectRef }}>
            {children}
        </RefsContext.Provider>
    );
};

export default RefsContext;

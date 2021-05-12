import React from 'react';
import { Navbar } from '../../components/shared/navbar';
import { Footer } from '../../components/shared/footer';

/**
 * El layout se encarga de darle una estructura inicial a las pages.
 * Aqui se debe poner lo que se repita en cada pagina
 */
export const AppLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

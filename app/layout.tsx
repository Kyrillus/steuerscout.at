import '@mantine/core/styles.css';
import '@/globals.css';
import React from 'react';
import {MantineProvider, ColorSchemeScript} from '@mantine/core';
import {theme} from '@/theme';
import Header from "@/components/Navigation/Header";
import Footer from "@/components/Navigation/Footer";

export const metadata = {
    title: 'Steuerberater finden - Steuerscout',
    description: 'Finden Sie Ihren idealen Steuerberater in Österreich.',
};

export default function RootLayout({children}: { children: any }) {
    return (
        <html lang="en">
        <head>
            <ColorSchemeScript/>
            <link rel="shortcut icon" href="/favicon.svg"/>
            <meta
                name="viewport"
                content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
            />
        </head>
        <body>
        <MantineProvider theme={theme}>
            <Header/>
            {children}
            <Footer/>
        </MantineProvider>
        </body>
        </html>
    );
}

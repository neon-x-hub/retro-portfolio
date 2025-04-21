import "nes.css/css/nes.min.css";
import "./globals.css";
import OldTvEffect from "./components/effects/OldTVEffect";
import MobileOnly from "./components/layout/MobileOnly";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
    // === CORE METADATA === //
    title: "[Abderrahmane Memmou] | Full-Stack Developer & Pixel Art Enthusiast",
    description: "Crafting digital experiences with React, Node.js, and vintage aesthetics. Let's build something unforgettable.",
    metadataBase: new URL('https://mmmo.me'), // REPLACE
    keywords: [
        "developer portfolio",
        "React",
        "Next.js",
        "pixel art",
        "calligraphy",
        "retro design",
        "full-stack developer",
        "ENSIA"
    ],

    // === SOCIAL CARDS === //
    openGraph: {
        title: "Press START to Enter Memmou Abderrahmane's Portfolio",
        description: "8-bit inspired developer portfolio with CRT glow effects",
        url: 'https://mmmo.me', // REPLACE
        siteName: 'Memmou Abderrahmane', // REPLACE
        images: [
            {
                url: '/preview.jpg', // 1200x630px
                width: 1200,
                height: 630,
                alt: 'Pixel-art portrait with glitch effects',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: "Loading Memmou Abderrahmane's Portfolio...",
        description: "Yes, this portfolio has a Konami code. Try it.",
        creator: '@abderrahmane_m0',
        images: ['/preview.jpg'],
    },

    // === TECH & MOBILE === //
    //manifest: '/manifest.json', // PWA support

    // === RETRO FLAIR === //
    other: {
        // Playful meta tags
        'generator': 'Notepad.exe',
        'made-with': '90s nostalgia',
        'x-ua-compatible': 'IE=edge,chrome=1',

        // Easter eggs
        'achievement-unlocked': 'Viewed Metadata',
        'high-score': '999,999',

        // Real but fun
        'msapplication-TileColor': '#000000',
        'apple-mobile-web-app-capable': 'yes',
        'apple-mobile-web-app-title': 'Memmou Abderrahmane',
    },

    // === SEO BOOSTERS === //
    alternates: {
        canonical: '/',
    },
    formatDetection: {
        telephone: false, // Prevents phone number parsing
        email: false,
    },
};


export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="relative">
                {/* Vercel Analytics */}
                <Analytics />
                <OldTvEffect />
                <MobileOnly>
                    <div className="grayscale">
                        {children}
                    </div>
                </MobileOnly>
            </body>
        </html>
    );
}

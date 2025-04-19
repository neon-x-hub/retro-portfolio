import "nes.css/css/nes.min.css";
import "./globals.css";
import OldTvEffect from "./components/effects/OldTVEffect";
import MobileOnly from "./components/layout/MobileOnly";

export const metadata = {
    title: "MEMMOU | Portfolio",
    description: "My Portfolio",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="relative">
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

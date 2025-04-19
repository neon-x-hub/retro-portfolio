import React from 'react';
import Image from 'next/image';

/**
 * Renders a list of social links with their respective icons.
 * The social link icons should be stored in the public  on /icons/social/[respective-name].png
 *
 * @returns {ReactElement} A list of social links.
 */
export default function Socials() {

    const SOCIAL_LINKS = {
        github: 'https://github.com/neon-x-hub',
        gmail: 'mailto:abderrahmane.memmou@ensia.edu.dz',
        telegram: 'https://t.me/abderrahmane_m',
        facebook: 'https://www.facebook.com/abderrahmane.m0/',
        x: 'https://x.com/abderrahmane_m0'
    };

    return (
        <>
            {Object.entries(SOCIAL_LINKS).map(([key, url]) => (
                <a key={key} href={url} target="_blank" rel="noopener noreferrer">
                    <Image
                        src={`/icons/social/${key}.png`}
                        width={25}
                        height={25}
                        alt={`${key} icon`}
                    />
                </a>
            ))}
        </>
    );
}

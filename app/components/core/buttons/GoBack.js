"use client";

import Link from "next/link";
import Image from "next/image";
import { Howl } from "howler";

export default function GoBack() {
    const back_003 = new Howl({
        src: ["/sounds/back_003.ogg"],
    });

    return (
        <>
            <Link
                href={"/"}
                className="absolute top-[20px] left-[20px] flex gap-2 items-center z-[9999]"
                onClick={() => back_003.play()}
            >
                {/* Back Arrow */}
                <Image
                    src="/icons/interactions/go-back.png"
                    width={20}
                    height={20}
                    alt="back arrow icon"
                />
            </Link>
        </>
    )
}

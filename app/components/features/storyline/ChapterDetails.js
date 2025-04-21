import Image from "next/image";
export default function ChapterDetails({ item }) {
    if (!item) return (
        <div className="h-[40%] flex items-center flex-col justify-center text-gray-800">
            <video
                src="/gifs/gameboy.webm"
                width={250}
                height={300}
                className="h-auto"
                autoPlay
                loop
                muted
                playsInline
                poster="/gifs/gameboy-poster.jpg"
            />

            <span className=" -translate-y-7">
                Select a Chapter to Start!
            </span>
        </div>
    );

    return (
        <div className="h-[40%] mb-3 overflow-x-scroll scroll-hide bg-gray-300 py-5 px-8 w-[87%]"
            style={{
                clipPath: `polygon(
                        0px calc(100% - 8px),
                        4px calc(100% - 8px),
                        4px calc(100% - 4px),
                        8px calc(100% - 4px),
                        8px 100%,
                        calc(100% - 8px) 100%,
                        calc(100% - 8px) calc(100% - 4px),
                        calc(100% - 4px) calc(100% - 4px),
                        calc(100% - 4px) calc(100% - 8px),
                        100% calc(100% - 8px),
                        100% 8px,
                        calc(100% - 4px) 8px,
                        calc(100% - 4px) 4px,
                        calc(100% - 8px) 4px,
                        calc(100% - 8px) 0px,
                        8px 0px,
                        8px 4px,
                        4px 4px,
                        4px 8px,
                        0px 8px
                        )`,
                scrollbarColor: 'transparent'
            }}>
            <h2 className="text-lg font-bold">{item.name}</h2>
            <p className="font-bold">{item.details}</p>
        </div>
    );
}

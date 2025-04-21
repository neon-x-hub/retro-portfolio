import './Pfp.css'
export default function Pfp({ pfpSize, pfpUrl, pfpPosterUrl }) {

    return (
        <div
            className="pixel-corners--wrapper absolute left-1/2 transform -translate-x-1/2 z-20 drop-shadow-2xl bg-white flex items-center justify-center cursor-pointer"
            style={{
                bottom: `${pfpSize / 2}px`,
                width: `${pfpSize}px`,
                height: `${pfpSize}px`
            }}
        >
            <video
                className="pixel-corners drop-shadow-2xl origin-center scale-90"
                width={pfpSize}
                height={pfpSize}
                autoPlay
                loop
                muted
                playsInline
                src={pfpUrl}
                poster={pfpPosterUrl}
            />

            <div className="w-full h-full absolute bg-white opacity-5 cursor-pointer">
            </div>
        </div>
    )
}

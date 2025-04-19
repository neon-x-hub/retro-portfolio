import StochasticClipBox from "../effects/StochasticClipBox"
export default function CoverBg() {
    return (
        <StochasticClipBox
            width={"100%"}
            height={300}
            meanHeight={0.2}
            variability={0.2}
            pixelArtWidth={16}
            pixelArtHeight={9}
            className="mb-8"
        >
            {/* This content will be masked */}
            <div className="w-full h-[220px] bg-[url('/gifs/delete-computer.gif')] bg-cover"></div>
        </StochasticClipBox>
    )
}

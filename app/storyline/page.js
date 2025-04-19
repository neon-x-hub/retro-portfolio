import ControlledChapterMenu from "../components/features/storyline/ControlledChapterMenu"
import GoBack from "../components/core/buttons/GoBack"

export default function Storyline() {
    return <>
        <div className="relative">
            <GoBack />
            <span className="text-3xl font-bold absolute top-7 left-1/2 transform -translate-x-1/2">Storyline</span>
            <span className="text-sm absolute top-16 left-1/2 transform -translate-x-1/2">
                Endless Journey
            </span>
        </div>
        <ControlledChapterMenu />
    </>
}

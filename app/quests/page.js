import ControlledCardScene from "../components/features/quests/ControlledCardScene"
import GoBack from "../components/core/buttons/GoBack"
export default function Quests() {
    const quests = [
        {
            title: "Optis",
            url: "/images/cards/1.png",
            status: "d"

        },
        {
            title: "ExpanDB",
            url: "/images/cards/2.png",
            status: "ip"
        },
        {
            title: "CipherChat",
            url: "/images/cards/3.png",
            status: "ip"
        },
        {
            title: "Calveri",
            url: "/images/cards/4.png",
            status: "d"
        },

    ]
    return <>
        <GoBack />
        <span className="text-3xl font-bold absolute top-7 left-1/2 transform -translate-x-1/2">Quests</span>
        <span className="text-sm absolute top-16 left-1/2 transform -translate-x-1/2">
            Endless Journey
        </span>

        <ControlledCardScene quests={quests} />
    </>
}

import Image from "next/image";

import StarrySky from "./components/backgrounds/Starrysky";
import MainMenu from "./components/features/main_menu/MainMenu";
import SourceCode from "./components/core/buttons/SourceCode";

export default function Home() {
    return (
        <>
            <SourceCode />
            <Image src="/images/sleeping-car.png" width={50} height={50} alt="sleeping car" className="absolute top-[5%] left-1/2 transfom -translate-x-1/2 h-auto"></Image>
            <StarrySky />
            < MainMenu />
        </>
    );
}

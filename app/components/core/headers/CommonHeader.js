import CoverBg from '../../backgrounds/CoverBg'
import GoBack from '../buttons/GoBack'

export default function CommonHeader({ Title, SubTitle }) {
    return (
        < div className="relative" >
            <GoBack />
            <div className="brightness-[75%]">
                <CoverBg />
            </div>
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[50px] text-6xl text-nowrap font-bold text-white">
                {Title}
            </p>
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1 text-2xl text-nowrap text-white">
                {SubTitle}
            </p>
        </div >
    )
}

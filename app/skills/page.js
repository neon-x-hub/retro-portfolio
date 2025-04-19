import GoBack from "../components/core/buttons/GoBack";
import SkillTree from "../components/features/skills/SkillTree";
import CommonHeader from "../components/core/headers/CommonHeader";
export default function Skills() {
    return <>
        <>
            {/* CoverBg + Title */}
            <CommonHeader Title={'Skills Tree'} SubTitle={'A little bit of everything'} />
            {/* Skill Tree */}
            <SkillTree />
        </>
    </>
}

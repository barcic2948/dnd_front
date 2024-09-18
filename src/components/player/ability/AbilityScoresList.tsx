import Flex from 'antd/es/flex';
import { AbilityScores } from '../../../types/Character';
import AbilityScore from './AbilityScore';

interface AbilityListDisplayProps {
    abilityScores: AbilityScores;
    isModify: boolean;
}

const AbilityScoresList: React.FC<AbilityListDisplayProps> = ({ abilityScores, isModfiy }) => {
    return (
        <Flex justify="space-evenly" align="start">
            <AbilityScore abilityName="Strenght" abilityScore={abilityScores.strength} isModify={false} />
            <AbilityScore abilityName="Dexterity" abilityScore={abilityScores.dexterity} isModify={false} />
            <AbilityScore abilityName="Constitution" abilityScore={abilityScores.constitution} isModify={false} />
            <AbilityScore abilityName="Wisdom" abilityScore={abilityScores.wisdom} isModify={false} />
            <AbilityScore abilityName="Intelligence" abilityScore={abilityScores.intelligence} isModify={false} />
            <AbilityScore abilityName="Charisma" abilityScore={abilityScores.charisma} isModify={false} />
        </Flex>
    );
};

export default AbilityScoresList;

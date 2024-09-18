import { Character } from '../../types/Character';
import './CharacterPlayer.css';
import AbilityScoresList from './ability/AbilityScoresList';
import { Flex } from 'antd';

interface CharacterDisplayProps {
    character: Character;
}

const calculateModifier = (score: number): string => {
    const modifier = Math.floor((score - 10) / 2);
    return modifier >= 0 ? `+${modifier}` : `${modifier}`;
};

const CharacterPlayer: React.FC<CharacterDisplayProps> = ({ character }) => {
    return (
        <div className="player-card">
            <div className="character-details"></div>
            <div className="ability-scores">
                <AbilityScoresList abilityScores={character.abilityScores} isModify={false} />
            </div>
        </div>
    );
};

export default CharacterPlayer;

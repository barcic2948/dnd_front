import './styles.css';

interface AbilityScoreDisplayProps {
    abilityName: string;
    abilityScore: number;
    isModify: boolean;
}

const calculateModifier = (score: number): string => {
    const modifier = Math.floor((score - 10) / 2);
    return modifier >= 0 ? `+${modifier}` : `${modifier}`;
};

const AbilityScore: React.FC<AbilityScoreDisplayProps> = ({ abilityName, abilityScore, isModify }) => {
    const modifier = calculateModifier(abilityScore);

    return (
        <div className="ability-score-container">
            <div className="ability-name">{abilityName}</div>
            <div className="ability-score-main">
                <div className="ability-score-text">{abilityScore}</div>
            </div>
            <div className="ability-score-bonus">{modifier}</div>
        </div>
    );
};

export default AbilityScore;

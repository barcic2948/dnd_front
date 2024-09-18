import React from "react";
import { Card, Typography, Progress, List } from "antd";
import { Character } from "../../types/Character";

const { Title, Text } = Typography;

interface CharacterDisplayProps {
    character: Character;
}

const CharacterDisplay: React.FC<CharacterDisplayProps> = ({ character }) => {
    return (
        <Card title={character.name} bordered={true} style={{ width: "100%" }}>
            <Title level={4}>Basic Information</Title>
            <Text strong>Class: </Text>
            <Text>{character.class}</Text>
            <br />
            <Text strong>Race: </Text>
            <Text>{character.race}</Text>
            <br />
            <Text strong>Background: </Text>
            <Text>{character.background}</Text>
            <br />
            <Text strong>Alignment: </Text>
            <Text>{character.alignment}</Text>
            <br />
            <Text strong>Level: </Text>
            <Text>{character.level}</Text>
            <br />
            <Text strong>Experience Points: </Text>
            <Text>{character.experiencePoints}</Text>
            <br />

            <Title level={4} style={{ marginTop: 20 }}>
                Core Stats
            </Title>
            <Text strong>Ability Scores:</Text>
            <List
                size="small"
                dataSource={Object.entries(character.abilityScores)}
                renderItem={([key, value]) => (
                    <List.Item>
                        <Text>{`${
                            key.charAt(0).toUpperCase() + key.slice(1)
                        }: `}</Text>
                        <Text>{value}</Text>
                    </List.Item>
                )}
            />
            <br />
            <Text strong>Proficiency Bonus: </Text>
            <Text>{character.proficiencyBonus}</Text>
            <br />
            <Text strong>Armor Class: </Text>
            <Text>{character.armorClass}</Text>
            <br />
            <Text strong>Initiative: </Text>
            <Text>{character.initiative}</Text>
            <br />
            <Text strong>Speed: </Text>
            <Text>{character.speed} feet</Text>
            <br />
            <Text strong>Hit Points: </Text>
            <Progress
                percent={
                    (character.hitPoints.current / character.hitPoints.max) *
                    100
                }
                status="active"
            />
            <Text>
                {character.hitPoints.current} / {character.hitPoints.max}
            </Text>
            <br />
            <Text strong>Hit Dice: </Text>
            <Text>{character.hitDice}</Text>
            <br />

            <Title level={4} style={{ marginTop: 20 }}>
                Saving Throws
            </Title>
            <List
                size="small"
                dataSource={Object.entries(character.savingThrows)}
                renderItem={([key, value]) => (
                    <List.Item>
                        <Text>{`${
                            key.charAt(0).toUpperCase() + key.slice(1)
                        }: `}</Text>
                        <Text>{value ? "Proficient" : "Not Proficient"}</Text>
                    </List.Item>
                )}
            />

            <Title level={4} style={{ marginTop: 20 }}>
                Skill Proficiencies
            </Title>
            <List
                size="small"
                dataSource={Object.entries(character.skillProficiencies)}
                renderItem={([key, value]) => (
                    <List.Item>
                        <Text>{`${
                            key.charAt(0).toUpperCase() +
                            key.slice(1).replace(/([A-Z])/g, " $1")
                        }: `}</Text>
                        <Text>{value ? "Proficient" : "Not Proficient"}</Text>
                    </List.Item>
                )}
            />

            <Title level={4} style={{ marginTop: 20 }}>
                Spell Slots
            </Title>
            <List
                size="small"
                dataSource={Object.entries(character.spellSlots)}
                renderItem={([key, value]) => (
                    <List.Item>
                        <Text>{`Level ${key.replace("level", "")}: `}</Text>
                        <Text>{value}</Text>
                    </List.Item>
                )}
            />

            <Title level={4} style={{ marginTop: 20 }}>
                Spells Known
            </Title>
            <List
                size="small"
                bordered
                dataSource={character.spellsKnown}
                renderItem={(spell) => (
                    <List.Item>
                        <List.Item.Meta
                            title={spell.name}
                            description={
                                <div>
                                    <Text>{`Level: ${spell.level}`}</Text>
                                    <br />
                                    <Text>{spell.description}</Text>
                                    <br />
                                    <Text>{`Casting Time: ${spell.castingTime}, Range: ${spell.range}, Components: ${spell.components}, Duration: ${spell.duration}`}</Text>
                                </div>
                            }
                        />
                    </List.Item>
                )}
            />

            <Title level={4} style={{ marginTop: 20 }}>
                Inventory
            </Title>
            <List
                size="small"
                bordered
                dataSource={character.inventory}
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta
                            title={`${item.name} x${item.quantity}`}
                            description={`${item.description} (Weight: ${item.weight})`}
                        />
                    </List.Item>
                )}
            />

            <Title level={4} style={{ marginTop: 20 }}>
                Personality Traits
            </Title>
            <Text>{character.personalityTraits.join(", ")}</Text>

            <Title level={4} style={{ marginTop: 20 }}>
                Ideals
            </Title>
            <Text>{character.ideals.join(", ")}</Text>

            <Title level={4} style={{ marginTop: 20 }}>
                Bonds
            </Title>
            <Text>{character.bonds.join(", ")}</Text>

            <Title level={4} style={{ marginTop: 20 }}>
                Flaws
            </Title>
            <Text>{character.flaws.join(", ")}</Text>

            <Title level={4} style={{ marginTop: 20 }}>
                Backstory
            </Title>
            <Text>{character.backstory}</Text>
        </Card>
    );
};

export default CharacterDisplay;

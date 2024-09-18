import React from "react";
import { Character } from "../../types/Character";
import CharacterPlayer from "./CharacterPlayer";

const exampleCharacter: Character = {
    name: "Aragorn",
    class: "Ranger",
    race: "Human",
    background: "Outlander",
    alignment: "Neutral Good",
    level: 5,
    experiencePoints: 6500,

    abilityScores: {
        strength: 16,
        dexterity: 14,
        constitution: 14,
        intelligence: 10,
        wisdom: 13,
        charisma: 12,
    },
    proficiencyBonus: 3,
    armorClass: 16,
    initiative: 2,
    speed: 30,
    hitPoints: {
        max: 45,
        current: 45,
        temporary: 0,
    },
    hitDice: "5d10",

    savingThrows: {
        strength: true,
        dexterity: true,
        constitution: false,
        intelligence: false,
        wisdom: true,
        charisma: false,
    },

    skillProficiencies: {
        acrobatics: false,
        animalHandling: true,
        arcana: false,
        athletics: true,
        deception: false,
        history: false,
        insight: true,
        intimidation: false,
        investigation: false,
        medicine: false,
        nature: true,
        perception: true,
        performance: false,
        persuasion: false,
        religion: false,
        sleightOfHand: false,
        stealth: true,
        survival: true,
    },

    attacks: ["Longsword", "Bow"],
    spellsKnown: [
        {
            name: "Hunter's Mark",
            level: 1,
            description:
                "You choose a creature you can see within range and mystically mark it as your quarry.",
            castingTime: "1 bonus action",
            range: "90 feet",
            components: "V",
            duration: "Concentration, up to 1 hour",
        },
    ],
    spellSlots: {
        level1: 4,
        level2: 2,
        level3: 0,
        level4: 0,
        level5: 0,
        level6: 0,
        level7: 0,
        level8: 0,
        level9: 0,
    },

    inventory: [
        {
            name: "Longsword",
            quantity: 1,
            description: "A sharp sword",
            weight: 3,
        },
        { name: "Bow", quantity: 1, description: "A longbow", weight: 2 },
        {
            name: "Arrows",
            quantity: 20,
            description: "Arrows for the bow",
            weight: 1,
        },
    ],
    gold: 10,
    silver: 5,
    copper: 50,

    featuresAndTraits: ["Favored Enemy", "Natural Explorer"],

    personalityTraits: ["I am incredibly loyal to those I trust."],
    ideals: ["I believe in protecting the innocent."],
    bonds: ["I will do anything to protect my homeland."],
    flaws: ["I have a tendency to brood and be secretive."],
    backstory:
        "Born in the wilds, Aragorn is a skilled ranger and the rightful heir to the throne of Gondor.",
};

const Player = () => {
    return (
        <div style={{ padding: "20px" }}>
            <CharacterPlayer character={exampleCharacter} />
        </div>
    );
};

export default Player;

export interface AbilityScores {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
}

export interface SkillProficiencies {
    acrobatics: boolean;
    animalHandling: boolean;
    arcana: boolean;
    athletics: boolean;
    deception: boolean;
    history: boolean;
    insight: boolean;
    intimidation: boolean;
    investigation: boolean;
    medicine: boolean;
    nature: boolean;
    perception: boolean;
    performance: boolean;
    persuasion: boolean;
    religion: boolean;
    sleightOfHand: boolean;
    stealth: boolean;
    survival: boolean;
}

export interface SavingThrows {
    strength: boolean;
    dexterity: boolean;
    constitution: boolean;
    intelligence: boolean;
    wisdom: boolean;
    charisma: boolean;
}

export interface SpellSlots {
    level1: number;
    level2: number;
    level3: number;
    level4: number;
    level5: number;
    level6: number;
    level7: number;
    level8: number;
    level9: number;
}

export interface Spell {
    name: string;
    level: number;
    description: string;
    castingTime: string;
    range: string;
    components: string;
    duration: string;
}

export interface InventoryItem {
    name: string;
    quantity: number;
    description: string;
    weight: number;
}

export interface Character {
    // Basic Info
    name: string;
    class: string;
    race: string;
    background: string;
    alignment: string;
    level: number;
    experiencePoints: number;

    // Core Stats
    abilityScores: AbilityScores;
    proficiencyBonus: number;
    armorClass: number;
    initiative: number;
    speed: number;
    hitPoints: {
        max: number;
        current: number;
        temporary: number;
    };
    hitDice: string;

    // Saving Throws and Skill Proficiencies
    savingThrows: SavingThrows;
    skillProficiencies: SkillProficiencies;

    // Combat Stats
    attacks: string[];
    spellsKnown: Spell[];
    spellSlots: SpellSlots;

    // Inventory
    inventory: InventoryItem[];
    gold: number;
    silver: number;
    copper: number;

    // Additional Features
    featuresAndTraits: string[];

    // Background and Story
    personalityTraits: string[];
    ideals: string[];
    bonds: string[];
    flaws: string[];
    backstory: string;
}

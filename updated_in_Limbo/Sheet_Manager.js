//JavaScript Sheet Manager
//jQuery

myHero = {};

//Calculates the Dice Rolls
const Roll = (n) => (Math.floor(Math.random() * (n + 1)) + 1);

//Class that sets up an empty prototype to use for the creation of DnD Classes.
class ClassPrototype {
    constructor() {
        this.attributes = {
            str: 0,
            dex: 0,
            con: 0,
            int: 0,
            wis: 0,
            char: 0
        },
        this.Proficiencies = {
            armor: [],
            weapons: [],
            saving_throws: [],
            skills: []
        },
        this.InitialHP = (ConMod) => 0 + ConMod,
        this.getHP = (ConMod) => (ConMod + Roll(0))
    }
}


class Sorcerer extends ClassPrototype {
    constructor() {
        this.Proficiencies = {
            armor: ["none"],
            weapons: [],
            saving_throws: [],
            skills: []
        }
        this.InitialHP = (ConMod) => 6 + ConMod,
        this.getHP = (ConMod) => (ConMod + Roll(6))
    }
}


//Function that calculates modifiers
function CalculateBonus(attribute) {
    if (attribute > 0) {
        let bonus = (attribute - 10) / 2;
        return Math.floor(bonus);
    } else {
        return bonus = "";
    }
}

//Function that updates the modifier value
function UpdateMod(attribute_name) {
    return () => {
        let attr = $("#" + attribute_name).val();
        let char_class = $("#Class").val();

        // Check if attr is number
        // if not exit without updating

        let bonus = CalculateBonus(attr);

        if (bonus > 0) {
            $("#" + attribute_name + "Mod").val("+" + bonus);
            $("#" + attribute_name + "SavingThrow").val("+" + bonus);
        } else {
            $("#" + attribute_name + "Mod").val(bonus);
            $("#" + attribute_name + "SavingThrow").val(bonus);
        }
    }
}

//Calculates Health per Level
function HealthCalculator() {
    let ConMod = parseInt($("#conMod").val());
    let Class = $("#Class").val().toLowerCase();
    let Level = parseInt($("#CharacterLevel").val());


    if (Level === 1) {
        //If the level is equal to one it add the Initial HP that gets calculated at level 1 automatically.
        return CharacterClasses[Class].getInitialHP(ConMod);
    } else if (Level > 1) {
        //CurrentHP is the current value of the MaxHP.
        let currentHP = parseInt($("#MaxHP").val());
        //If the level is above one, it returns the currentHP plus the random constitution modifier that get calculated automatically.
        return (currentHP + CharacterClasses[Class].getHP(ConMod));
    }

    //If level is invalid it returns zero.
    return 0;
}

//Calculates the Proficiency Bonus per Level
function ProficiencyBonusCalculator() {
    let Level = parseInt($("#CharacterLevel").val());
    let ProfBonus = 0;

    if (Level <= 4) {
        return ProfBonus = "+" + 2;
    } else if (Level >= 5 && Level <= 8) {
        return ProfBonus = "+" + 3;
    } else if (Level >= 9 && Level <= 12) {
        return ProfBonus = "+" + 4;
    } else if (Level >= 13 && Level <= 16) {
        return ProfBonus = "+" + 5;
    } else if (Level >= 17 && Level <= 20)
        return ProfBonus = "+" + 6;
}


//Function that capitalize the first letter of a word.
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//Function that Loads Character Info into the sheet.
function LoadCharacter(hero) {

    let class_titles = Object.keys(CharacterClasses);
    let Level = parseInt($("#CharacterLevel").val());
    for (let title of class_titles) {
        $("#Class").append("<option value='" + title + "'>" + capitalizeFirstLetter(title) + "</option>");
    }
    //Updates the attribute modifiers when the Attribute value change.
    $("#str").change(UpdateMod("str"));
    $("#dex").change(UpdateMod("dex"));
    $("#con").change(UpdateMod("con"));
    $("#inte").change(UpdateMod("inte"));
    $("#wis").change(UpdateMod("wis"));
    $("#cha").change(UpdateMod("cha"));

    //Updates the proficiency Bonus per Level
    $("#CharacterLevel").change(() => {
        $("#ProficiencyBonus").val(ProficiencyBonusCalculator(Level));
    });

    //Updates the MaxHP value
    $("#con").change(() => {
        $("#MaxHP").val(HealthCalculator());
    }); //Updates the MaxHP value when the Constitution Modifier changes.
    $("#Class").change(() => {
        $("#MaxHP").val(HealthCalculator());
    }); //Updates the MaxHP value when the Class is changed.
    $("#CharacterLevel").change(() => {
        $("#MaxHP").val(HealthCalculator());
    }); //Updates the MaxHP value when the Level is updated.

}
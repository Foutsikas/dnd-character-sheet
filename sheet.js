//JavaScript Sheet Manager
//jQuery
myHero = {};

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

//Calculates the Dice Rolls
const Roll = (n) => (Math.floor(Math.random() * (n + 1)) + 1);

//Has all the info about a class
const CharacterClasses = {
    sorcerer: {
        getInitialHP: (ConMod) => 6 + ConMod,
        getHP: (ConMod) => (ConMod + Roll(6)),
        Proficiences: {
            Armor: "none",
            Weapons: ["Dagger", "Dart", "Sling", "Quarterstaff", "Light_Crossbow"],
            Tools: "none",
            Saving_Throws: ["str", "cha"],
        }
    },
    wizard: {
        getInitialHP: (ConMod) => 6 + ConMod,
        getHP: (ConMod) => (ConMod + Roll(6)),
        Saving_Throws: ["inte", "ST_Wisdom"]
    },
    bard: {
        getInitialHP: (ConMod) => 8 + ConMod,
        getHP: (ConMod) => (ConMod + Roll(8)),
        Saving_Throws: ["ST_Dexterity", "ST_Charisma"]
    },
    cleric: {
        getInitialHP: (ConMod) => 8 + ConMod,
        getHP: (ConMod) => (ConMod + Roll(8)),
        Saving_Throws: ["ST_Charisma", "ST_Wisdom"]
    },
    druid: {
        getInitialHP: (ConMod) => 8 + ConMod,
        getHP: (ConMod) => (ConMod + Roll(8)),
        Saving_Throws: ["ST_Intelligence", "ST_Wisdom"]
    },
    monk: {
        getInitialHP: (ConMod) => 8 + ConMod,
        getHP: (ConMod) => (ConMod + Roll(8)),
        Saving_Throws: ["ST_Strength", "ST_Dexterity"]
    },
    rogue: {
        getInitialHP: (ConMod) => 8 + ConMod,
        getHP: (ConMod) => (ConMod + Roll(8)),
        Saving_Throws: ["ST_Dexterity", "ST_Intelligence"]
    },
    warlock: {
        getInitialHP: (ConMod) => 8 + ConMod,
        getHP: (ConMod) => (ConMod + Roll(8)),
        Saving_Throws: ["ST_Wisdom", "ST_Charisma"]
    },
    fighter: {
        getInitialHP: (ConMod) => 10 + ConMod,
        getHP: (ConMod) => (ConMod + Roll(10)),
        Saving_Throws: ["ST_Strength", "ST_Constitution"]
    },
    paladin: {
        getgetInitialHP: (ConMod) => (ConMod) => 10 + ConMod,
        getHP: (ConMod) => (ConMod + Roll(10)),
        Saving_Throws: ["ST_Wisdom", "ST_Charisma"]
    },
    ranger: {
        getInitialHP: (ConMod) => 10 + ConMod,
        getHP: (ConMod) => (ConMod + Roll(10)),
        Saving_Throws: ["ST_Strength", "ST_Dexterity"]
    },
    barbarian: {
        getInitialHP: (ConMod) => 12 + ConMod,
        getHP: (ConMod) => (ConMod + Roll(12)),
        Saving_Throws: ["ST_Strength", "ST_Constitution"]
    }
};


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

//Add a method to automatically update Saving_Throws according to the Class and update the ST_Input with the corresponding modifier.
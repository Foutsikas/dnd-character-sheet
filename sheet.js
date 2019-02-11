//JavaScript Sheet Manager
//jQuery
myHero = {
};

//Function that calculates modifiers
function CalculateBonus(attribute){
	if (attribute > 0){
		let bonus = (attribute - 10) / 2;
		return Math.floor(bonus);
	}else{
		return bonus = "";
	}
}

//Function that updates the modifier value
function UpdateMod (attribute_name) {
	return () => {
		let attr = $("#" + attribute_name).val();
		
		// Check if attr is number
		// if not exit without updating
		
		let bonus = CalculateBonus(attr);
		
		if (bonus > 0) {
			$("#" + attribute_name + "Mod").val("+" + bonus);
		} else {
			$("#" + attribute_name + "Mod").val(bonus);
		}
	}
}


//Has all the info about a class
const CharacterClasses = {
	sorcerer: {
		getInitialHP: (ConMod) => 6 + ConMod,
		getHP: (ConMod) => (ConMod + (Math.floor(Math.random() * 7) + 1)),
		Saving_Throws: ["#ST_Constitution", "#ST_Charisma"]
	},
	wizard: {
		getInitialHP: (ConMod) => 6 + ConMod,
		getHP: (ConMod) => (ConMod + (Math.floor(Math.random() * 7) + 1)),
		Saving_Throws: ["ST_Intelligence", "ST_Wisdom"]
	},
	bard: {
		getInitialHP: (ConMod) => 8 + ConMod,
		getHP: (ConMod) => (ConMod + (Math.floor(Math.random() * 9) + 1)),
		Saving_Throws: ["ST_Dexterity", "ST_Charisma"]
	},
	cleric: {
		getInitialHP: (ConMod) => 8 + ConMod,
		getHP: (ConMod) => (ConMod + (Math.floor(Math.random() * 9) + 1)),
		Saving_Throws: ["ST_Charisma", "ST_Wisdom"]
	},
	druid: {
		getInitialHP: (ConMod) => 8 + ConMod,
		getHP: (ConMod) => (ConMod + (Math.floor(Math.random() * 9) + 1)),
		Saving_Throws: ["ST_Intelligence", "ST_Wisdom"]
	},
	monk: {
		getInitialHP: (ConMod) => 8 + ConMod,
		getHP: (ConMod) => (ConMod + (Math.floor(Math.random() * 9) + 1)),
		Saving_Throws: ["ST_Strength", "ST_Dexterity"]
	},
	rogue: {
		getInitialHP: (ConMod) => 8 + ConMod,
		getHP: (ConMod) => (ConMod + (Math.floor(Math.random() * 9) + 1)),
		Saving_Throws: ["ST_Dexterity", "ST_Intelligence"]
	},
	warlock: {
		getInitialHP: (ConMod) => 8 + ConMod,
		getHP: (ConMod) => (ConMod + (Math.floor(Math.random() * 9) + 1)),
		Saving_Throws: ["ST_Wisdom", "ST_Charisma"]
	},
	fighter: {
		getInitialHP: (ConMod) => 10 + ConMod,
		getHP: (ConMod) => (ConMod + (Math.floor(Math.random() * 11) + 1)),
		Saving_Throws: ["ST_Strength", "ST_Constitution"]
	},
	paladin: {
		getgetInitialHP: (ConMod) => (ConMod) => 10 + ConMod,
		getHP: (ConMod) => (ConMod + (Math.floor(Math.random() * 11) + 1)),
		Saving_Throws: ["ST_Wisdom", "ST_Charisma"]
	},
	ranger: {
		getInitialHP: (ConMod) => 10 + ConMod,
		getHP: (ConMod) => (ConMod + (Math.floor(Math.random() * 11) + 1)),
		Saving_Throws: ["ST_Strength", "ST_Dexterity"]
	},
	barbarian: {
		getInitialHP: (ConMod) => 12 + ConMod,
		getHP: (ConMod) => (ConMod + (Math.floor(Math.random() * 13) + 1)),
		Saving_Throws: ["ST_Strength", "ST_Constitution"]
	}
};


function HealthCalculator () {
	let ConMod = parseInt($("#conMod").val());
	let Class = $("#Class").val().toLowerCase();
	let Level = parseInt($("#CharacterLevel").val());
	
	
	if (Level === 1){
		
		return CharacterClasses[Class].getInitialHP(ConMod);
	} else if (Level > 1){
		let currentHP = parseInt($("#MaxHP").val());
		return (currentHP + CharacterClasses[Class].getHP(ConMod));
	}
	
	return 0;
}

function LoadCharacter(hero) {
	$("#str").change(UpdateMod("str"));
	$("#dex").change(UpdateMod("dex"));
	$("#con").change(UpdateMod("con"));
	$("#con").change(() => {$("#MaxHP").val(HealthCalculator());});
	$("#inte").change(UpdateMod("inte"));
	$("#wis").change(UpdateMod("wis"));
	$("#cha").change(UpdateMod("cha"));
	
	$("#CharacterLevel").change(() => {$("#MaxHP").val(HealthCalculator());});
}



//Add a method to automatically update Saving_Throws according to the Class and update the ST_Input with the corresponding modifier.
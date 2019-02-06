//JavaScript Sheet Manager
//jQuery
myHero = {
	inspiration: true,
	prof_bonus: 2,
	throw_prof: ['str', 'con'],
	languages: ['common', 'dwarven'],
	CharacterLevel: 1,
	Experience: 0,
	NextLvlExp: 0,
	
};


function CalculateBonus(attribute){
	if (attribute > 0){
		let bonus = (attribute - 10) / 2;
		return Math.floor(bonus);
	}else{
		return bonus = "";
	}
}

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

const CharacterClasses = {
	sorcerer: {
		getHP: (Con) => (Con + (Math.floor(Math.random() * 7) + 1)),
		proficiency_bonus: 2
	},
	wizard: {
		getHP: (Con) => (Con + (Math.floor(Math.random() * 7) + 1)),
		proficiency_bonus: 2
	},
	bard: {
		getHP: (Con) => (Con + (Math.floor(Math.random() * 9) + 1)),
		proficiency_bonus: 2
	},
	cleric: {
		getHP: (Con) => (Con + (Math.floor(Math.random() * 9) + 1)),
		proficiency_bonus: 2
	},
	druid: {
		getHP: (Con) => (Con + (Math.floor(Math.random() * 9) + 1)),
		proficiency_bonus: 2
	},
	monk: {
		getHP: (Con) => (Con + (Math.floor(Math.random() * 9) + 1)),
		proficiency_bonus: 2
	},
	rogue: {
		getHP: (Con) => (Con + (Math.floor(Math.random() * 9) + 1)),
		proficiency_bonus: 2
	},
	warlock: {
		getHP: (Con) => (Con + (Math.floor(Math.random() * 9) + 1)),
		proficiency_bonus: 2
	},
	fighter: {
		getHP: (Con) => (Con + (Math.floor(Math.random() * 11) + 1)),
		proficiency_bonus: 2
	},
	paladin: {
		getHP: (Con) => (Con + (Math.floor(Math.random() * 11) + 1)),
		proficiency_bonus: 2
	},
	ranger: {
		getHP: (Con) => (Con + (Math.floor(Math.random() * 11) + 1)),
		proficiency_bonus: 2
	},
	barbarian: {
		getHP: (Con) => (Con + (Math.floor(Math.random() * 13) + 1)),
		proficiency_bonus: 2,
		saving_throw_prof: ['str', 'con']
	}
};


function HealthCalculator () {
	let Con = $("#conMod").val();
	let Class = $("#Class").val().toLowerCase();
	
	return CharacterClasses[Class].getHP(Con);
}

function LoadCharacter(hero) {
	$("#str").keyup(UpdateMod("str"));
	$("#dex").keyup(UpdateMod("dex"));
	$("#con").keyup(UpdateMod("con"));
	$("#con").keyup(() => {$("#MaxHP").val(HealthCalculator());});
	$("#inte").keyup(UpdateMod("inte"));
	$("#wis").keyup(UpdateMod("wis"));
	$("#cha").keyup(UpdateMod("cha"));
}


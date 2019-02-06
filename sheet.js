//JavaScript Sheet Manager
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

function HealthCalculator () {
	
	let Con = $("#conMod").val();
	let Class = $("#Class").val().toLowerCase();
	let HealthPoints = 0;
	
	if (Class === "sorcerer"){
		HealthPoints = Con + Math.floor(Math.Random() * 7);
		
	}else if (Class === "wizard"){
		HealthPoints = Con + Math.floor(Math.Random() * 7);
		
	}else if (Class === "bard"){
		HealthPoints = Con + Math.floor(Math.Random() * 9);
		
	}else if (Class === "cleric"){
		HealthPoints = Con + Math.floor(Math.Random() * 9);
		
	}else if (Class === "druid"){
		HealthPoints = Con + Math.floor(Math.Random() * 9);
		
	}else if (Class === "monk"){
		HealthPoints = Con + Math.floor(Math.Random() * 9);
		
	}else if (Class === "rogue"){
		HealthPoints = Con + Math.floor(Math.Random() * 9);
		
	}else if (Class === "warlock"){
		HealthPoints = Con + Math.floor(Math.Random() * 9);
		
	}else if (Class === "fighter"){
		HealthPoints = Con + Math.floor(Math.Random() * 11);
		
	}else if (Class === "paladin"){
		HealthPoints = Con + Math.floor(Math.Random() * 11);
		
	}else if (Class === "ranger"){
		HealthPoints = Con + Math.floor(Math.Random() * 11);
		
	}else if (Class === "barbarian"){
		HealthPoints = Con + Math.floor(Math.Random() * 13);
		
	}
	return HealthPoints;
}

function LoadCharacter(hero) {
	$("#str").keyup(UpdateMod("str"));
	$("#dex").keyup(UpdateMod("dex"));
	$("#con").keyup(UpdateMod("con"));
	$("#inte").keyup(UpdateMod("inte"));
	$("#wis").keyup(UpdateMod("wis"));
	$("#cha").keyup(UpdateMod("cha"));
	
	$("#MaxHP").val(HealthCalculator());
}


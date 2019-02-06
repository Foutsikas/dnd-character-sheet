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
	let bonus = (attribute - 10) / 2;
	return Math.floor(bonus);
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


function LoadCharacter(hero) {
	$("#str").keyup(UpdateMod("str"));
	$("#dex").keyup(UpdateMod("dex"));
	$("#con").keyup(UpdateMod("con"));
	$("#inte").keyup(UpdateMod("inte"));
	$("#wis").keyup(UpdateMod("wis"));
	$("#cha").keyup(UpdateMod("cha"));
	
}


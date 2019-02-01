


myHero = {
	name: 'Rodgar',
	class: 'Barbarian',
	attributes: {
		str: 18,
		dex: 10,
		con: 14,
		int: 8,
		wis: 10,
		cha: 12
	},
	inspiration: true,
	prof_bonus: 2,
	throw_prof: ['str', 'con'],
	languages: ['common', 'dwarven'],
	level: 1
};


function LoadCharacter(hero) {
	let name = document.getElementById("name");
	name.value = hero.name;
	console.log(name);
}


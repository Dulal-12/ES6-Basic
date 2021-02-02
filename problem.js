function relationToLuke(name) {
	const obj = {
		           DarthVader	 : 'father',
		           Leia          : 'sister',
		           Han           : 'brother in law',
		           R2D2          : 'droid'
	}
	if(name ==="Darth Vader"){
        name =  'DarthVader';
        //console.log(name);
	}
	return `Luke, I am your ${obj[name]}.`
}

const result = relationToLuke("Darth Vader");
console.log(result);
console.log(typeof('Dulal'));
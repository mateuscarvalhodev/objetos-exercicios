const pokemon1 = {
	nome: 'Bulbasaur',
	tipo: 'Grama',
	nivel: 5,
    ataques: []
}

const ataques = [
    {
    nome: 'Investida',
    dano: 40,
    tipo: 'Normal',
    precisao: 100
    },
    {
        nome: 'Folha Navalha',
        dano: 45,
        tipo: 'grama',
        precisao: 100
    }

]

pokemon1.ataques.push(...ataques);

const pokemon2 = {
    nome: 'Squirtle',
	tipo: 'Agua',
	nivel: 5,
    ataques: [...pokemon1.ataques]
}

console.log(pokemon1, pokemon2);
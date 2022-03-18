const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;

    const poke= '';
    // const tipo ='';
    fetch(url).then((res) => {
        if (res.status != "200") {
            // console.log(res);
            pokeImage("../img/pokemon.png");
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            let pokeNombre=data.name;
            let pokeTipo=data.types[0].type.name;
            let stadishp=data.stats[0].base_stat;
            let sttack=data.stats[2].base_stat;
            let sdefense=data.stats[3].base_stat;
            let numPoke=data.id;
            let movePoke=data.moves[0].move.name;
            let movePoke1=data.moves[1].move.name;
            let movePoke2=data.moves[2].move.name;

            pokeImage(pokeImg);
            pokeDatos(pokeNombre, pokeTipo,stadishp,sttack,sdefense,numPoke,movePoke,movePoke1,movePoke2);


            // console.log(movePoke,movePoke1,movePoke2);

        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const pokeDatos = (poke, tipo,hp,ataque,defensa,numero,movimiento,movimiento1,movimiento2) => {
    // console.log(poke, tipo);
    if (tipo=='electric') {
        tipo = 'img/destello.png';
    }else if(tipo=='fire'){
        tipo = 'img/fire.png';

    }else if (tipo=='water'){
        tipo = 'img/water.png';

    }else if (tipo=='grass') {
        tipo = 'img/grass.png';

    }else if (tipo=='bug') {
        tipo = 'img/bug.png';

    }else{
         tipo = 'img/pokebola.png';

    }
    document.getElementById("pokeNombre").innerHTML = poke;
    document.getElementById("stadishp").innerHTML = hp+'%';
    document.getElementById("sttack").innerHTML = ataque+'%';
    document.getElementById("sdefense").innerHTML = defensa+'%';
    document.getElementById("numPoke").innerHTML = '#'+numero;
    document.getElementById("movePoke").innerHTML = movimiento;
    document.getElementById("movePoke1").innerHTML = movimiento1;
    document.getElementById("movePoke2").innerHTML = movimiento2;




     const pokeTipos = document.getElementById("pokeTipo");
    pokeTipos.src = tipo;


}



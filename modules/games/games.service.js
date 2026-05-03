const gamesService = {};

let games = [];
let counterID = 1;


gamesService.getGames = () => {
    return games;
}


gamesService.getGameid = (id) => {
    for (let game of games) {
        if (game.id == id) return game;
    }
    return null;
}

gamesService.addGame = (nombre, minJugadores, maxJugadores, duracionPromedio, fechaAdquisicion, estado) => {
    const newGame = {
        id: counterID,
        nombre: nombre,
        minJugadores: minJugadores,
        maxJugadores: maxJugadores,
        duracionPromedio: duracionPromedio,
        fechaAdquisicion: fechaAdquisicion,
        estado: estado
    };
    counterID++;
    games.push(newGame);
    return newGame;
}

gamesService.putGame = (id, nombre, minJugadores, maxJugadores, duracionPromedio, fechaAdquisicion, estado) => {
    for (let i = 0; i < games.length; i++) {
        if (games[i].id == id) {
            games[i].nombre = nombre;
            games[i].minJugadores = minJugadores;
            games[i].maxJugadores = maxJugadores;
            games[i].duracionPromedio = duracionPromedio;
            games[i].fechaAdquisicion = fechaAdquisicion;
            games[i].estado = estado;
            
            return games[i];
        }
    }
    return null;
}


gamesService.patchGame = (id, nombre, minJugadores, maxJugadores, duracionPromedio, fechaAdquisicion, estado) => {
    for (let i = 0; i < games.length; i++) {
        if (games[i].id == id) {
            if (nombre !== undefined) games[i].nombre = nombre;
            if (minJugadores !== undefined) gamesames[i].minJugadores = minJugadores;
            if (maxJugadores !== undefined) games[i].maxJugadores = maxJugadores;
            if (duracionPromedio !== undefined) games[i].duracionPromedio = duracionPromedio;
            if (fechaAdquisicion !== undefined) games[i].fechaAdquisicion = fechaAdquisicion;
            if (estado !== undefined) games[i].estado = estado;
            
            return games[i];
        }
    }
    return null;
}

gamesService.deleteGame = (id) => {
    for (let i = 0; i < games.length; i++) {
        
        if (games[i].id == id) {
            games.splice(i, 1);
            return true;
        }
    }
    return false; 
}

export default gamesService;
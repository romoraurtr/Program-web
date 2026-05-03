import gamesService from './games.service.js';

const gamesController = {};

//esta funcion devuelve todos los juegos
gamesController.getGames = (req, res) => {
    const games = gamesService.getGames();
    res.status(200).send({
        games: games
    });
}

//esta funcion devuelve un juego específico por su id
gamesController.getGame = (req, res) => {
    const idGame = req.params.idGame;
    const game = gamesService.getGameid(idGame);
    res.status(200).send({
        game: game
    });
}

gamesController.addGame = (req, res) => {
    // coloca en variables los datos que se dan
    const nombreGame = req.body.nombre;
    const minJugadoresGame = req.body.minJugadores;
    const maxJugadoresGame = req.body.maxJugadores;
    const duracionGame = req.body.duracionPromedio;
    const fechaGame = req.body.fechaAdquisicion;
    const estadoGame = req.body.estado;

    const game = gamesService.addGame(
        nombreGame, 
        minJugadoresGame, 
        maxJugadoresGame, 
        duracionGame, 
        fechaGame, 
        estadoGame
    );

    res.status(200).send({
        msg: "Hecho correctamente",
        game: game
    });
}

gamesController.putGame = (req, res) => {
    const idGame = req.params.idGame;
    const nombreGame = req.body.nombre;
    const minJugadoresGame = req.body.minJugadores;
    const maxJugadoresGame = req.body.maxJugadores;
    const duracionGame = req.body.duracionPromedio;
    const fechaGame = req.body.fechaAdquisicion;
    const estadoGame = req.body.estado;

    const game = gamesService.putGame(
        idGame, nombreGame, minJugadoresGame, maxJugadoresGame, duracionGame, fechaGame, estadoGame
    );

    res.status(200).send({ msg: "Hecho correctamente", game: game });
}

gamesController.patchGame = (req, res) => {
    const idGame = req.params.idGame;
    const nombreGame = req.body.nombre;
    const minJugadoresGame = req.body.minJugadores;
    const maxJugadoresGame = req.body.maxJugadores;
    const duracionGame = req.body.duracionPromedio;
    const fechaGame = req.body.fechaAdquisicion;
    const estadoGame = req.body.estado;

    const game = gamesService.patchGame(
        idGame, nombreGame, minJugadoresGame, maxJugadoresGame, duracionGame, fechaGame, estadoGame
    );

    res.status(200).send({ msg: "Hecho correctamente", game: game });
}

gamesController.deleteGame = (req, res) => {
    const idGame = req.params.idGame;
    gamesService.deleteGame(idGame);
    
    res.status(200).send({
        msg: "Hecho correctamente"
    });
}

export default gamesController;
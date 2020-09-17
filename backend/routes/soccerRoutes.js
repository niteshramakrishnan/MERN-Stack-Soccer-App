import { addNewPlayer, getPlayer, getPlayerWithID, UpdatePlayer, deletePlayer } from '../controllers/playerControllers';

const routes = (app) => {
    app.route('/players')
    // GET endpoint
    .get(getPlayer)
    // POST endpoint
    .post(addNewPlayer);

    app.route('/players/:PlayerId')
    //GET player by ID
    .get(getPlayerWithID)
    //Update a specific player
    .put(UpdatePlayer)
    //delete a specific player
    .delete(deletePlayer);
}

export default routes;
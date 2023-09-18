import database from './database.js';

const equipment = (app) => {
    // Model
    // const Model = createModel(app);
    if(database.getCollection('equipment') === undefined){
        database.createCollection('equipment');
    }

    // Service
    app.get('/api/equipment/:id', async (req, res) => {
        const equipment = await database.find('equipment', `id = ${req.params.id}`);
        return equipment;
    });

    app.get('/api/equipment', async (req, res) => {
        const equipment = await database.find('equipment');
        return equipment;
    });

    app.post('/api/equipment', async (req, res) => {
        const equipment = await database.create('equipment', req.body);
        console.log(equipment);
        return equipment;
    });

    app.patch('/api/equipment/:id', async (req, res) => {
        const equipment = await database.update('equipment', req.params.id, req.body);
        return equipment;
    });
}

export default equipment;
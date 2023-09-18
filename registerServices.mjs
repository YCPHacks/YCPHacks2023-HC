import equipment from './services/equipment.mjs';

function registerServices(app) {
    equipment(app);
}

export default registerServices;
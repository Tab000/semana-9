const coursesRepo = require("../repositories/coursesRepo");

const create = (data) => {
    if (!data.title) {
        throw new Error("El campo 'title' es obligatorio");
    }
    return coursesRepo.save(data);
};

const list = () => {
    return coursesRepo.getAll();
};

module.exports = { create, list };

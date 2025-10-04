const courseService = require("../services/courseService");

const createCourse = (req, res) => {
    try {
        const newCourse = courseService.create(req.body);
        res.send(`Curso ${newCourse.title} agregado exitosamente.`);
        } catch (error) {
        res.status(400).send(error.message);
    }
};

const listCourses = (req, res) => {
    const list = courseService.list();
    res.json(list);
};

module.exports = { createCourse, listCourses };

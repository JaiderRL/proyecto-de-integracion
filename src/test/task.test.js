const request = require("supertest");
const app = require("../app");
const sequelize = require("../config/database");
const Task = require("../models/task");

beforeAll(async () => {
    // Sincronizar la BD antes de correr las pruebas
    await sequelize.sync({ force: true });
});

afterAll(async () => {
    // Cerrar la conexión al terminar
    await sequelize.close();
});

describe("API de Tareas (CRUD)", () => {
    let taskId;

    test("Debe crear una nueva tarea", async () => {
        const res = await request(app).post("/api/tasks").send({
            title: "Tarea de prueba",
            description: "Probando creación de tareas",
        });
        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty("id");
        taskId = res.body.id;
    });

    test("Debe obtener todas las tareas", async () => {
        const res = await request(app).get("/api/tasks");
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    test("Debe obtener una tarea por ID", async () => {
        const res = await request(app).get(`/api/tasks/${taskId}`);
        expect(res.statusCode).toBe(200);
        expect(res.body.id).toBe(taskId);
    });

    test("Debe actualizar una tarea", async () => {
        const res = await request(app)
            .put(`/api/tasks/${taskId}`)
            .send({ completed: true });
        expect(res.statusCode).toBe(200);
        expect(res.body.completed).toBe(true);
    });

    test("Debe eliminar una tarea", async () => {
        const res = await request(app).delete(`/api/tasks/${taskId}`);
        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBe("Tarea eliminada correctamente");
    });
});

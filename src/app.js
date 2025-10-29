
const express = require("express");
const sequelize = require("./config/database.js");
const taskRoutes = require('./routes/taskroutes.js');

const app = express();
app.use(express.json());

// Tareas

app.use('/api/tasks', taskRoutes);

app.get("/", (req, res) => {
    res.json({ message: "EL API FUNCIONA" });
});

// Sincronizar la base de datos

sequelize.sync()
    .then(() => {console.log("✅ Base de datos sincronizada correctamente.");})
    .catch((err) => {console.error("❌ Error al sincronizar la base de datos:", err);});

module.exports = app;

if (require.main === module) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Servidor escuchando en http://localhost:${PORT}`);
    });
}


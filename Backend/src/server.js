const express = require("express");
const todosRoutes = require("./todos.routes")
const app = express();

app.use(express.json());
app.use(todosRoutes);
app.get("/saude", (req, res) => {
    return res.json("up");
});

app.listen(5000, () => console.log("servidor 3333"));

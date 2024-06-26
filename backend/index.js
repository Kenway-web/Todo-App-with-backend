const express = require('express');
const app = express();
const { createTodo,updateTodo } = require("./types"); // Ensure these are imported correctly
const { todo } = require('./db'); // Ensure this is the correct import

app.use(express.json());

// POST /todo
app.post("/todo", async function(req, res) {
    const createPayload = req.body;
    const parsePayoad = createTodo.safeParse(createPayload);
    

    if (!parsePayoad.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs"
        });
        return;
    }
    // put in mongo db
    await todo.create({
        title: parsePayoad.data.title,
        description: parsePayoad.data.description,
        completed: false // corrected typo
    });

    res.json({
        msg: "Todo Created"
    });
});

// GET /todos
app.get("/todos", async function(req, res) {
    const todos = await todo.find({});
    res.json({
        todos
    });
});

// PUT /completed
app.put("/completed", async function(req, res) {
    const updatePayload = req.body;
    const parsePayLoad = updateTodo.safeParse(updatePayload);

    if (!parsePayLoad.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs"
        });
        return;
    }

    await todo.updateOne(
        { _id: req.body.id }, 
        { completed: true

         } // corrected typo
    );

    res.json({
        msg: "Todo marked as completed"
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

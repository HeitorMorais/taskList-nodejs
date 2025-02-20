const Task = require('../models/Task')

exports.createTask = async(req, res) => {
    try {
        const task = new Task(req.body)
        await task.save()
        res.status(201).json(task)
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}

exports.getAllTasks = async(req,res) => {
    const tasks = await Task.find()
    res.json(tasks)
}

exports.updateTask = async(req,res) => {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.json(task)
}

exports.deleteTask = async(req,res) => {
    await Task.findByIdAndDelete(req.params.id, req.body, {new: true})
    res.json("mensagem: usuário deletado com sucesso")
}


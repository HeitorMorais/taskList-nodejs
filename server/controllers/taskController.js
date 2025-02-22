const Task = require('../models/Task')

exports.createTask = async(req, res) => {
    try {
        const task = new Task(req.body)
        await task.save()
        res.status(201).json({message:` tarefa ${req.body.title} criada com sucesso!`})
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
    res.json("mensagem: tarefa deletada com sucesso")
}

exports.deleteAllTasks = async(req,res) => {
    await Task.deleteMany({})
    res.json("mensagem: todas as tarefa foram deletadas")
    
}


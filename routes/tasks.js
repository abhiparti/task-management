const express = require('express');
const { Task } = require('../models');
const router = express.Router();

// Middleware to authenticate user
const authenticateJWT = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.sendStatus(403);
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
};

// Create Task
router.post('/tasks', authenticateJWT, async (req, res) => {
  const { title, description, status, priority, due_date } = req.body;
  try {
    const task = await Task.create({
      title,
      description,
      status,
      priority,
      due_date,
      userId: req.user.id,
    });
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get Tasks
router.get('/tasks', authenticateJWT, async (req, res) => {
  try {
    const tasks = await Task.findAll({ where: { userId: req.user.id } });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update Task
router.put('/tasks/:id', authenticateJWT, async (req, res) => {
  const { id } = req.params;
  const { title, description, status, priority, due_date } = req.body;
  try {
    const task = await Task.findByPk(id);
    if (task && task.userId === req.user.id) {
      task.title = title;
      task.description = description;
      task.status = status;
      task.priority = priority;
      task.due_date = due_date;
      await task.save();
      res.json(task);
    } else {
      res.status(404).json({ error: 'Task not found or unauthorized' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete Task
router.delete('/tasks/:id', authenticateJWT, async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByPk(id);
    if (task && task.userId === req.user.id) {
      await task.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Task not found or unauthorized' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

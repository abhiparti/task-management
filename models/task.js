module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'Todo',
    },
    priority: {
      type: DataTypes.STRING,
      defaultValue: 'Medium',
    },
    due_date: {
      type: DataTypes.DATE,
    },
  });

  return Task;
};

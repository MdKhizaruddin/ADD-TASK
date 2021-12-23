import Header from "./Header";
import Tasks from "./Tasks";
import { useState } from "react";
import AddTask from "./AddTask";

const Main = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appoinment 1",
      day: "9th Feb",
      reminder: true,
    },
    {
      id: 2,
      text: "Doctors Appoinment 2",
      day: "29th Feb",
      reminder: true,
    },
    {
      id: 3,
      text: "Doctors Appoinment 3",
      day: "19th Feb",
      reminder: true,
    },
  ]);
  // add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  // toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask) } showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No task to show"
      )}
    </div>
  );
};

export default Main;

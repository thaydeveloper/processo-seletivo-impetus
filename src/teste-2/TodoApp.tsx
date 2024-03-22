import React, { useState } from "react";
import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography,
  Container,
} from "@mui/material";
import { Delete } from "@mui/icons-material";

interface Task {
  id: number;
  name: string;
}

const TodoApp: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (task.trim() !== "") {
      const newTask: Task = {
        id: Date.now(),
        name: task,
      };
      setTasks([...tasks, newTask]);
      setTask("");
    }
  };

  const handleRemove = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <Container maxWidth="sm" mt={10}>
      <Typography variant="h4" mb={4}>
        Lista de Tarefas
      </Typography>
      <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
        <TextField
          value={task}
          onChange={handleChange}
          label="Adicionar nova tarefa"
          fullWidth
          variant="outlined"
          size="small"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginTop: "1.5rem" }}
        >
          Adicionar
        </Button>
      </form>
      <List>
        {tasks.map((task) => (
          <ListItem key={task.id} disableGutters>
            <ListItemText primary={task.name} />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                onClick={() => handleRemove(task.id)}
                aria-label="delete"
              >
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default TodoApp;

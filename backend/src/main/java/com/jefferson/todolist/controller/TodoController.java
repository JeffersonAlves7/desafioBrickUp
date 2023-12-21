package com.jefferson.todolist.controller;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.jefferson.todolist.dtos.TodoUpdateDTO;
import com.jefferson.todolist.entities.Todo;
import com.jefferson.todolist.repository.TodoRepository;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@CrossOrigin
public class TodoController {

    private final TodoRepository todoRepository;

    @Autowired
    public TodoController(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    @GetMapping("/tasks")
    public ResponseEntity<List<Todo>> getAllTarefas() {
        List<Todo> todos = todoRepository.findAll();
        return ResponseEntity.ok(todos);
    }

    @PostMapping("/task")
    public ResponseEntity<Todo> createTodo(@Valid @RequestBody Todo todo) {
        System.out.println("Sua tarefa foi postada.");

        if (todo.getDescription() == null || todo.getDescription().isEmpty()) {
            todo.setDescription("");
        }

        Todo savedTodo = todoRepository.save(todo);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedTodo);
    }

    @PutMapping("/task/{id}")
    public ResponseEntity<Todo> updateTodo(
            @PathVariable UUID id,
            @RequestBody TodoUpdateDTO updatedTodo) {
        System.out.println("Tarefa alterada.");

        if (!todoRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        Todo existingTodo = todoRepository.findById(id).orElse(null);
        if (existingTodo == null) {
            return ResponseEntity.notFound().build();
        }

        if (updatedTodo.getDescription().isEmpty()) {
            updatedTodo.setDescription(Optional.of(existingTodo.getDescription()));
        }

        if (updatedTodo.getTitle().isEmpty()) {
            updatedTodo.setTitle(Optional.of(existingTodo.getTitle()));
        }

        if (updatedTodo.getStatus().isEmpty()) {
            updatedTodo.setStatus(Optional.of(existingTodo.getStatus()));
        }

        Todo todo = new Todo(id, updatedTodo.getTitle().get(), updatedTodo.getDescription().get(),
                updatedTodo.getStatus().get());

        Todo savedTodo = todoRepository.save(todo);
        return ResponseEntity.ok(savedTodo);
    }

    @DeleteMapping("/task/{id}")
    public ResponseEntity<String> deleteTodoById(@PathVariable UUID id) {
        if (!todoRepository.existsById(id)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Tarefa não encontrada");
        }

        todoRepository.deleteById(id);
        return ResponseEntity.ok("Tarefa apagada");
    }

}

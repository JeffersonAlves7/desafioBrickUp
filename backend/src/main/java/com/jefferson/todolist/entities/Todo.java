package com.jefferson.todolist.entities;

import java.util.UUID;
import com.jefferson.todolist.enums.EnumStatus;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "todos")
@Getter
@Setter
public class Todo {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(unique = false, nullable = false, length = 50)
    private String title;

    @Column(nullable = true)
    private String description;

    @Column(nullable = false)
    private EnumStatus status;

    public Todo() {

    }

    public Todo(String title, String description, EnumStatus status) {
        this.title = title;
        this.description = description;
        this.status = status;
    }

    public Todo(UUID id, String title, String description, EnumStatus status) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
    }
}

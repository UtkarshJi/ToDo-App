package com.todoApp.TodoApp.repository;

import com.todoApp.TodoApp.model.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepository extends JpaRepository<Todo, Long> {}

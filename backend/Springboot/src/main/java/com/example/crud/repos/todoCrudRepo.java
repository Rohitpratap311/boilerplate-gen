package com.example.crud.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.crud.entity.Todo;

@Repository
public interface todoCrudRepo extends JpaRepository<Todo, Long> {

}

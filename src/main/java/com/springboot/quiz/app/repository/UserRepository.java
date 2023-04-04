package com.springboot.quiz.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.quiz.app.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

}

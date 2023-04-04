package com.springboot.quiz.app;

import java.util.ArrayList;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class QuizAppController {
//	http://localhost:8080/quizapp
	@GetMapping(path = "/quizapp")
	public QuizQuestions quizApp() {
		ArrayList<String> options = new ArrayList<>();
		options.add("Damian");
		options.add("Jon");
		options.add("Peter");
		options.add("Alex");
		return new QuizQuestions("What is your name?", "multiple", options);
	}
	
	@GetMapping("/login")
	public String login(Model model) {
		return "login";
	}
}

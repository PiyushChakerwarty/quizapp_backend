package com.springboot.quiz.app;

import java.util.ArrayList;
import java.util.List;

public class QuizQuestions {
	private String question;
	private String answerType;
	private ArrayList<String> options;
	
	public QuizQuestions(String question, String answerType, ArrayList<String> options) {
		super();
		this.question = question;
		this.answerType = answerType;
		this.options = options;
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

	public String getAnswerType() {
		return answerType;
	}

	public void setAnswerType(String answerType) {
		this.answerType = answerType;
	}

	public ArrayList<String> getOptions() {
		return options;
	}

	public void setOptions(ArrayList<String> options) {
		this.options = options;
	}
	
	
	
}

package kcn.bitehack2023.utils;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Answer {


    private String question;
    private boolean isCorrect;


    public Answer(String question, boolean isCorrect) {
        this.question = question;
        this.isCorrect = isCorrect;
    }

    @Override
    public String toString() {
        return "Answer{" +
                "question='" + question + '\'' +
                ", isCorrect=" + isCorrect +
                '}';
    }
}

package kcn.bitehack2023.model;


import kcn.bitehack2023.utils.Answer;
import lombok.Getter;
import lombok.Setter;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Getter
@Setter
public class TaskItem {


    private String taskName;

    private String note;

    private String taskQuestion;

    private List<Answer> answerList;


    @Override
    public String toString() {
        return "TaskItem{" +
                ",\n taskName='" + taskName + '\'' +
                ",\n note='" + note + '\'' +
                ",\n taskQuestion='" + taskQuestion + '\'' +
                ",\n answerList=" + answerList +
                '}';
    }
}

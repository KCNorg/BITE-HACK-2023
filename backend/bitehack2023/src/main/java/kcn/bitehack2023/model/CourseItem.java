package kcn.bitehack2023.model;


import kcn.bitehack2023.utils.Difficulty;
import lombok.Getter;
import lombok.Setter;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Getter
@Setter
@Document("courses")
public class CourseItem {

    @Id
    private ObjectId courseID;

    private String courseName;

    private List<String> tagsArr;

    private String difficulty;

    private String description;

    private List<TaskItem> taskItems;

    @Override
    public String toString() {
        return "CourseItem{" +
                "courseID=" + courseID +
                ",\n courseName='" + courseName + '\'' +
                ",\n tagsArr=" + tagsArr +
                ",\n difficulty=" + difficulty +
                ",\n description='" + description + '\'' +
                ",\n taskItems=" + taskItems +
                '}';
    }
}
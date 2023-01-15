package kcn.bitehack2023.model;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TaskDTO {


    String _id;
    TaskItem item;


    @Override
    public String toString() {
        return "TaskDTO{" +
                "_id='" + _id + '\'' +
                ", item=" + item +
                '}';
    }
}

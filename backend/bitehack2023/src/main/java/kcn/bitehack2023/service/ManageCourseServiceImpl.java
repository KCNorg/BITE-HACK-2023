package kcn.bitehack2023.service;


import com.mongodb.client.model.Filters;
import com.mongodb.client.model.Updates;
import kcn.bitehack2023.model.CourseItem;
import kcn.bitehack2023.model.TaskItem;
import kcn.bitehack2023.repository.CourseRepository;
import org.bson.conversions.Bson;
import org.bson.types.ObjectId;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ManageCourseServiceImpl implements ManageCourseService{

    private final CourseRepository repository;

    private ManageCourseServiceImpl(CourseRepository repository) {
        this.repository = repository;
    }

    @Override
    public CourseItem addTaskToCourse(TaskItem task, String id) {

        CourseItem item = repository.findByCourseID(id);
        List<TaskItem> taskItems = item.getTaskItems();
        taskItems.add(task);
        item.setTaskItems(taskItems);

        return repository.save(item);
    }

    @Override
    public CourseItem addCourse(CourseItem item) {
        return repository.save(item);
    }
}

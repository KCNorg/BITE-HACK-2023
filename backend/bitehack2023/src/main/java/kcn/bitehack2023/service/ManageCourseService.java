package kcn.bitehack2023.service;

import kcn.bitehack2023.model.CourseItem;
import kcn.bitehack2023.model.TaskItem;
import org.bson.types.ObjectId;
public interface ManageCourseService {

    CourseItem addTaskToCourse(TaskItem task, String id);

    CourseItem addCourse(CourseItem item);

}

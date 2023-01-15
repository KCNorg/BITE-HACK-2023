package kcn.bitehack2023.controller;


import kcn.bitehack2023.model.CourseItem;
import kcn.bitehack2023.model.TaskDTO;
import kcn.bitehack2023.repository.CourseRepository;
import kcn.bitehack2023.service.ManageCourseService;
import org.bson.types.ObjectId;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.HashMap;
import java.util.Map;

@Controller
@CrossOrigin
public class ManageController {

    Logger log = LoggerFactory.getLogger(getClass());
    private final ManageCourseService manageCourseService;

    public ManageController(ManageCourseService manageCourseService) {
        this.manageCourseService = manageCourseService;
    }


    @PostMapping("/manageTask")
    public ResponseEntity<?> manageTask(@RequestBody TaskDTO body) {

        log.info(body.toString());
        log.info(body.getItem().toString());
        CourseItem courseItem = null;
        try {
            courseItem = manageCourseService.addTaskToCourse(body.getItem(), body.get_id());
        } catch (Exception e) {
            return new ResponseEntity<>("Error while adding task to course", HttpStatus.INTERNAL_SERVER_ERROR);
        }
        log.info(courseItem.toString());

        return new ResponseEntity<>(HttpStatus.CREATED);
    }


    @PostMapping("/manageCourse")
    public ResponseEntity<?> manageCourse(@RequestBody CourseItem body) {


        log.info(body.toString());
        CourseItem courseItem = null;
        try {
            courseItem = manageCourseService.addCourse(body);
        } catch (Exception e) {
            return new ResponseEntity<>("Error while creating course", HttpStatus.INTERNAL_SERVER_ERROR);
        }
        Map<String, Object> response = new HashMap<>();
        response.put("courseID", courseItem.getCourseID().toString());
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }


}

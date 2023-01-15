package kcn.bitehack2023.controller;

import kcn.bitehack2023.repository.CourseRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

@CrossOrigin
@Controller
public class HomeController {

    Logger log = LoggerFactory.getLogger(getClass());

    private final CourseRepository repository;

    public HomeController(CourseRepository repository) {
        this.repository = repository;
    }


    @GetMapping("/home")
    public String home() {

        log.info(repository.findAll().toString());
        log.info("ROOOOOOOOOMAN");

        return "home";
    }
}
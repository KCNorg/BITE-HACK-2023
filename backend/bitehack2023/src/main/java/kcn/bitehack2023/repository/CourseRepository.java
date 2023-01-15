package kcn.bitehack2023.repository;


import kcn.bitehack2023.model.CourseItem;
import org.bson.Document;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface CourseRepository extends MongoRepository<CourseItem, ObjectId> {

    List<CourseItem> findByTagsArr(String tag);

    CourseItem findByCourseID(String id);

    @Override
    <S extends CourseItem> S save(S item);
}

package dao;

/**
 * Created by joff on 1/27/17.
 */
import models.FantasyFootball.Quarterback;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

//TODO will have to change to more specific interface, and have many interfaces as opposed to a generic

@RepositoryRestResource(collectionResourceRel = "quarterbacks", path = "FantasyFootball")
public interface FantasyFootballDao extends MongoRepository<Quarterback,String>{
    public String getQuarterbacks();

    void delete(Quarterback deleted);

    List<Quarterback> findAll();

    Quarterback save(Quarterback saved);
}

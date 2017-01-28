package dao;

/**
 * Created by joff on 1/27/17.
 */
import models.FantasyFootball.Quarterbacks;
import org.springframework.data.mongodb.repository.MongoRepository;

//TODO will have to change to more specific interface, and have many interfaces as opposed to a generic
public interface FantasyFootballDao extends MongoRepository<Quarterbacks,String>{
    public String getQuarterbacks();
}

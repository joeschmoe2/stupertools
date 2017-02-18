package endpoints;
/*
import dao.FantasyFootballDao;
import models.FantasyFootball.Quarterback;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import startup.Application;

import java.util.List;
import java.util.logging.Logger;

@RestController
public class FantasyFootballEndpoints {

    private Logger logger = Logger.getLogger(Application.class.getName());

    @Autowired
    FantasyFootballDao fantasyDao;

    @RequestMapping("/")
    public String index() {
        return "Greetings from Spring Boot!";
    }

    //@GetMapping("/FantasyFootball")
    //@CrossOrigin(origins = "http://localhost:5555")
    @CrossOrigin(origins = "*")
    //@RequestMapping(value = "/FantasyFootball", method = RequestMethod.GET)
    @RequestMapping("/FF")
    public List<Quarterback> getQuarterbacks() {
        logger.info("yay");

        List<Quarterback> qbs = fantasyDao.findAll();
        if (qbs == null) {
            //return new ResponseEntity("No QBS found u newb", HttpStatus.NOT_FOUND);
        }

        //return new ResponseEntity(qbs, HttpStatus.OK);
        return qbs;
    }
    @PostMapping(value = "/customers")
    public ResponseEntity createCustomer(@RequestBody Customer customer, @Pathvariable Path path) {

        customerDAO.create(customer);

        return new ResponseEntity(customer, HttpStatus.OK);
    }
    //@RequestParam(required=false, defaultValue="World") String name
}
*/
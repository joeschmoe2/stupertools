package models.FantasyFootball;

/**
 * Created by joff on 1/27/17.
 */

import org.springframework.data.annotation.Id;

public class Quarterback {
    //TODO probably won't have a class for each position but this is just to get some data on the page

    @Id
    public String id;

    public String firstName;
    public String lastName;

    public Quarterback() {
    }

    public Quarterback(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    @Override
    public String toString() {
        return String.format(
                "Customer[id=%s, firstName='%s', lastName='%s']",
                id, firstName, lastName);
    }
}

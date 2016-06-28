package controllers;

import play.libs.Json;
import play.mvc.Result;

import java.util.HashSet;
import java.util.Set;

/**
 * Created by sjb on 6/28/16.
 */
public class HeroRest extends play.mvc.Controller {
    private static Set<Hero> heroSet = new HashSet<>();

    static {
        heroSet.add(new Hero(1, "sajad"));
        heroSet.add(new Hero(2, "hamid"));
        heroSet.add(new Hero(3, "asghar"));
        heroSet.add(new Hero(4, "ali"));
        heroSet.add(new Hero(5, "mamad"));
        heroSet.add(new Hero(6, "yas"));
        heroSet.add(new Hero(7, "zahra"));
        heroSet.add(new Hero(8, "oveis"));
    }

    public static class Hero {
        private String name;
        private Integer id;

        public Hero(Integer id, String name) {
            this.id = id;
            this.name = name;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public Integer getId() {
            return id;
        }

        public void setId(Integer id) {
            this.id = id;
        }
    }

    public Result getHeroes() {
        return ok(Json.toJson(heroSet));
    }
}

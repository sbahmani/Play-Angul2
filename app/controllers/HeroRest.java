package controllers;

import play.libs.Json;
import play.mvc.Result;

import java.util.HashSet;
import java.util.Set;
import java.util.TreeSet;

/**
 * Created by sjb on 6/28/16.
 */
public class HeroRest extends play.mvc.Controller {
    private static Set<Hero> heroSet = new TreeSet<>();

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

    public static class Hero implements Comparable<Hero> {
        private String name;
        private Integer id;

        public Hero() {
        }

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

        @Override
        public boolean equals(Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            Hero hero = (Hero) o;

            if (name != null ? !name.equals(hero.name) : hero.name != null) return false;
            return id != null ? id.equals(hero.id) : hero.id == null;

        }

        @Override
        public int hashCode() {
            int result = name != null ? name.hashCode() : 0;
            result = 31 * result + (id != null ? id.hashCode() : 0);
            return result;
        }

        @Override
        public int compareTo(Hero o) {
            return id - o.getId();
        }
    }

    public Result getHeroes() {
        return ok(Json.toJson(heroSet));
    }

    public Result editHeroes(String id) {
        Hero hero = Json.fromJson(request().body().asJson(), Hero.class);
        Hero heroInSet;
        heroSet.remove(heroSet.stream().filter(he -> he.id == hero.id).findAny().get());
        heroSet.add(hero);
        return ok(Json.toJson(hero));
    }

    public Result deleteHeroes(Integer id) {

        heroSet.remove(heroSet.stream().filter(he -> he.id == id).findAny().get());
        return ok(Json.toJson(id));
    }

    public Result addHeroes() {
        Hero hero = Json.fromJson(request().body().asJson(), Hero.class);
        hero.setId(heroSet.stream().max((h1, h2) -> Integer.compare(h1.id, h2.id)).get().getId() + 1);
        heroSet.add(hero);
        return ok(Json.toJson(hero));
    }
}

package jwt;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

/**
 * Created by sjb on 09/07/16.
 */
public class User {
    private String username;
    private String password;
    private Set<String> roles;

    public User(String username, String password, Set<String> roles) {
        this.username = username;
        this.password = password;
        this.roles = roles;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Set<String> getRoles() {
        return roles;
    }

    public void setRoles(Set<String> roles) {
        this.roles = roles;
    }

    public static Map<String, User> ALL_USERS() {
        HashMap<String, User> map = new HashMap<>();
        Set<String> roles1 = new HashSet<>();
        roles1.add("admin");
        roles1.add("user");
        Set<String> roles2 = new HashSet<>();
        roles2.add("user");
        User u1 = new User("admin", "admin123", roles1);
        User u2 = new User("user", "user123", roles2);
        map.put(u1.getUsername(), u1);
        map.put(u2.getUsername(), u2);
        return map;
    }
}

package jwt;

import java.util.HashMap;

/**
 * Created by sjb on 09/07/16.
 */
public class Claim extends HashMap<String, Object> {
    public Claim(String id, String audience, Long timestamp) {
        put("id", id);
        put("audience", audience);
        put("timestamp", timestamp);
    }
}

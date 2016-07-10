package jwt;

import com.auth0.jwt.JWTVerifier;

/**
 * Created by sjb on 7/9/16.
 */
public class Verifier extends JWTVerifier {
    public Verifier() {
        super("My Secret Key!");
    }
}

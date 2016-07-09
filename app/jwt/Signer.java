package jwt;

import com.auth0.jwt.JWTSigner;

/**
 * Created by sjb on 09/07/16.
 */
public class Signer extends JWTSigner {
    public Signer() {
        super("My Secret Key!");
    }
}

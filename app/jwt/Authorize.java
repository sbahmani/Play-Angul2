package jwt;

import com.auth0.jwt.JWTVerifyException;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Http;
import play.mvc.Result;

import javax.inject.Inject;
import java.io.IOException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.security.SignatureException;
import java.util.HashSet;
import java.util.Map;
import java.util.concurrent.CompletableFuture;

/**
 * Created by sjb on 09/07/16.
 */
public class Authorize extends Controller{

    @Inject
    Signer signer;
    @Inject
    Verifier verifier;

    public Result authorize() {
        Http.Cookie cookie = request().cookie("token");
        if (cookie != null) {
            Map<String, Object> verify = null;
            try {
                verify = verifier.verify(cookie.value());
            } catch (InvalidKeyException | IOException | SignatureException | JWTVerifyException | NoSuchAlgorithmException e) {
                response().discardCookie("token");
                return unauthorized("invalid token");
            }
            return ok(verify.get("audience").toString());
        } else {
            return unauthorized("need token");
        }
    }


    public Result login() {
        Http.Cookie cookie = request().cookie("token");
        if (cookie != null) {
            Map<String, Object> verify = null;
            try {
                verify = verifier.verify(cookie.value());
                return ok(verify.get("audience").toString());
            } catch (InvalidKeyException | IOException | SignatureException | JWTVerifyException | NoSuchAlgorithmException e) {
                //not valid token
            }
        }
        String username = request().body().asJson().get("username").asText();
        String password = request().body().asJson().get("password").asText();
        User loadedUser = User.ALL_USERS().get(username);
        if (loadedUser == null || !loadedUser.getPassword().equals(password)) {
            response().discardCookie("token");
            return unauthorized("wrong password");
        }

        String sign = signer.sign(new Claim(username, Json.toJson(loadedUser.getRoles()).toString(), System.currentTimeMillis()));
        response().setCookie(new Http.Cookie("token", sign, 3600, "/", "localhost", false, true));
        return ok(Json.toJson(loadedUser.getRoles()));
    }

    public Result logout() {
        response().discardCookie("token");
        return ok("log out!");
    }

}

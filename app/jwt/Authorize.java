package jwt;

import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Http;
import play.mvc.Result;

import javax.inject.Inject;

/**
 * Created by sjb on 09/07/16.
 */
public class Authorize extends Controller {

    @Inject
    Signer signer;


    public Result login() {
        String username = request().body().asJson().get("username").asText();
        String password = request().body().asJson().get("password").asText();
        User loadedUser = User.ALL_USERS().get(username);
        if (loadedUser == null || !loadedUser.getPassword().equals(password)) {
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

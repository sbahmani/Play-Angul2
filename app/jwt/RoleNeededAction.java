package jwt;


import com.auth0.jwt.JWTVerifyException;
import play.libs.Json;
import play.mvc.Action;
import play.mvc.Http;
import play.mvc.Result;

import javax.inject.Inject;
import java.io.IOException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.security.SignatureException;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.CompletionStage;


/**
 * Created by Sajad Bahmani
 */
public class RoleNeededAction extends Action<RoleNeeded> {

    @Inject
    Verifier verifier;


    public CompletionStage<Result> call(Http.Context ctx) {
        Http.Cookie cookie = ctx.request().cookie("token");
        if (cookie == null) {
            return CompletableFuture.supplyAsync(() -> unauthorized());
        }
        try {
            Map<String, Object> verify = verifier.verify(cookie.value());
            HashSet<String> audience = Json.fromJson(Json.parse(verify.get("audience").toString()), HashSet.class);

            System.out.println(verify);
        } catch (InvalidKeyException | IOException | SignatureException | JWTVerifyException | NoSuchAlgorithmException e) {
            return CompletableFuture.supplyAsync(() -> unauthorized());
        }
//        String s = configuration.value()[1];
        CompletionStage<Result> call = delegate.call(ctx);
        return call;
    }
}

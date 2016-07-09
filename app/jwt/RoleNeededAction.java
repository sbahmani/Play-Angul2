package jwt;


import play.mvc.Action;
import play.mvc.Http;
import play.mvc.Result;

import java.util.concurrent.CompletionStage;


/**
 * Created by Sajad Bahmani
 */
public class RoleNeededAction extends Action<RoleNeeded> {

    public CompletionStage<Result> call(Http.Context ctx) {
        ctx.request().cookie("token").value();
        String s = configuration.value()[1];
        CompletionStage<Result> call = delegate.call(ctx);
        return call;
    }
}

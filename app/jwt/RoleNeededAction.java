package jwt;


import play.mvc.Action;
import play.mvc.Http;
import play.mvc.Result;

import java.util.concurrent.CompletionStage;



/**
 * Created by Sajad Bahmani
 */
public class RoleNeededAction extends Action<RoleNeeded> {


    public RoleNeededAction() {
    }

    public CompletionStage<Result> call(Http.Context ctx) {
        System.out.println(ctx.request().cookie("metabase.SESSION_ID").value());
        System.out.println("1" + configuration.value()[1]);
        CompletionStage<Result> call = delegate.call(ctx);
        System.out.println("3");

        return call;
    }
}

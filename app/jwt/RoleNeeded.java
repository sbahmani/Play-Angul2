package jwt;

import play.mvc.With;

import java.lang.annotation.*;

/**
 * @author Sajad Bahmani
 */
@With(RoleNeededAction.class)
@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.TYPE, ElementType.METHOD})
@Inherited
@Documented
public @interface RoleNeeded {
    String[] value() default {};
}

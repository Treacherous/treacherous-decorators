import { withRule } from "../with-rule";
export function email(appliesIf, messageOverride) {
    return withRule("email", true, appliesIf, messageOverride);
}

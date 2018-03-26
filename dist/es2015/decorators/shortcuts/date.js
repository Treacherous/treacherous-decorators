import { withRule } from "../with-rule";
export function date(appliesIf, messageOverride) {
    return withRule("date", true, appliesIf, messageOverride);
}

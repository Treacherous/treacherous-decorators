import { withRule } from "../with-rule";
export function number(appliesIf, messageOverride) {
    return withRule("number", true, appliesIf, messageOverride);
}

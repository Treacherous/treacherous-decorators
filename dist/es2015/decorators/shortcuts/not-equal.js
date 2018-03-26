import { withRule } from "../with-rule";
export function notEqual(value, appliesIf, messageOverride) {
    return withRule("notEqual", value, appliesIf, messageOverride);
}

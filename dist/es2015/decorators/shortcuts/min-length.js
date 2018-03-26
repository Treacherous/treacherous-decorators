import { withRule } from "../with-rule";
export function minLength(length, appliesIf, messageOverride) {
    return withRule("minLength", length, appliesIf, messageOverride);
}

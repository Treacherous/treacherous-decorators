import { withRule } from "../with-rule";
export function maxLength(length, appliesIf, messageOverride) {
    return withRule("maxLength", length, appliesIf, messageOverride);
}
